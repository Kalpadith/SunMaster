import express from 'express';

import {
    getrequests,
    addrequest,
    getrequest,
    updaterequest,
    deleterequest,
   
} from '../controllers/request_con.js';

const router = express.Router();

router.get('/get', getrequests);
router.post('/add', addrequest);
router.get('/:id', getrequest);
router.patch('/:id', updaterequest);
router.delete('/:id', deleterequest);

export default router;
