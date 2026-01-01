const express = require("express");
const { cityContoller } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");
const router = express.Router();

router.post("/", CityMiddlewares.validateRequest, cityContoller.createCity);
router.get("/", cityContoller.getCities)
router.delete("/:id", cityContoller.destroyCity)
router.patch("/:id", cityContoller.updateCity)

module.exports = router
