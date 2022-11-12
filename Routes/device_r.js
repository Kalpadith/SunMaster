import express from 'express';

import {
    getdevices,
    getdevice,
    adddevice,
    updatedevice,
    deletedevice,
   
} from '../controllers/device_con.js';

const router = express.Router();

router.get('/get', getdevices);
router.post('/add', adddevice);
router.get('/:id', getdevice);
router.patch('/:id', updatedevice);
router.delete('/:id', deletedevice);

export default router;
