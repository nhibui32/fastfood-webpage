import express from "express";
const router = express.Router();
import supabase from "../config/database.js";
import { loginController } from "../controllers/controllers.js";
router.get("/login", loginController);

export default router;
