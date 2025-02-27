//This is where we could write any type of credentials controllers
import supabase from "../config/database.js";
import bcrypt from "bcrypt";
import { createJWT } from "../middlewares/jwt.js";

export const loginController = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const { data: data_users_table, error: users_table_error } = await supabase
            .from("Users")
            .select("email, id, credentials_id")
            .eq("email", email);
    
        if (users_table_error) {
            return res.status(500).json({ error: users_table_error.message });
        }
    
        if (!data_users_table || data_users_table.length === 0) {
            return res.status(400).json({ error: "Wrong Password or Account Does Not Exist!" });
        }
    
        const user = data_users_table[0];
    
        const { data: data_credentials_table, error: credentials_table_error } = await supabase
            .from("Credentials")
            .select("hashed_password")
            .eq("users_id", user.id);
    
        if (credentials_table_error) {
            return res.status(500).json({ error: credentials_table_error.message });
        }
    
        if (!data_credentials_table || data_credentials_table.length === 0) {
            return res.status(400).json({ error: "Wrong Password or Account Does Not Exist!" });
        }
    
        const hashed_password = data_credentials_table[0].hashed_password;
        const isPasswordValid = await bcrypt.compare(password, hashed_password);
    
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Wrong Password or Account Does Not Exist!" });
        }
    
        // CREATE JWT Payload
        const jwtPayload = {
            email: user.email,
            id: user.id,
            expires_in: process.env.JWT_EXPIRES_IN
        };
    
        const token = createJWT(jwtPayload);
    
        return res.status(200).json({
            message: "Login Successfully",
            data: {
                id: user.id,
                accessToken: token
            }
        });
    
    } catch (error) {
        return res.status(500).json({ error: error.message });
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
        bcrypt.hash(password, salt, async (error, hash)=>{
            if(error){
                return res.status(500).json({error:error});
            }

            const{data:data_credentials_table, error:error_credentials_table} = await supabase.from("Credentials").insert([
            {"hashed_password": hash}
            ])
            .select("id");

            if(error_credentials_table){
                return res.status(500).json({error:error_credentials_table});
            }

            const{data:data_users_table, error:error_users_table} = await supabase.from("Users").insert([{
                "name":name, "email":email, "phone_number":phoneNumber,"credentials_id":data_credentials_table[0]?.id
            }])
            .select("id");

            if(error_users_table){
                return res.status(500).json({error:error_users_table});
            }

            await supabase.from("Credentials").update({
                "users_id":data_users_table[0]?.id
            }).eq("id",data_credentials_table[0]?.id)

        })

        return res.status(200).json({message:"Account Created Successfully!"})

    }catch(error){
        return res.status(500).json({error:error})
    }
}