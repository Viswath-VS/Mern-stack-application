import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
const url =  process.env.DATABASE_NS;
let saved;

// receiving data and initalizing it.
export default class StocksViewDAO {
  static async injectDB(conn) {
    if (saved) {
      return
    }
    try {
      saved = await conn.db(url).collection("savedList")
    } catch (e) {
      console.error(`Unable to connect to database: ${e}`)
    }
  }

  // async function to search list by name and symbol
  static async apiGetSavedStocks ({
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
      match = await saved.find(query)
    }catch(err){
      console.error(err);
      return {stockList:[]};
    }
    try{
      const stockList = await match.toArray();
      return { stockList }
    }catch(err){
      console.error(err);
      return{stockList:[]}
    }
  }


// deleting a data as per Stock ID from DB.
  static async deleteStock(stockId) {

    try {
      const deleteResponse = await reviews.deleteOne({
        _id: ObjectId(stockId)

      })

      return deleteResponse
    } catch (e) {
      console.error(`Unable to delete review: ${e}`)
      return { error: e }
    }
  }

}
