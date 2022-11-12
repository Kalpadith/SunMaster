import mongoose from 'mongoose';

const request_Schema = mongoose.Schema({
   
    r_user_Fname: {
        type: String,
        required: true
    },
    r_user_Lname: {
        type: String,
        required: true
    },
    r_user_address: {
        type: String,
        required: true
    },
    r_user_Email: {
        type: String,
        required: true,
        unique: true
    },
    r_user_NIC: {
        type: String,
        required: true,
        unique: true
    },
    r_package: {
        type: String,
        required: true
    },
    r_company: {
        type: String,
        required: true
    }

})

const request = mongoose.model('requests', request_Schema);

export default request;
