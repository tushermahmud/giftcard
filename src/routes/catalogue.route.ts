import authCheck from "../middleware/auth";
import express from "express";
import {
  getCatalogues,
} from "../controllers/catalogue.controller";
import { check } from "express-validator"
const router = express.Router();

router.get("/items", getCatalogues);

export default router;
