import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import StocksDAO from './DAO/stocksDAO.js';
import StocksViewDAO from './DAO/stocksviewDAO.js';


// variable configurations
dotenv.config();
const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || 5000;
const url =  process.env.DATABASE_LINK;

// connecting to database and handling data access objects.
MongoClient.connect("mongodb+srv://Viswath:mernstack@database.zybff.mongodb.net/stockDB?retryWrites=true&w=majority",
  {useNewUrlParser:true,useUnifiedTopology:true})
  .then(async (client) =>{
    await StocksDAO.injectDB(client)
    await StocksViewDAO.injectDB(client)
    app.listen(port, ()=>
    console.log('database connected server is running at port 5000'))
  })
  .catch((err)=> {console.log(err);});
