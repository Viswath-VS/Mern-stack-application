import mongodb from "mongodb";
const url =  process.env.DATABASE_LINK;
let stock;


// recivieng and initalizing data from database
export default class StocksDAO {
  static async injectDB(conn) {
    if (stock) {
      return
    }
    try {
      stock = await conn.db(url).collection("stockList");
    } catch (e) {
      console.error(`unable to connect to database ${e}`);
    }
  }
}

// async function to search list by name and symbol
static async getStocks ({
  filter = null
}={}) {
  let query;
  if(filter){
    if ("name" in filter){
      query = {"name":{$eq: filter["name"]}}
    }else if ("symbol"in filter) {
      query = {"symbol":{$eq: filter["symbol"]}}
    }
  }

  let match;
  try{
    match = await stock.find(query)
  }catch(err){
    console.error(err);
    return {stockList:[]};
  }
  try{
    const stockList = await match.toArray();
    return{ stockList }
  }catch(err){
    console.error(err);
    return{stockList:[]}
  }

}
