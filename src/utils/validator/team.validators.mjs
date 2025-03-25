import { param, body } from "express-validator";
import { ERR_FIELD_DATETIME, ERR_FIELD_EMPTY, ERR_FIELD_STRING, ERR_FIELD_INT, ERR_ID_MIN_VALUE } from "../messages/validation/validations.messages.mjs";

export const teamSchema = [
    body("name")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("base")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("date_fundation")
        .isISO8601().withMessage(ERR_FIELD_DATETIME)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("main_sponsor")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("number_of_championships_won")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_races_won")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_poles")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_races")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("founder")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("director")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("president")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("image")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY)  
]

export const idSchema = [
    param("id")
        .isInt({ min: 1}).withMessage(ERR_ID_MIN_VALUE)
        .toInt()
]