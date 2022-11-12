import express from 'express';

import {
    getusers,
    adduser,
    getuser,
    updateuser,
    deleteuser,
    login
   
} from '../controllers/user_con.js';

const router = express.Router();

router.get('/getuser', getusers);
router.post('/adduser', adduser);
router.get('/:id', getuser);
router.patch('/:id', updateuser);
router.delete('/:id', deleteuser);
router.post('/login', login);

export default router;
