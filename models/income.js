import mongoose from 'mongoose';

const income_Schema = mongoose.Schema({
   
    month: {
        type: String,
        required: true
    },
    income_amount: {
        type: String
    },
    export_units: {
        type: String   
    },
    import_units: {
        type: String,
        required: true
    },
    ceb_accNo: {
        type: String,
        required: true
    }

})

const income = mongoose.model('incomes', income_Schema);

export default income;
