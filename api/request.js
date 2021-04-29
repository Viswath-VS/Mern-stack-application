import express from "express";
import StockCtrl from "./stock.ctrl.js"
import StockCtrl from "./stock.viewctrl.js"
const router = express.Router();

// api routes handling for home page
router.route("/").get(StockCtrl.apiGetStock);
router.route("/").post(StockCtrl.apiGetStock);

//  api routes handling for View page
router.route("/view").get(StockViewCtrl.apiGetSavedStock);
router.route("/view").delete(StockViewCtrl.apiDeleteSavedStock);

export default router;
