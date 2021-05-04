import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import Stock from "./model/stockListModel.js";
import Saved from "./model/savedListModel.js";

// variable configurations
dotenv.config();
const port = process.env.PORT || 5000;
const url = process.env.DATABASE_LINK;
const router = express.Router();
app.use("/", router);

// connecting to database and handling data access objects.
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    app.listen(port, () =>
      console.log("database connected server is running at port 5000")
    )
  )
  .catch((err) => {
    console.log(err);
  });

class getResponse {
  static async getStock(req, res, next) {
    const stockList = await Stock.find({}, (err, saved) => {
      if (err) {
        return err;
      } else return saved;
    });

    res.json(stockList);
  }
  static async updateStock(req, res, next) {
    try {
      console.log(req.body);
      const id = req.body.id;
      const updates = req.body.button;
      const options = { new: true };
      await Stock.updateOne({ id: id }, { button: updates }, options);
      res.json({success:true})
    } catch (error) {
      res.json(error.message);
    }
  }
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
      res.json({success:true})
    } catch (err) {
      res.json(err.message);
    }
  }
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
  static async deleteSaved(req, res, next) {
    try {
      console.log(req.body.id);
      const data = req.body.id;
      await Saved.deleteOne({ id: data });
      res.json({success:true})
    } catch (err) {
      res.json(err.message);
    }
  }
}

router.route("/").get(getResponse.getStock);
router.route("/").post(getResponse.updateStock);
router.route("/view").get(getResponse.getSaved);
router.route("/view").post(getResponse.addSaved);
router.route("/delete").post(getResponse.deleteSaved);

export default router;
