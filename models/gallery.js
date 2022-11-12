import mongoose from 'mongoose';

const gallery_Schema = mongoose.Schema({
   
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

})

const gallery = mongoose.model('gallerys', gallery_Schema);

export default gallery;
