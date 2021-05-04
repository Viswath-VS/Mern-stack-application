import mongoose from "mongoose";

// model Schema for the Saved collection docs.
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
