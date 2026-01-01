const { City } = require("../models");
const CrudRepository = require("./crud-repositories");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}

module.exports = CityRepository;
