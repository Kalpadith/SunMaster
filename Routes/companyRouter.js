import express from 'express';

import { getCompanies, getCompanyById, addCompany, updateCompany, deleteCompany } from '../controllers/companyController.js';

const router = express.Router();

router.get('/get', getCompanies);
router.get('/get/:id', getCompanyById);
router.post('/add', addCompany);
router.patch('/update/:id', updateCompany);
router.delete('/delete/:id', deleteCompany);

export default router;