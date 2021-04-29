import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';



dotenv.config();
const mongoClient = mongodb.MongoClient;
const port = process.env.PORT || 5000;
const password = process.env.PASSWORD;
// connecting to database
mongoClient.connect(`mongodb+srv://Viswath:${password}@database.zybff.mongodb.net/stockappDB?retryWrites=true&w=majority`,
  {useNewUrlParser:true})
  .then(async (client) =>{ app.listen(port, ()=> console.log('database connected server is running at port 5000'))})
  .catch((err)=> {console.log(err);});
