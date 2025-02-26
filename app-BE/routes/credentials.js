import express from "express";
const router = express.Router();
import supabase from "../config/database.js";
import { loginController, signupController } from "../controllers/controllers.js";
router.get("/credentials", loginController);
router.post("/credentials",signupController);
export default router;
