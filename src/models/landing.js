const mongoose = require("mongoose");

const landingSchema = new mongoose.Schema({
  name: { type: String, required: false },
  id: { type: Number, required: false },
  nametype: { type: String, required: false },
  recclass: { type: String, required: false },
  mass: { type: Number, required: false },
  fall: { type: String, required: false },
  year: { type: String, required: false },
  reclat: { type: Number, required: false },
  reclong: { type: Number, required: false },
  geolocation: {
    latitude: Number,
    longitude: Number,
  },
});
//Crear const para crear conexion
const Landing = mongoose.model("Landing", landingSchema);

module.exports = Landing;
