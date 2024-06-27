import {Router} from "express";
import { methods as productControllers } from "../controllers/product.controller.js";
import multer from "multer";
import {dirname, extname, join} from "path"
import { fileURLToPath } from "url";
import express from "express";
const router = Router();

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const MIMETYPES = ["image/png", "image/jpg", "image/jpeg"];

const multerUpload = multer({
    fileFilter(req, file, cb){
        if (MIMETYPES.includes(file.mimetype)) {
            cb(null, true);
            
        }else{
            cb(new Error("Invalid file type"));
    }},
    storage: multer.diskStorage({
        destination: join(CURRENT_DIR, '../uploads'),
        filename: (req, file, cb) => {
            const fileExtension = extname(file.originalname);
        const fileName = file.originalname.split(".")[0];
        cb(null, `${req.params.id}${fileExtension}`);
        }
        
    }),
    limits: {
        fieldSize: 10000000,
    },
});
router.use("/uploads", express.static(join(CURRENT_DIR, '../uploads')));
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