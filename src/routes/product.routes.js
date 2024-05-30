import {Router, request, response} from "express";
import { methods as productControllers } from "../controllers/product.controller";


const router = Router();


router.get("/",productControllers.getproduct);
router.get("/:category", productControllers.getFromCategory);
router.get("/:gender", productControllers.getFromGender);
router.post("/",productControllers.postProduct);
export default router;