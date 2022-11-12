import mongoose from 'mongoose';

const company_Schema = mongoose.Schema({
   
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

const company = mongoose.model('companys', company_Schema);

export default company;
