const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");
const router = express.Router();
console.log("Inside airport routes");

router.post(
  "/",
  AirportMiddleware.validateRequest,
  AirportController.createAirport
);
router.get("/", AirportController.getAirports);
router.get("/:id", AirportController.getAirport);
router.delete("/:id", AirportController.destroyAirport);
router.patch("/:id", AirportController.updateAirport);
module.exports = router;
