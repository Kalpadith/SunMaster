import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import Income from './Routes/income_r.js';
import Requset from './Routes/request_r.js';
import User from './Routes/user_r.js';
import companyRouter from './Routes/companyRouter.js';
import device from "./Routes/device_r.js";


import http from 'http';
import { Server } from "socket.io";

const app = express()
    , httpServer = http.createServer(app)
    , io = new Server(httpServer,{
        cors:{
            origin: "*",
            methods: "*"
        }
});


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/users', User);
app.use('/requests', Requset);
app.use('/incomes', Income);
app.use('/company',companyRouter);
app.use('/device',device)

const URL = 'mongodb+srv://IshanKalpadith:OjbuhMScKQQHqY2K@sunmaster.5lgr4f5.mongodb.net/SunMaster?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(URL).then(() => {
    console.log(`Server is running on port`);
    httpServer.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
}).catch((error) => {
    console.error(error)
})





