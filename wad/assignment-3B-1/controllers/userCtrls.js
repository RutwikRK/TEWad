import user from "../models/userModel.js";

export const createUser=async (req,res,next)=>{
    const newUser=new user(req.body)
    try {
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err);
    }
}

export const updateuser=async (req,res,next)=>{
    try {
        const updateduser=await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateduser);
    } catch (err) {
        next(err);
    }
}
export const deleteuser=async (req,res,next)=>{
    try {
        await user.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
    } catch (err) {
        next(err);
    }
}
export const getuser=async (req,res,next)=>{
    try {
        const User=await user.findById(req.params.id);
        res.status(200).json(User);
    } catch (err) {
        next(err);
    }
}
export const getalluser=async (req,res,next)=>{
    try {
        const users=await user.find();
        res.status(200).json(users);
    } catch (err) {
        // res.status(500).json(err);
        next(err);
    }
}