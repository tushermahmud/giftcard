import express from "express";
import { placeOrder } from "../controllers/order.controller";
const router = express.Router();

router.post("/placeOrder", placeOrder);

export default router;
