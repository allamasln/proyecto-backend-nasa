const Joi = require('joi')
const mongoose = require('mongoose')

const neasSchema = new mongoose.Schema({
    designation: {type: String, required:false} ,
    discovery_date: {type: String, required:false},
    h_mag:{type: Number, required:false} ,
    moid_au:{type: Number, required:false} ,
    q_au_1:{type: Number, required:false},
    q_au_2:{type: Number, required:false} ,
    period_yr:{type: Number, required:false},
    i_deg:{type: Number, required:false},
    pha:{type: String, required:true} ,
    orbit_class: {type:String, required:false}
});

  const Neas = mongoose.model('Neas', neasSchema)

  function validateNeas(neas) {
    const schema = Joi.object({
    designation: Joi.string(),
    discovery_date: Joi.string(),
    h_mag:Joi.number(),
    moid_au: Joi.number() ,
    q_au_1: Joi.number(),
    q_au_2: Joi.number(),
    period_yr:Joi.number(),
    i_deg:Joi.number(),
    pha:Joi.number().required(),
    orbit_class:Joi.number()
  })
  }

exports.validate = validateNeas
module.exports = Neas