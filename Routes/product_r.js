import express from 'express';

import {
    getproducts,
    addproduct,
    getproduct,
    updateproduct,
    deleteproduct,
   
} from '../controllers/product_con.js';

const router = express.Router();

router.get('/get', getproducts);
router.post('/add', addproduct);
router.get('/:id', getproduct);
router.patch('/:id', updateproduct);
router.delete('/:id', deleteproduct);

export default router;
