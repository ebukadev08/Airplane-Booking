const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes")

const router = express.Router();

router.use("/airplane", airplaneRoutes);
console.log("Inside api routes");

router.use("/airports", airportRoutes)

router.get("/info", infoController.info);
router.use("/cities", cityRoutes);

module.exports = router;
