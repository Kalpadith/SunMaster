import express from 'express';

import {
    getcompanys,
    addcompany,
    getcompany,
    updatecompany,
    deletecompany,
   
} from '../controllers/company_con.js';

const router = express.Router();

router.get('/get', getcompanys);
router.post('/add', addcompany);
router.get('/:id', getcompany);
router.patch('/:id', updatecompany);
router.delete('/:id', deletecompany);

export default router;
