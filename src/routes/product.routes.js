import {Router, req, res} from "express";
import { methods as productControllers } from "../controllers/product.controller";


const router = Router();


router.get("/",productControllers.getproduct);
router.get("/:product_subcategory_id", productControllers.getCategory);
//router.get("/:category", productControllers.getFromCategory);
//router.get("/:gender", productControllers.getFromGender);
router.post("/",productControllers.postProduct);
router.delete("/:delete",productControllers.deleteProduct);
export default router;