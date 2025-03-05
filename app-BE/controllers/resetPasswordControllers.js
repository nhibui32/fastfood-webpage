import supabase from "../config/database.js";
import bcrypt from "bcrypt";

export const handleVerifyToken = async(req, res)=>{
    const token = req.body.token;
    const userId = req.body.userId;
    try{
        const {data:data_credentials, error:error_credentials} = await supabase
        .from("Credentials")
        .select("reset_token","reset_password_expired_time")
        .eq("users_id",userId);

        if(error_credentials){
            return res.status(500).json({error:error_credentials});
        }

        let currentDate = new Date();

        if(data_credentials.length === 0 || !data_credentials[0].reset_token || currentDate 
            >  data_credentials[0].reset_password_expired_token){
                return res.status(400).json({message: "Invalid URL!"});
        }
    }catch(error){
        return res.status(500).json({error:error});
    }

    return res.status(200).json({message:"Successfully Verified Token"});
}

export const handleUpdatePassword = async(req, res)=>{
    const userId = req.body.userId;
    const newPassword = req.body.newPassword;

    const salt = await bcrypt.genSalt(10);
    const hashedNewPassword = await bcrypt.hash(newPassword, salt);

    const {data:data_credentials, error:error_credentials} = await supabase
    .from("Credentialas")
    .update({
        hashed_password:hashedNewPassword
    })
    .eq("users_id", userId);

    if(error_credentials){
        return res.status(500).json({error:error_users});
    }

    return res.status(200).json({message:"Password Updated Successfully!"})

}

