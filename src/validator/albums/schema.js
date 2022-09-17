const Joi = require('joi');
 
const AlbumPayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
  // tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { AlbumPayloadSchema };