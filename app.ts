import express from 'express';
import {verifyPan,verifyAdhar} from './src/index'

const app=express();

app.use(express.json());

app.post('/verifypan',verifyPan);
app.post('/verfyadhar',verifyAdhar)

app.listen(3000,()=>{
        console.log(`System is Running on ${3000}`);
})

