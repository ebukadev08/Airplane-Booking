const express = require("express");
const { airplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");
const router = express.Router();
console.log("Inside airplane routes");

router.post(
  "/",
  AirplaneMiddlewares.validateRequest,
  airplaneController.createAirplane
);
router.get("/", airplaneController.getAirplanes);
router.get("/:id", airplaneController.getAirplane);
router.delete("/:id", airplaneController.destroyAirplane);
router.patch("/:id", airplaneController.updateAirplane);
module.exports = router;
