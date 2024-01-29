const { HttpError } = require("./HttpErrors");

const validateReqBody = (scheme) => {
  const func = (req, res, next) => {
    const { error } = scheme.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.export = validateReqBody;
