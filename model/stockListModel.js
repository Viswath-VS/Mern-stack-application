import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  id: Number,
  name: String,
  symbol: String,
  marketCaptial: String,
  stockPrice: String,
  button: Boolean,
});

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;
