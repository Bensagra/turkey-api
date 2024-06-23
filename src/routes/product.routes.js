import {Router, req, res} from "express";
import { methods as productControllers } from "../controllers/product.controller";


const router = Router();
//const multer = require('multer');
//const upload = multer({dest : 'uploads/'});


router.get("/",productControllers.getproduct);
router.get("/get_product_by_id", productControllers.getproductById);
router.get("/product_subcategory_id/", productControllers.getCategory);
router.get("/category", productControllers.getFromCategory);
router.get("/gender", productControllers.getFromGender);
router.post("/",productControllers.postProduct);
router.delete("/delete",productControllers.deleteProduct);
router.get("/all_category", productControllers.getAllCategory);
router.get("/all_subcategory", productControllers.getSubCategory);
router.get("/subCategory", productControllers.getAllSubCategory);
router.get("/get_productos", productControllers.getProductos);
router.get("/get_material_name", productControllers.getMaterialName);
//router.post("/image", upload.single('image'), productControllers.postImage);
export default router;