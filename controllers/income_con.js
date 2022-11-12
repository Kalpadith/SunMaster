import express from "express";
import mongoose from "mongoose";
import Income from "../models/income.js";

const router = express.Router();

export const getincomes = async (req, res)  => {
    try{
        const income = await Income.find();
        res.status(200).json(income);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getincome = async (req,res) => {
    const { id } = req.params;
    try{
        const income = await Income.findById(id);

        res.status(200).json(income);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addincome = async (req,res) => {
    const {month, income_amount, export_units,import_units,ceb_accNo} = req.body;
    const newincome = new Income ({month, income_amount, export_units,import_units,ceb_accNo})
    try{
        await newincome.save();
        res.status(200).json(newincome);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updateincome = async (req,res) => {
    const { id } = req.params;
    const {month, income_amount, export_units,import_units,ceb_accNo} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No income with id: ${id}`);

    const updateincome = {month, income_amount, export_units,import_units,ceb_accNo, _id: id};
    await Income.findByIdAndUpdate(id, updateincome, {new: true});
    res.json(updateincome);

}

export const deleteincome = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No income with id:${id}`);
    
    await Income.findByIdAndRemove(id);

    res.json({message: "Income deleted successfully."});
}

export default router;

