import express from 'express';
import cors from "cors";
import request from "./api/request.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/stock',request);
// require('dotenv').config();

// initalize & configuration
const apiKey = process.env.THIRD_PARTY_API_KEY;

export default app;

// const alpha = require('alphavantage')({key:apiKey});

// const stockList = new Stocklist ({
//   name:"Apple",
//   symbol: "APPl",
//   stockPrice: 114.7,
//   marketCapital: 150000
// });
//
// stockList.save();

// app.get('/home',(req,res)=>{
//   alpha.data.quote('ibm').then(data => {
//     const polished = alpha.util.polish(data);
//     const price = polished.data.price;
//     const symbol = polished.data.symbol;
//     const market = polished.data.volume;
//     res.send(polished)});
// });
