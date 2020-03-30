const Joi = require('joi');

const CreateOrderSchema = Joi.object().keys({
   items: Joi.array().items(Joi.object().keys({
       petId: Joi.number().integer().min(1).required(),
       quantity: Joi.number().integer().min(1).required()
   })),
   customer: Joi.object().keys({
       name: Joi.string().min(3).required(),
       email: Joi.string().email().required(),
       address: Joi.string().min(4).required(),
       phone: Joi.string().min(8).required(),
   })
});

module.exports = { CreateOrderSchema };