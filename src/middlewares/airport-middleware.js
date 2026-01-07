const { StatusCodes } = require("http-status-codes");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateRequest(req, res, next) {
  if (!req.body.name) {
    (errorResponse.message = "Something went wrong while creating city"),
      (errorResponse.error = new AppError(
        ["Airport name not found in the incoming request in the correct form"],
        StatusCodes.BAD_REQUEST
      ));
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.code) {
    (errorResponse.message = "Something went wrong while creating city"),
      (errorResponse.error = new AppError(
        ["Code name not found in the incoming request in the correct form"],
        StatusCodes.BAD_REQUEST
      ));
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.cityId) {
    (errorResponse.message = "Something went wrong while creating city"),
      (errorResponse.error = new AppError(
        ["City id name not found in the incoming request in the correct form"],
        StatusCodes.BAD_REQUEST
      ));
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
}

module.exports = {
  validateRequest,
};
