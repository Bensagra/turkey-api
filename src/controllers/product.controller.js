import { status } from "express/lib/response";
import {getConnection} from "../database/database";

const getproduct= async(req,res)=>{
try {
    const connection = await getConnection();
const result = await connection.query("SELECT * FROM `Product`");
res.json(result);
} catch (error) {
    res.status(500).
    res.send(error.message);
    
}

};


const getFromCategory = async (req, res) => {
    try {
       const {product_subcategory_id} = req.body;
        const connection = await getConnection();
        
        const query = "SELECT * FROM `Product`, `SubCategory`, `Category` WHERE Product.product_subcategory_id = "+ product_subcategory_id + "  and SubCategory.subcategory_id = Category.category_id";
        const result = await connection.query(query, product_subcategory_id);
        
       
        
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getFromGender = async (req, res) => {
    try {
       const {product_gender_id} = req.body;
        const connection = await getConnection();
         const query = "SELECT * FROM `Product` WHERE Product.product_gender_id = "+ product_gender_id;
         const result = await connection.query(query, product_gender_id);
        
       
        
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

   const postProduct= async(req,res)=>{
    try {
       
     const {product_name,product_title, product_description,product_material_id, product_photo_url,product_price,product_subcategory_id, product_gender_id} = req.body;
     const product ={
        product_name,product_title, product_description,product_material_id, product_photo_url,product_price,product_subcategory_id, product_gender_id
    }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO Product SET ?",product);
    res.json(result);
      
    } catch (error) {
        res.status(500).
        res.send(error.message);
        
    }
    
    };



export const methods = {
    getproduct,
    postProduct,
    getFromCategory,
    getFromGender,
}