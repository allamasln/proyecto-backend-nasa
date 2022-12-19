const Joi= require('joi')
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
 name : {type: String, required:true},
 nickname: {type: String, required:false},
 email: {type: String, required:false},
 picture:{type: String, required:false},
 affiliatedNumber: {type: String, required:true, Unique:true },
 affiliationDate: {type: Date, required:false},
 occupation: {type: String, required:false},
 birthdate :{type: String, required:false},
 neasDiscovered: {type:Array} 
})

  const User = mongoose.model('User', userSchema)

  function validateUser(user){
    const schema = Joi.object({
      name : Joi.string().required(),
      nickname: Joi.string(),
      email: Joi.string(),
      picture:Joi.string(),
      affiliatedNumber: Joi.string().required(),
      affiliationDate: Joi.date(),
      occupation: Joi.string(),
      birthdate: Joi.string(),
      neasDiscovered:Joi.array()
    })
    return schema.validate(user)
  }

  exports.User = User
  exports.userSchema = userSchema
  exports.validate = validateUser



