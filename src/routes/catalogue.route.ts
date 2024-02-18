import express from "express";
import {
  getCatalogues,
} from "../controllers/catalogue.controller";
const router = express.Router();

router.get("/items", getCatalogues);

export default router;
