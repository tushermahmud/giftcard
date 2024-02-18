import express from "express";
import { getOrders, placeOrder } from "../controllers/order.controller";
const router = express.Router();

router.post("/placeOrder", placeOrder);
router.get("/orders", getOrders);
export default router;
