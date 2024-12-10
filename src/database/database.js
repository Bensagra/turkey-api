import mysql from "promise-mysql";
import config from "./../config.js";

let pool;

// Crear el pool de conexiones
const createPool = async () => {
  try {
    pool = await mysql.createPool({
      host: config.host,
      database: config.database,
      user: config.user,
      password: config.password,
      connectionLimit: 10, // Límite de conexiones simultáneas
    });
    console.log("Conexión al pool creada exitosamente.");
  } catch (error) {
    console.error("Error al crear el pool de conexiones:", error);
    throw error; // Detener la ejecución si no se puede crear el pool
  }
};

// Obtener una conexión activa del pool
export const getConnection = async () => {
  try {
    if (!pool) {
      await createPool(); // Crear el pool si no existe
    }
    return pool.getConnection();
  } catch (error) {
    console.error("Error al obtener una conexión:", error);
    throw error;
  }
};

// Inicializar el pool al cargar el módulo
createPool();
