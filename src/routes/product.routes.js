import {Router, request, response} from "express";
import { methods as productControllers } from "../controllers/product.controller";


const router = Router();


router.get("/",productControllers.getproduct);
router.get("/:category", productControllers.getFromCategory);
router.get("/:gender", productControllers.getFromGender);
router.get("/:getCategory", productControllers.getCategory);
router.post("/",productControllers.postProduct);
router.delete("/:delete",productControllers.deleteProduct);
export default router;