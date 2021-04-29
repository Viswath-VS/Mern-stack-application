import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID
const url =  process.env.DATABASE_LINK;
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
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

// static funtion to add a document to DB.
  static async saveStock(stockId,name,symbol,capital,price,exchange) {
    try {
      const reviewDoc = { name: name,
          symbol: symbol,
          marketCapital: date,
          stockPrice: review,
          stock_id: ObjectId(stockId),
          exchange:exchange
        }

      return await saved.insertOne(reviewDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
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
