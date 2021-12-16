const boom = require('@hapi/boom');

function validatorHandler(scheme, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = scheme.validator(data);
    if(error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
