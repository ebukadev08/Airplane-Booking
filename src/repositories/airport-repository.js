const { Airport } = require("../models");
const CrudRepository = require("./crud-repositories");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRepository;
