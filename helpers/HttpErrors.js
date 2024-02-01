const errorMessageList = {
  400: "Bad request",
  401: "Unauthorized",
  403: "Forbiddien",
  404: "Not found",
  409: "Conflict",
};

const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  console.log(error);
  console.log(status);
  return error;
};

module.export = HttpError;
