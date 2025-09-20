const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    console.log("Inside service");
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log(error.name);
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(
        explanation,
        "Cannot create a new Airplane object",
        StatusCodes.BAD_REQUEST
      );
    }
    throw new AppError(
      "Cannot create a new Airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplane = await airplaneRepository.getAll();
    return airplane;
  } catch (error) {
    console.log(error);

    throw new AppError(
      "Cannot fetch all Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
