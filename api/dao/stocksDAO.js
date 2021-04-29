let stock;
// recivieng data from database   
export default class StocksDAO{
 static async injectDB(conn){
   if(stock){
     return
   }
   try{
     stock = await conn.db().collection("stockList");
   } catch (e){
     console.error(`unable to connect ${e}`);
   }
 }
}
