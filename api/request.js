import express from "express";
import GetResponse from "./stock.ctrl.js"

const router = express.Router();

// handling various api request from front-end
router.route("/").get(GetResponse.getStock);
router.route("/").post(GetResponse.updateStock);
router.route("/view").get(GetResponse.getSaved);
router.route("/view").post(GetResponse.addSaved);
router.route("/delete").post(GetResponse.deleteSaved);

export default router;
