const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Server running on port: ${ServerConfig.PORT}`);

  const {City, Airport} = require("./models")

  // const lagos = await City.create({name: "Lagos"})
  // console.log(lagos)

  // const airportInLagos = await lagos.createAirport({name: "Bariga Airport", code: "BRG", cityId: "17"})
  // const airportInLagos = await lagos.getAirports()
  // console.log(airportInLagos)
  // const city = await City.destroy({where: {id: 17}})
  // console.log(city)

  await City.destroy({ where: { id: 25 } });
});
