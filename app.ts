import express from 'express';
import {verifypan,verifyadhar} from './src/index'

const app=express();

app.use(express.json());

app.post('/verifypan',verifypan);
app.post('/verfyadhar',verifyadhar)

app.listen(3000,()=>{
        console.log(`System is Running on ${3000}`);
})

