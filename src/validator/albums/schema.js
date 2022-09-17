const Joi = require('joi');
 
const AlbumPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().required(),
  // tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { AlbumPayloadSchema };