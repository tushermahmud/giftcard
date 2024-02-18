import { Request, Response } from "express";
import { validationResult } from "express-validator";
import axios from "axios";
import {
  createSignature,
  gamelovHeaderDate,
  getPrimitiveValues,
  tokenExists,
} from "../helpers/helper";

export const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  const { username, password } = req.body;

  try {
    const giftlovData = {
      username: username,
      password: password,
    };

    const options = {
      method: "POST",
      url: "https://staging.giftlov.com/api/Base/generateToken",
      headers: {
        "X-GIFTLOV-DATE": new Date()
          .toISOString()
          .replace(/[^0-9]/g, "")
          .slice(2, 14),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: giftlovData,
    };
    const { data } = await axios.request(options);
    res.status(200).json({
      message: "Login successful",
      data,
    });
  } catch (errors: any) {
    if (errors.response) {
      const { status, data } = errors.response;
      return res.status(status).json({
        error: data.message,
      });
    } else {
      return res.status(500).json({ error: "Network Error!" });
    }
  }
};

export const checkToken = async (req: Request, res: Response) => {
  const token = tokenExists(req.headers["token"] as string);
  if (!token) {
    return res.status(401).json({
      error: "No token found!",
    });
  }
  try {
    const reqBody = req.body;
    const xGiftlovDate = gamelovHeaderDate(new Date());
    const path = req.path.split("/")[1];
    const method = req.method.toUpperCase();
    const signature = createSignature(
      path,
      method,
      reqBody,
      token,
      xGiftlovDate
    );

    const options = {
      method: method,
      url: `${process.env.GIFTLOVAPI}${path}`,
      headers: {
        signature: signature,
        "X-GIFTLOV-DATE": xGiftlovDate,
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    };
    const { data } = await axios.request(options);

    res.status(200).json({
      data,
    });
  } catch (error: any) {
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({
        error: data.message,
      });
    } else {
      return res.status(500).json({ error: "Network Error!" });
    }
  }
};
