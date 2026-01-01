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
  const imo = await City.findByPk(19, {include: {model: Airport}})
  console.log(imo)
  // const imoPort = await imo.setAir({code: 'IM'})
  // console.log(imoPort)

  // const imoPort = await imo.getAirports()
  // console.log(imoPort)

  const imoport = await Airport.findByPk(18)
  console.log(imoport)
  await imo.removeAirports(imoport)
});
