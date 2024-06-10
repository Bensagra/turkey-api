import express from "express";
import morgan from "morgan";
import productRoutes from "./routes/product.routes"

const app = express();

//settings
app.set("port",4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/turkey/",productRoutes);
export default app; 