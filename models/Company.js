import mongoose from 'mongoose';
const companySchema =mongoose.Schema({
    companyName: {
        type: String,
        maxlength:100,
        required: true
    },
    companyRegNo: {
        type: String,
        maxlength:8,
        unique:true,
        required: true   
    },
    companyLocation: {
        type: String,
        required: true  
    },
    companyPhone: {
        type: String,
        maxlength:10,
        required: true   
    },
    companyEmail: {
        type: String,
        required: true   
    },
    companyStandard: {
        type: String,
        required: true   
    },
    solarCapacity1: {
        type: String,
        required: true   
    },
    solarCapacity2: {
        type: String,
        required: true   
    },
    solarCapacity3: {
        type: String,
        required: true   
    },
    investmentRange: {
        type: Number,
        required: true   
    }
})
var Company = mongoose.model('company', companySchema);

export default Company;
