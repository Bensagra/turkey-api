
import {getConnection} from "../database/database.js";

const getproduct= async(req,res)=>{
    
try {
   
    const connection = await getConnection();
const result = await connection.query("SELECT * FROM `Product` WHERE Product.delete = 0");
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
        
        const query = "SELECT * FROM `Product`, `SubCategory`, `Category` WHERE Product.product_subcategory_id = "+ product_subcategory_id + "  and SubCategory.subcategory_id = Category.category_id and Product.delete = 0";
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
             const query = "SELECT * FROM `Product` WHERE Product.delete = 0 and Product.product_gender_id = " + product_gender_id;
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
        const result = await connection.query("UPDATE Product p SET p.delete = 1 WHERE p.product_id = "+ product_id);
        res.json(result).status(200);
        } catch (error) {
            res.status(500).
            res.send(error.message);
            
        }
        
        };


        const updateProduct = async (req, res) => {
            try {
                const {
                    product_id,
                    product_name,
                    product_title,
                    product_description,
                    product_material_id,
                    product_photo_url,
                    product_price,
                    product_subcategory_id,
                    product_gender_id
                } = req.query;
        
                if (!product_id) {
                    return res.status(400).json({ message: "Product ID is required" });
                }
        
                const fieldsToUpdate = {};
        
                if (product_name) fieldsToUpdate.product_name = product_name;
                if (product_title) fieldsToUpdate.product_title = product_title;
                if (product_description) fieldsToUpdate.product_description = product_description;
                if (product_material_id) fieldsToUpdate.product_material_id = product_material_id;
                if (product_photo_url) fieldsToUpdate.product_photo_url = product_photo_url;
                if (product_price) fieldsToUpdate.product_price = product_price;
                if (product_subcategory_id) fieldsToUpdate.product_subcategory_id = product_subcategory_id;
                if (product_gender_id) fieldsToUpdate.product_gender_id = product_gender_id;
        
                let updateQuery = "UPDATE Product p SET ";
                const queryParams = [];
        
                for (const [key, value] of Object.entries(fieldsToUpdate)) {
                    updateQuery += `p.${key} = ?, `;
                    queryParams.push(value);
                }
        
                // Remove the last comma and space
                updateQuery = updateQuery.slice(0, -2);
        
                updateQuery += " WHERE p.product_id = ?";
                queryParams.push(product_id);
        
                const connection = await getConnection();
                const result = await connection.query(updateQuery, queryParams);
        
                res.json(result).status(200);
            } catch (error) {
                res.status(500).send(error.message);
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
            const result = await connection.query("SELECT * FROM `Product` WHERE Product.delete = 0 and product_id =" + product_id);
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


                const getMaterialName= async(req,res)=>{
                    res.header("Access-Control-Allow-Origin", "*")
                try {
                    const  {product_material_id} = req.query;
                    const connection = await getConnection();
                const result = await connection.query("SELECT * FROM `Material` WHERE Material.material_id =" + product_material_id);
                res.json(result);
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
                   
                    res.header("Access-Control-Allow-Origin", "*")
                    try {
                        
                        const  {category_id} = req.query;
                        const connection = await getConnection();
                    const result = await connection.query("SELECT p.* FROM `Product` as p JOIN `SubCategory` as s ON p.product_subcategory_id = s.subcategory_id WHERE p.delete = 0 and s.category_id = " + category_id);
                    res.json(result);
                    } catch (error) {
                        res.status(500).
                        res.send(error.message);
                        
                    }
                    
                    };

                    

                    const getAllMaterial= async(req,res)=>{
                   
                        res.header("Access-Control-Allow-Origin", "*")
                        try {
                            
                          
                            const connection = await getConnection();
                        const result = await connection.query("SELECT * FROM `Material`");
                        res.json(result);
                        } catch (error) {
                            res.status(500).
                            res.send(error.message);
                            
                        }
                        
                        };
        

                        const uploadImage= async(req,res)=>{
                   
                            res.header("Access-Control-Allow-Origin", "*")
                            try {
                                
                              
                                const connection = await getConnection();
                            const result = await connection.query("SELECT * FROM `Material`");
                            res.json(result);
                            } catch (error) {
                                res.status(500).
                                res.send(error.message);
                                
                            }
                            
                            };

                            const getBySubcategory = async (req, res) => {
                                try {
                                    const {subcategory_id} = req.query;
                                    const connection = await getConnection();
                                    const query = "SELECT * FROM Product WHERE product_subcategory_id = ?";
                                    const result = await connection.query(query, [subcategory_id]);
                                    res.json(result);
                                } catch (error) {
                                    res.status(500).send(error.message);
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
    getBySubcategory,
    getFromCategory,
    getFromGender,
    deleteProduct,
    getCategory,
    getproductById,
    getAllCategory,
    getSubCategory,
    getAllSubCategory,
    getProductos,
    getMaterialName,
    getAllMaterial,
    uploadImage,
    updateProduct,
  //  postImage
}