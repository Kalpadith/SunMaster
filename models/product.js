import mongoose from 'mongoose';

const product_Schema = mongoose.Schema({
   
    pimage: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    pdescription: {
        type: String,
        required: true
    }

})

const product = mongoose.model('products', product_Schema);

export default product;
