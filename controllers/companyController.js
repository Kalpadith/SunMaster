import express from 'express';
import mongoose from 'mongoose';
import Company from '../models/Company.js';


const router = express.Router();

export const getCompanies = async (req, res) => { 
    try {
        const Companys = await Company.find();     
        res.status(200).json(Companys)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export const getCompanyById = async (req, res) => { 
    const id = req.params;

    try {
        const Companys = await Company.find(id);
        
        res.status(200).json(Companys);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const addCompany = async (req, res) => {
    const { companyName, companyRegNo, companyLocation, companyPhone,companyEmail,companyStandard,solarCapacity1,solarCapacity2,solarCapacity3,investmentRange } = req.body;

    const newCompany = new Company({ companyName, companyRegNo, companyLocation, companyPhone,companyEmail,companyStandard,solarCapacity1,solarCapacity2,solarCapacity3,investmentRange })

    try {
        await newCompany.save();

        res.status(200).json(newCompany);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateCompany = async (req, res) => {
    const { id } = req.params;
    const { companyName, companyRegNo, companyLocation, companyPhone,companyEmail,companyStandard,solarCapacity1,solarCapacity2,solarCapacity3,investmentRange } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with id: ${id}`);

    const updateCompany = {companyName, companyRegNo, companyLocation, companyPhone,companyEmail,companyStandard,solarCapacity1,solarCapacity2,solarCapacity3,investmentRange, _id: id };

    await Company.findByIdAndUpdate(id, updateCompany, { new: true });

    res.json(updateCompany);
}

export const deleteCompany = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Company with id: ${id}`);

    await Company.findByIdAndRemove(id);

    res.json({ message: "Company deleted successfully." });
}



export default router;