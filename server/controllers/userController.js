import User from "../models/userModel.js"
import path from "path";
import fs from "fs";


// Get User Data
export const getUserData = async (req,res) => {
    try {
            const {userId} = await req.auth()
            const user = await User.findById(userId)
            if(!user){
                return res.json({success: false, message: "User not found"})
            }
            return res.json({success: true, user})
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message})
    }
}