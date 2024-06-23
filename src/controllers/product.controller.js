import { status } from "express/lib/response";
import {getConnection} from "../database/database";
//const ftpStorage = require('multer-ftp');
//const ftp = require('ftp');
//const multer = require('multer');
//const ftpClient = new ftp();
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


const getAllCategory = async (req, res) => {
    try {
       
  
        const connection = await getConnection();
        
        const query = "SELECT * FROM `Category`";
        const result = await connection.query(query);
        res.json(result);

    } catch (error) {
        res.status(500).send(error.message);
    }
};


const getFromCategory = async (req, res) => {
    try {
       const {product_subcategory_id} = req.query;
  
        const connection = await getConnection();
        
        const query = "SELECT * FROM `Product`, `SubCategory`, `Category` WHERE Product.product_subcategory_id = "+ product_subcategory_id + "  and SubCategory.subcategory_id = Category.category_id";
        const result = await connection.query(query, product_subcategory_id);
        res.json(result);

    } catch (error) {
        res.status(500).send(error.message);
    }
};




   const postProduct= async(req,res)=>{
    try {
       
     const {product_name,product_title, product_description,product_material_id, product_photo_url,product_price,product_subcategory_id, product_gender_id} = req.query;
     const product ={
        product_name,product_title, product_description,product_material_id, product_photo_url,product_price,product_subcategory_id, product_gender_id
    }
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO Product SET ?",product);
    res.json(result).status(200);
      
    } catch (error) {
        res.status(500).
        res.send(error.message);
        
    }
    
    };


    const getFromGender = async (req, res) => {
        try {
           const {product_gender_id} = req.query;
            const connection = await getConnection();
             const query = "SELECT * FROM `Product` WHERE Product.product_gender_id = " + product_gender_id;
             const result = await connection.query(query, product_gender_id);
            
           
            
            res.json(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    const deleteProduct= async(req,res)=>{
        try {
            const {product_id} = req.query;
            const connection = await getConnection();
        const result = await connection.query("DELETE FROM `Product` WHERE product_id = "+ product_id);
        res.json(result).status(200);
        } catch (error) {
            res.status(500).
            res.send(error.message);
            
        }
        
        };

        

        const getCategory = async(req, res) => {
            console.log("hey")
            try {
              const  {product_subcategory_id} = req.query;
                const connection = await getConnection();
                console.log(product_subcategory_id)
                const query = "SELECT Category.* FROM Category JOIN SubCategory ON Category.category_id = SubCategory.category_id WHERE SubCategory.subcategory_id = " + product_subcategory_id;
                const result = await connection.query(query, product_subcategory_id);
               
              
               
               res.json(result);
            } catch (error) {
                res.status(500).send(error.message);
            }
        }

        const getproductById= async(req,res)=>{
            try {
                const  {product_id} = req.query;
                const connection = await getConnection();
            const result = await connection.query("SELECT * FROM `Product` WHERE product_id =" + product_id);
            res.json(result);
            } catch (error) {
                res.status(500).
                res.send(error.message);
                
            }
            
            };

            const getAllSubCategory= async(req,res)=>{
                try {
                
                    const connection = await getConnection();
                const result = await connection.query("SELECT * FROM `SubCategory`");
                res.json(result).status(200);
                } catch (error) {
                    res.status(500).
                    res.send(error.message);
                    
                }
                
                };


            const getSubCategory= async(req,res)=>{
                try {
                    const  {category_id} = req.query;
                    const connection = await getConnection();
                const result = await connection.query("SELECT * FROM `SubCategory` WHERE category_id =" + category_id);
                res.json(result);
                } catch (error) {
                    res.status(500).
                    res.send(error.message);
                    
                }
                
                };

                const getProductos= async(req,res)=>{
                    try {
                      
                        const connection = await getConnection();
                    const result = await connection.query("SELECT * FROM `Product` WHERE category_id =" + category_id);
                    res.json(result);
                    } catch (error) {
                        res.status(500).
                        res.send(error.message);
                        
                    }
                    
                    };
    

             //   const postImage = async(req,res)=>{
              //    console.log(req.file);
              //    res.send(req.file);
                  //const upload = multer({storage, req},);
                  //exports.upload = upload.single('image');
              ///  }
   

//const storage = new ftpStorage({
       // basepath: 'ftp://images%2540turkeyhombre.com.ar@ftp.turkeyhombre.com.ar/images',
      //  connection: ftpClient,
      //  destination: (req, file, options, cb) => {
//cb(null, './');
      //  }
 //   });






export const methods = {
    getproduct,
    postProduct,
    getFromCategory,
    getFromGender,
    deleteProduct,
    getCategory,
    getproductById,
    getAllCategory,
    getSubCategory,
    getAllSubCategory,
    getProductos,
  //  postImage
}