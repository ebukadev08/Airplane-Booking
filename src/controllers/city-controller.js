const { StatusCodes } = require("http-status-codes");

const { CityService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function createCity(req, res) {
  try {
    console.log("Inside controller");
    const city = await CityService.createCity({
      name: req.body.name,
    });
    successResponse.data = city;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function getCities(req, res) {
  try {
    const city = await CityService.getCities();
    successResponse.data = city;
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function destroyCity(req, res) {
  try {
    const city = await CityService.destroyCity(req.params.id);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params.id, req.body);
    successResponse.data = city
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createCity,
  getCities,
  destroyCity,
  updateCity
};
