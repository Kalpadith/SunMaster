import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.js";

const router = express.Router();

export const getproducts = async (req, res)  => {
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getproduct = async (req,res) => {
    const { id } = req.params;
    try{
        const product = await Product.findById(id);

        res.status(200).json(product);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addproduct = async (req,res) => {
    const {pimage, pname, pdescription} = req.body;
    const newproduct = new Product ({pimage, pname, pdescription})
    try{
        await newproduct.save();
        res.status(200).json(newproduct);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updateproduct = async (req,res) => {
    const { id } = req.params;
    const {pimage, pname, pdescription} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with id: ${id}`);

    const updateproduct = {pimage, pname, pdescription, _id: id};
    await Product.findByIdAndUpdate(id, updateproduct, {new: true});
    res.json(updateproduct);

}

export const deleteproduct = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Product with id:${id}`);
    
    await Product.findByIdAndRemove(id);

    res.json({message: "Product deleted successfully."});
}

export default router;

