//import User from "../modals/User";
import { Request, Response } from "express";
import { createSignature, gamelovHeaderDate, getQueries, tokenExists } from "../helpers/helper";
import axios from "axios";

export const getCatalogues = async (req: Request, res: Response) => {
  const token = tokenExists(req.headers["token"] as string);
  if (!token) {
    return res.status(401).json({
      error: "No token found!",
    });
  }
  const queries = req.query;
  const joinedQuery = getQueries(Object.values(queries));
  const xGiftlovDate = gamelovHeaderDate(new Date());
  const path = req.path.split("/")[1];
  const method = req.method.toUpperCase();
  const signature = createSignature(path, method, joinedQuery, token as string, xGiftlovDate)
  
    const options = {
      method: method,
      url: `${process.env.GIFTLOVAPI}${path}`,
      params: queries,
      headers: {
        signature: signature,
        'X-GIFTLOV-DATE': xGiftlovDate,
        Accept: 'application/json',
        Authorization: token
      }
    };
    try {
      const { data } = await axios.request(options);
      return res.status(200).json(data);
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;
        return res.status(status).json(data);
      } else {
        return res.status(500).json({ error: "Network Error!" });
      }
    }
};
