const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  console.log(error);
  console.log(status);
  return error;
};

module.export = HttpError;
