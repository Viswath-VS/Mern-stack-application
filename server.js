import express from 'express';
import cors from "cors";
import request from "./index.js";

const app = express();

app.use(cors());
app.use(express.json());

// get request from front end
// app.use('/',request);
// app.use("*",(req,res)=>{res.redirect('/api/stock')});


export default app;
