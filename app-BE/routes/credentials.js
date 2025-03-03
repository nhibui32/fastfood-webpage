import express from "express";
const router = express.Router();
import supabase from "../config/database.js";
import { forgotPasswordController, loginController, signupController } from "../controllers/credentialsControllers.js";
router.get("/credentials", loginController);
router.post("/credentials",signupController);
router.update("/credentials", forgotPasswordController);
export default router;
