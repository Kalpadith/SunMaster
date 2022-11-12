import mongoose from 'mongoose';

const device_Schema = mongoose.Schema({
   
    type: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    }

})

const device = mongoose.model('devices', device_Schema);

export default device;
