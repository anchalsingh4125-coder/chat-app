import jwt from "jsonwebtoken"

export const generateToken=(userId,res)=>{

    const token=jwt.sign({userId}, process.env.JwT_SECRET{
        expiresIn:"7d"
    })
}