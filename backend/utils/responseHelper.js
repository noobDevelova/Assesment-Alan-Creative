export const successResponse = (res, message, data, statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    status_code: statusCode,
    message,
    data,
    error: null,
  });
};

export const createdResponse = (res, message, data) => {
  return res.status(201).json({
    status: "success",
    status_code: 201,
    message,
    data,
    error: null,
  });
};

export const errorResponse = (res, message, error, statusCode = 500) => {
  return res.status(statusCode).json({
    status: "error",
    status_code: statusCode,
    message,
    data: null,
    error: error.message || error,
  });
};

export const noContentResponse = (res, message) => {
  return res.status(204).json({
    status: "success",
    status_code: 204,
    message,
    data: null,
    error: null,
  });
};
