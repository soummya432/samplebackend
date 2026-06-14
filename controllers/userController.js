import mongoose from "mongoose"
import User from "../models/userModels.js"

export const signup=async(req,res)=>
{
    try{
    const {email,name,password}=req.body
    const existingUser=await User.findOne({email})
    if(existingUser)
    {
        res.status(400).json({success:false,message:'Already existing user',})
        return
    }
    if(!email)
    {
        res.status(204).json({success:false,message:'Enter email please',})
        return
    }
    if(!name)
    {
        res.status(204).json({success:false,message:'Enter name please',})
        return
    }
    if(!password)
    {
        res.status(204).json({success:false,message:'Enter password please',})
        return
    }
    const user=await User.create({name,email,password})
    console.log(req.body);
    console.log("Signup route hit");
    res.status(201).json({success:true,message:'Successfully created',data:user});
    }
    catch(error){
        console.log(error)
        res.status(500).json({success:false,message:'error',})
       
    }
}

export const login = async (req, res) => {
    try {
        const { name, password } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Enter name"
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Enter password"
            });
        }

        const user = await User.findOne({ name });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Incorrect password"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};