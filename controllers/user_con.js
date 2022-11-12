import express from 'express';
import mongoose from 'mongoose';
import user from '../models/user.js';

import Users from '../models/user.js';


const router = express.Router();

export const login = async (req, res) => {
    try {

        const {email, password} = req.body;
        const user = await Users.findOne({user_email: email});

        if (user == null) throw new Error('invalid email');

        if (user.user_password === password) {
            user.user_password = '';
            res.status(200).json(user);
            return;
        }
        res.status(401).json({message: 'password is incorrect'});

    } catch (error) {
        console.log('ERROR OCCURRED WHILE LOGGING')
        console.error(error);
        res.status(404).json({message: error.message});
    }
}

export const getusers = async (req, res) => {
    try {
        const user = await user.find();

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getuser = async (req, res) => {
    const {id} = req.params;

    try {
        const user = await user.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const adduser = async (req, res) => {
    const {user_Fname, user_Lname, user_type,user_address,user_Email,user_password,user_NIC,user_phoneNo,ceb_accNo} = req.body;

    const newusers = new user(req.body)

    try {
        await newusers.save();

        res.status(201).json(newusers);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}


export const updateuser = async (req, res) => {
    const {id} = req.params;
    const {user_Fname, user_Lname, user_type,user_address,user_Email,user_password,user_NIC,user_phoneNo,ceb_accNo} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateduser = {user_Fname, user_Lname, user_type,user_address,user_Email,user_password,user_NIC,user_phoneNo,ceb_accNo, _id: id};

    await user.findByIdAndUpdate(id, updateuser, {new: true});

    res.json(updateduser);
}

export const deleteuser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Users.findByIdAndRemove(id);

    res.json({message: "User Removed successfully."});
}

export default router;