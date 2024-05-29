import {Router, request, response} from "express";
import { methods as materialControllers } from "../controllers/material.controller";


const router = Router();


router.get("/",materialControllers.getMaterial);

export default router;