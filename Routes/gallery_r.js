import express from 'express';

import {
    getgallerys,
    addgallery,
    getgallery,
    updategallery,
    deletegallery,
   
} from '../controllers/gallery_con.js';

const router = express.Router();

router.get('/get', getgallerys);
router.post('/add', addgallery);
router.get('/:id', getgallery);
router.patch('/:id', updategallery);
router.delete('/:id', deletegallery);

export default router;
