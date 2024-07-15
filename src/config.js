import {config} from "dotenv";


config();

export default{
    host: process.env.HOST || "",
    database:process.env.DATABASE || "",
    user: process.env.USER || "",
    password:process.env.PASSWORD || "",
    CLOUD_NAME:process.env.CLOUD_NAME || "",
    CLOUDINARY_KEY:process.env.CLOUDINARY_KEY || "",
    CLOUDINARY_SECRET:process.env.CLOUDINARY_SECRET || "",
}