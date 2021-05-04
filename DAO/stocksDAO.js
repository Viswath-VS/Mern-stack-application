// import mongodb from "mongodb";
// const ObjectId = mongodb.ObjectID;
// import StockList from "../model/stockListModel.js";
// import SavedList from "../model/savedListModel.js";
// const url =  process.env.DATABASE_NS;
// let stock;
// let saved;

// // recivieng and initalizing data from database
// export default class StocksDAO {
//   static async injectDB(conn) {
//     if (stock) {
//       return
//     }
//     try {
//       stock = await StockList.find();
//       console.log(`database is connected ${stock}`);
//     } catch (e) {
//       console.error(`unable to connect to database ${e}`);
//     }
//   }

// // initalizing savedList database
// static async injectDB(conn) {
//   if (saved) {
//     return
//   }
//   try {
//     saved = await SavedList.find();
//   } catch (e) {
//     console.error(`Unable to connect to database: ${e}`)
//   }
// }

// // async function to search list by name and symbol
// static async getStocks ({
//   filter=null
// }) {
//   let query={};
//   if(filter){
//     if ("name" in filter){
//       query = {"name":{$eq: filter["name"]}}
//     }else if ("symbol"in filter) {
//       query = {"symbol":{$eq: filter["symbol"]}}
//     }
//   }

//   const match ={};
//   try{
//     match = await StockList.find(query);
//   }catch(err){
//     console.error(err);
//     return {stockList:[]};
//   }
//   try{
//     const stockList = await match.toArray();
//     return{ stockList }
//   }catch(err){
//     console.error(`unablbe to convert to array ${err}`);
//     return{stockList:[]}
//   }
// }

// // static funtion to add a document saved view collection.
//   static async saveStock(stockId,name,symbol,capital,price,exchange) {
//     try {
//       const stockDoc = { _id: ObjectId(stockId),
//           name: name,
//           symbol: symbol,
//           marketCapital: capital,
//           stockPrice: price,
//           exchange:exchange
//         }

//       return await saved.insertOne(stockDoc)
//     } catch (e) {
//       console.error(`Unable to add document: ${e}`)
//       return { error: e }
//     }
//   }


// }
