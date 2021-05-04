import mongoose from "mongoose";

const savedListSchema = new mongoose.Schema({
  id: Number,
  name: String,
  symbol: String,
  marketCaptial: String,
  stockPrice: String,
  button: Boolean,
});

const Saved = mongoose.model("Saved", savedListSchema);

export default Saved;
