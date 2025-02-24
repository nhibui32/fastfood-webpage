//This is where we could write any type of credentials controllers
import supabase from "../config/database.js";
import bcrypt from "bcrypt";
import { createJWT } from "../middlewares/jwt.js";

export const loginController = async (req, res)=>{
    const {email, password} = req.body;
    try{
        const {data, error} = await supabase.from("Users").select("email, hashed_password, id").eq("email", email);
        if (error){
            return res.status(500).json({error:error.message});
        };

        if (data.length === 0){
            return res.status(400).json({error: "Wrong Password or Account Does not Exists!"});
        };

        const hashed_password = data.hashed_password;
        if(!bcrypt(password, hashed_password)){
            return res.status(400).json({error: "Wrong Password or Account Does not Exists!"})
        };
        
        //CREATE JWT Payload
        const jwtPayload = {
            email: email,
            id:data.id,
            expires_in : process.env.JWT_EXPIRES_IN
        };

        const token = createJWT(jwtPayload);

        const responseData = {
            id: data.id,
            accessToken: token
        };
        
        res.status(200).json({message:"Login Successfully", data:responseData});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


export const signupController = async (req,res)=>{
    const {name, email, password, phoneNumber} = req.body;
    try{
        const {data, error} = await supabase.from("Users").select("email").eq("email",email);
        if(error){
            return res.status(500).json({error:error});
        }

        if(data.length !== 0){
            return res.status(400).json({error:"The account is already exists"});
        }

        const salt = 10;
        bcrypt.hash(password, salt, (error, hash)=>{
            
        })

    }catch(error){
        return res.status(500).json({error:error})
    }
}