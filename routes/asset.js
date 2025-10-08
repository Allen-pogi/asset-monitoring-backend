const express = require("express");
const router = express.Router();
const assetController = require("../controllers/assetcontroller");

router.post("/asset/register", assetController.createAsset);
router.get("/asset/get/all", assetController.getAssets);
router.get("/asset/get/:id", assetController.getAssetById);
router.put("/asset/update/:id", assetController.updateAsset);
router.delete("/asset/delete/:id", assetController.deleteAsset);
module.exports = router;
