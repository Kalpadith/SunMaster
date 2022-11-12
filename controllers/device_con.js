import express from "express";
import mongoose from "mongoose";
import device from "../models/devices.js";

const router = express.Router();

export const getdevices = async (req, res)  => {
    try{
        const device = await device.find();
        res.status(200).json(device);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const getdevice = async (req,res) => {
    const { id } = req.params;
    try{
        const device = await device.findById(id);

        res.status(200).json(device);
    }catch(error){
        res.status(404).json({message: error.message});
        
    }
}

export const adddevice = async (req,res) => {
    const {type, serial, ip} = req.body;
    const newdevice = new device ({type, serial, ip})
    try{
        await newdevice.save();
        res.status(200).json(newdevice);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const updatedevice = async (req,res) => {
    const { id } = req.params;
    const {type, serial, ip} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Device with id: ${id}`);

    const updatedevice = {type, serial, ip, _id: id};
    await device.findByIdAndUpdate(id, updatedevice, {new: true});
    res.json(updatedevice);

}

export const deletedevice = async (req, res) =>{
    const {id} =req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Device with id:${id}`);
    
    await device.findByIdAndRemove(id);

    res.json({message: "Device removed successfully."});
}

export default router;

