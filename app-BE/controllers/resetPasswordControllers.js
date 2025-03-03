import supabase from "../config/database.js";
import bcrypt from "bcrypt";

export const handleVerifyToken = async(req, res)=>{
    const token = req.body.token;
    const userId = req.body.userId;
}

export const handleUpdatePassword = async(req, res)=>{

}