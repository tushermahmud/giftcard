import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';
import axios from 'axios'; // Import axios
import { error } from "console";
import crypto from 'crypto';
import { gamelovHeaderDate } from "../helpers/helper";
const authCheck = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['token'] as string | undefined;
    if (!token) {
        return res.status(401).json({
            error: "No token found!"
        });
    }
    try {
        if (!process.env.LOGINTOKEN) {
            throw new Error("Secret key is undefined");
        }
        const xGiftlovDate = gamelovHeaderDate(new Date());
        const path = 'checkToken'; // The API endpoint you're calling
        const method = 'POST'; // The HTTP method for your request
        const body = JSON.stringify({}); // The body of your request, if applicable
        const data1= Object.values(req.body).sort((a:any,b:any)=> a-b).join('');
        console.log("data1",req.body)

            // Create the pre-signature string
            let preSignatureString = `${path}${method}${data1}${"17022024160425"}${token}`;

            // Generate the signature
            console.log(preSignatureString)
            const signature = crypto.createHmac('sha512', "coding_challenge_1").update("checkTokenPOST17022024160425eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNdW5lcm8iLCJleHAiOjE3MDgyNzQxNzgsInR5cGUiOiJBdXRob3JpemF0aW9uVG9rZW4iLCJjcmVhdGlvbkRhdGUiOjE3MDgxODc3NzgsInVzZXJJZCI6MTEzLCJ2ZXJzaW9uIjoxfQ.2dFdQQ0rmBr8WIbXT-wK_9XOV428h7ULRYp73HFe3oI").digest('hex');
            console.log(signature);
            return
        const options = {
            method: 'POST',
            url: 'https://staging.giftlov.com/api/Base/checkToken',
            headers: {
              signature:preSignatureString,
              'X-GIFTLOV-DATE': xGiftlovDate,
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: token
            }
          };

        // Call the Giftlov API to check the token
        const { data } = await axios.request(options);

        console.log(data.error)
        /* if (response.status === 200) {
            next();
        } else {
            return res.status(401).json({
                error: "The token is not valid according to Giftlov API!"
            });
        } */
    } catch (e) {
        console.log(e)
        res.status(401).json({
            error: (e as Error).message
        });
    }
}

export default authCheck;