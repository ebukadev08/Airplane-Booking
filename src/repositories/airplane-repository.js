const { Airplane } = require("../models");
const CrudRepository = require("./crud-repositories");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;
