import express from "express";
import { checkToken, login } from "../controllers/user.controller";
import { check } from "express-validator";

const router = express.Router();


router.post(
  "/login",
  [
    check("username").notEmpty().withMessage("Username is Required!"),
    check("password").notEmpty().withMessage("Password is Required!"),
  ],
  login
);

router.post(
  "/checkToken",
  checkToken
);







export default router;
