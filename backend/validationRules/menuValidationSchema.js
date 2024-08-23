import { body, param } from "express-validator";

export const menuValidationRules = [
  body("menu_name").notEmpty().withMessage("Menu name is required"),
  body("menu_price")
    .isInt({ gt: 0 })
    .withMessage("Menu price must be a numeric value")
    .notEmpty()
    .withMessage("Menu price is required"),
  body("menu_img")
    .optional()
    .isString()
    .withMessage("Menu image must be a string"),
  body("show_on_catalog")
    .isBoolean()
    .withMessage("Menu catalog should be true or false")
    .notEmpty()
    .withMessage("Menu show is required"),
];

export const menuUpdateValidationRules = [
  param("id").isInt().withMessage("Menu ID must be an integer"),
  body("menu_name")
    .optional()
    .notEmpty()
    .withMessage("Menu name cannot be empty"),
  body("menu_price")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Menu price must be a positive integer"),
  body("menu_img")
    .optional()
    .isString()
    .withMessage("Menu image must be a string"),
  body("show_on_catalog")
    .optional()
    .isBoolean()
    .withMessage("Menu catalog should be true or false"),
];

export const menuPickId = [
  param("id").isInt().withMessage("Menu ID must be an integer"),
];
