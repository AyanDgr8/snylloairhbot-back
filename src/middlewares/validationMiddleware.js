// src/middlewares/validationMiddleware.js

// import Joi from 'joi';

// const userDetailsSchema = Joi.object({
//   name: Joi.string().required(),
//   phone: Joi.number().required().integer(),
//   email: Joi.string().email().required(),
//   country: Joi.string().valid('India', 'Japan', 'Germany', 'Other').required(),
//   profession: Joi.string().required(),
//   message: Joi.string().required(),
// });

// export const validateInput = (req, res, next) => {
//   const validationResult = userDetailsSchema.validate(req.body);
//   if (validationResult.error) {
//     return res.status(400).json({ error: validationResult.error.message });
//   }
//   next();
// };