import express from "express";
import mongoose from "mongoose";
import Company from "../models/company.js";

const router = express.Router();

export const getcompanys = async (req, res)  => {
    try{
        const company = await Company.find();
        res.status(200).json(company);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getcompany = async (req,res) => {
    const { id } = req.params;
    try{
        const company = await Company.findById(id);

        res.status(200).json(company);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addcompany = async (req,res) => {
    const {contactNo, email, address} = req.body;
    const newcompany = new Company ({contactNo, email, address})
    try{
        await newcompany.save();
        res.status(200).json(newcompany);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatecompany = async (req,res) => {
    const { id } = req.params;
    const {contactNo, email, address} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No company contact with id: ${id}`);

    const updatecompany = {contactNo, email, address, _id: id};
    await Company.findByIdAndUpdate(id, updatecompany, {new: true});
    res.json(updatecompany);

}

export const deletecompany = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No company with id:${id}`);
    
    await Company.findByIdAndRemove(id);

    res.json({message: "company deleted successfully."});
}

export default router;

