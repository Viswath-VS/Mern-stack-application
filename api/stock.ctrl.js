import Stock from "../model/stockListModel.js";
import Saved from "../model/savedListModel.js";

// database accessing function for various fetch requests.
export default class GetResponse {
  // returns stock details
  static async getStock(req, res, next) {
    const stockList = await Stock.find({}, (err, saved) => {
      if (err) {
        return err;
      } else return saved;
    });
    res.json(stockList);
  }

  // updates the stock collection.
  static async updateStock(req, res, next) {
    try {
      console.log(req.body);
      const id = req.body.id;
      const updates = req.body.button;
      const options = { new: true };
      await Stock.updateOne({ id: id }, { button: updates }, options);
      res.json({ success: true });
    } catch (error) {
      res.json(error.message);
    }
  }

  // adds new document to the Saved collection
  static async addSaved(req, res, next) {
    try {
      const data = req.body;
      await Saved.create({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        marketCaptial: data.marketCaptial,
        stockPrice: data.stockPrice,
        button: data.button,
      });
      res.json({ success: true });
    } catch (err) {
      res.json(err.message);
    }
  }

  // returns saved Collections doc.
  static async getSaved(req, res, next) {
    try {
      const saveList = await Saved.find({}, (err, saved) => {
        if (err) {
          return err;
        } else return saved;
      });
      res.json(saveList);
    } catch (err) {
      res.json(err.message);
    }
  }

  // deletes saved collection by ID.
  static async deleteSaved(req, res, next) {
    try {
      console.log(req.body.id);
      const data = req.body.id;
      await Saved.deleteOne({ id: data });
      res.json({ success: true });
    } catch (err) {
      res.json(err.message);
    }
  }
}
