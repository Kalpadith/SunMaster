import express from 'express';

import {
    getincomes,
    addincome,
    getincome,
    updateincome,
    deleteincome,
   
} from '../controllers/income_con.js';

const router = express.Router();

router.get('/get', getincomes);
router.post('/add', addincome);
router.get('/:id', getincome);
router.patch('/:id', updateincome);
router.delete('/:id', deleteincome);

export default router;
