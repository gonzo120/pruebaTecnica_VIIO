import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getProducts } from "../controllers/products.controller.js";

const router = Router()

router.get("/products", authRequired, getProducts)

export default router