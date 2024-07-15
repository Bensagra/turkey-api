import {Router} from "express";
import { methods as productControllers } from "../controllers/product.controller.js";


const router = Router();

router.get("/",productControllers.getproduct);
router.get("/get_product_by_id", productControllers.getproductById);
router.get("/product_subcategory_id/", productControllers.getCategory);
router.get("/category", productControllers.getFromCategory);
router.get("/gender", productControllers.getFromGender);
router.post("/",productControllers.postProduct);
router.put("/delete",productControllers.deleteProduct);
router.get("/all_category", productControllers.getAllCategory);
router.get("/all_subcategory", productControllers.getSubCategory);
router.get("/subCategory", productControllers.getAllSubCategory);
router.get("/get_productos", productControllers.getProductos);
router.get("/get_material_name", productControllers.getMaterialName);
router.get("/get_material", productControllers.getAllMaterial);
router.put("/", productControllers.updateProduct);
export default router;