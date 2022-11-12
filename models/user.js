import mongoose from 'mongoose';

const user_Schema = mongoose.Schema({
   
    user_Fname: {
        type: String,
        required: true
    },
    user_Lname: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
    user_address: {
        type: String,
        required: true
    },
    user_Email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_NIC: {
        type: String,
        required: true,
        unique: true
    },
    user_phoneNo: {
        type: String,
        required: true,
        unique: true
    },
    ceb_acc: {
        type: String,
        required: true,
        unique: true
    }


})

const user = mongoose.model('users', user_Schema);

export default user;
