import express from "express";
import morgan from "morgan";
import materialRoutes from "./routes/material"

const app = express();

//settings
app.set("port",4000);

//middlewares
app.use(morgan("dev"));

//Routes
app.use("/api/turkey",materialRoutes);
export default app; 