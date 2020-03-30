const Joi = require('joi');

module.exports = (schema, reqField = 'body') => {
  return (req, res, next) => {
      const { error } = Joi.validate(schema, req[reqField]);

      if (error) {
          next(error);
      }

      next();
  };
};