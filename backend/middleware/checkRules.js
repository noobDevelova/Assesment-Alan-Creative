import { validationResult } from "express-validator";
import { errorResponse } from "../utils/responseHelper.js";

export const checkRules = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return errorResponse(res, "Validation not valid", result.array(), 400);
  }

  next();
};
