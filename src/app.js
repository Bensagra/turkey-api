import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.routes.js"

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/turkey/",productRoutes);
export default app; 

