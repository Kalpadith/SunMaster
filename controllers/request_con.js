import express from "express";
import mongoose from "mongoose";
import Request from "../models/request.js";

const router = express.Router();

export const getrequests = async (req, res)  => {
    try{
        const request = await Request.find();
        res.status(200).json(request);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getrequest = async (req,res) => {
    const { id } = req.params;
    try{
        const request = await Request.findById(id);

        res.status(200).json(request);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addrequest = async (req,res) => {
    const {r_user_Fname, r_user_Lname, r_user_address,r_user_Email,r_user_NIC,r_package,r_company} = req.body;
    const newrequest = new Request ({r_user_Fname, r_user_Lname, r_user_address,r_user_Email,r_user_NIC,r_package,r_company})
    try{
        await newrequest.save();
        res.status(200).json(newrequest);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updaterequest = async (req,res) => {
    const { id } = req.params;
    const {r_user_Fname, r_user_Lname, r_user_address,r_user_Email,r_user_NIC,r_package,r_company} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No request with id: ${id}`);

    const updaterequest = {r_user_Fname, r_user_Lname, r_user_address,r_user_Email,r_user_NIC,r_package,r_company, _id: id};
    await Request.findByIdAndUpdate(id, updaterequest, {new: true});
    res.json(updaterequest);

}

export const deleterequest = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No request with id:${id}`);
    
    await Request.findByIdAndRemove(id);

    res.json({message: "Request deleted successfully."});
}

export default router;

