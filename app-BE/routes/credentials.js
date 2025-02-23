import express from "express";
const router = express.Router();
import { supabase } from "../server.js";


router.get('/users', async ()=>{
    const {data, error} = await supabase.from("Users").select("*");
    console.log("hello")
    if (error) return res.status(500).json({error:error.message});
    res.json(data);
})

export default router;