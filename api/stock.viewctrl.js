import StocksViewDAO from '../DAO/stocksviewDAO.js';

export default class StockViewCtrl {

// request handler to get stock list from collection
  static async apiGetSavedStock(req,res,next){
  try { let filter = {}
    if (req.query.name) {
      filter.name = req.query.name;
    } else if (req.query.symbol) {
      filter.symbol = req.query.symbol;
    }

    const {stockList} = await StocksViewDAO.getSavedStocks({filter});

    let response = {  name: stockList };
    res.json(response)
  } catch(e){
    res.json({error: e.messages})
  }

  }

// request handler to delete a stock from collection list
  static async apiDeleteSavedStock (req,res,next){
    try{
      const stockId = req.body._id;
      console.log(stockId);
      const deleteResponse = await StocksViewDAO.deleteStock(stockId);
      res.json({status:"success"})
    }catch(e){
      res.json({error: e.message})
    }
  }
}
