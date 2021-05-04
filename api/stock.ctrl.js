// import StocksDAO from '../DAO/stocksDAO.js';

export default class StockCtrl {

  // handle request to get stockList data from collection
  static async apiGetStock(req, res, next) {

    let filter = {}
    if (req.query.name) {
      filter.name = req.query.name;
    } else if (req.query.symbol) {
      filter.symbol = req.query.symbol;
    }

    const { stockList } = await StocksDAO.getStocks({filter});

    let response = {  name: stockList };
    res.json(response);
  }

// handle request to add new list to saved collection
static async apiAddSaveStock(req,res,next){

  try{
    const stockId = req.body._id;
    const name = req.body.name;
    const symbol = req.body.symbol;
    const capital = req.body.marketCapital;
    const price = req.body.stockPrice;
    const exchange = req.body.exchange;
  }catch(e){
    res.json({error:e.message})
  }
const savedStocks = await StocksDAO.saveStock(stockId,name,symbol,capital,price,exchange);
res.json({status:"success"});

}

}
