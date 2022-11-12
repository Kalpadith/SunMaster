import express from "express";
import mongoose from "mongoose";
import Gallery from "../models/gallery.js";

const router = express.Router();

export const getgallerys = async (req, res)  => {
    try{
        const gallery = await Gallery.find();
        res.status(200).json(gallery);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getgallery = async (req,res) => {
    const { id } = req.params;
    try{
        const gallery = await Gallery.findById(id);

        res.status(200).json(gallery);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const addgallery = async (req,res) => {
    const {image, description} = req.body;
    const newgallery = new Gallery ({image, description})
    try{
        await newgallery.save();
        res.status(200).json(newgallery);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updategallery = async (req,res) => {
    const { id } = req.params;
    const {image, description} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Gallery with id: ${id}`);

    const updategallery = {image, description, _id: id};
    await Gallery.findByIdAndUpdate(id, updategallery, {new: true});
    res.json(updategallery);

}

export const deletegallery = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Gallery with id:${id}`);
    
    await Gallery.findByIdAndRemove(id);

    res.json({message: "Gallery deleted successfully."});
}

export default router;

