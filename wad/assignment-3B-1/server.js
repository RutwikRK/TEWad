import express from "express"
import mongoose from "mongoose"
import usersRout from "./routes/userRoutes.js";
// const express=require("express")
const app=express()


const connect =async()=>{
    
    try{
        await mongoose.connect("mongodb+srv://Rutwikrk:Rutu@cluster0.vgsvnpx.mongodb.net/booking?retryWrites=true&w=majority");
        console.log("connected to mongodb");
    } catch(error){
        throw error
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log('mongoDB disconnected!');
})
mongoose.connection.on("connected",()=>{
    console.log('mongoDB connected!');
})

// app.get("/",(req,res)=>{
//     res.send("HEllo first request   1")
// })

//middleware

app.use(express.json())

app.use("/api/users",usersRout);


app.use((err,req,res,next)=>{
    const errStatus=err.status||500
    const errMessage=err.message||"Something went wrong!"
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack,
    });
})

app.listen(8800,()=>{
    connect()
    console.log("Connected to backend!!!! ");
});