import express from "express";
import { createUser, deleteuser, getalluser, getuser, updateuser } from "../controllers/userCtrls.js";


const router=express.Router();

router.post("/",createUser);

//UPDATE
router.put("/:id",updateuser);
//DELETE
router.delete("/:id",deleteuser);
//GET
router.get("/:id",getuser);
//GETALL
router.get("/",getalluser);

 
export default router