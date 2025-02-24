import jwt from "jsonwebtoken";

export const createJWT = (payload)=>{
    let key = process.env.JWT_SECRET;
    let token = null;
    try{
        token = jwt.sign(payload, key);
    }catch(error){
        throw new Error(error);
    }

    return token;
};

export const verifyToken = (token)=>{
    let key = process.env.JWT_SECRET;
    let data = null;
    try{
        let decoded = jwt.verify(token, key);
        data = decoded;
    }catch(error){
        throw new Error(error);
    }

    return data
}