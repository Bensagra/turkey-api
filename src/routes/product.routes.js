import {Router} from "express";
import { methods as productControllers } from "../controllers/product.controller.js";
import multer from "multer";
import {dirname, join} from "path"
import { fileURLToPath } from "url";

const router = Router();
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));

const multerUpload = multer({
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, '../uploads'),
        
    }),
    limits: {
        fieldSize: 10000000,
    },
});

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
router.post("/post_image",multerUpload.single("image"), ()=>console.log("image uploaded"));
router.put("/", productControllers.updateProduct);
export default router;