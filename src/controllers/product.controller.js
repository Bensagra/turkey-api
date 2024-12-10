import { getConnection } from "../database/database.js";

const getproduct = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `Product` WHERE Product.delete = 0");
    connection.release(); // Libera la conexión al pool
    return res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM `Category`");
    connection.release();
    return res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getFromCategory = async (req, res) => {
  try {
    const { product_subcategory_id } = req.query;
    const connection = await getConnection();
    const query = `
      SELECT * FROM Product 
      JOIN SubCategory ON Product.product_subcategory_id = SubCategory.subcategory_id 
      JOIN Category ON SubCategory.category_id = Category.category_id 
      WHERE Product.delete = 0 AND Product.product_subcategory_id = ?`;
    const result = await connection.query(query, [product_subcategory_id]);
    connection.release();
    return res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postProduct = async (req, res) => {
  try {
    const {
      product_name,
      product_title,
      product_description,
      product_material_id,
      product_photo_url,
      product_price,
      product_subcategory_id,
      product_gender_id,
    } = req.body; // Usar req.body en lugar de req.query para POST
    const product = {
      product_name,
      product_title,
      product_description,
      product_material_id,
      product_photo_url,
      product_price,
      product_subcategory_id,
      product_gender_id,
    };
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO Product SET ?", product);
    connection.release();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.query;
    const connection = await getConnection();
    const result = await connection.query("UPDATE Product SET `delete` = 1 WHERE product_id = ?", [product_id]);
    connection.release();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
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
      product_gender_id,
    } = req.body; // Usar req.body para datos de actualización

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

    let updateQuery = "UPDATE Product SET ";
    const queryParams = [];

    for (const [key, value] of Object.entries(fieldsToUpdate)) {
      updateQuery += `${key} = ?, `;
      queryParams.push(value);
    }

    updateQuery = updateQuery.slice(0, -2); // Eliminar la última coma
    updateQuery += " WHERE product_id = ?";
    queryParams.push(product_id);

    const connection = await getConnection();
    const result = await connection.query(updateQuery, queryParams);
    connection.release();
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Otros métodos adaptados seguirían la misma estructura:
// - Usar `req.body` para métodos POST/PUT si corresponde.
// - Usar parámetros en las consultas para evitar inyecciones SQL.
// - Liberar la conexión con `connection.release()` al finalizar cada operación.

export const methods = {
  getproduct,
  postProduct,
  getFromCategory,
  deleteProduct,
  updateProduct,
  // Agrega los demás métodos aquí
};
