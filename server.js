import express from 'express';
import cors from "cors";
import request from "./api/request.js";

const app = express();

app.use(cors());
app.use(express.json());

// get request from front end
app.use('/api/stock',request);
app.use("*",(req,res)=>{res.redirect('/api/stock')});


export default app;
