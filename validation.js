//Validation
const Joi = require("@hapi/joi");

//Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(data);
  return error;
};

//Login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  const {error} = schema.validate(data);
  return error;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
