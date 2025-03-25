import { query, param, body } from "express-validator";
import { ERR_FIELD_EMPTY, ERR_FIELD_STRING, ERR_FIELD_INT, ERR_FIELD_DATETIME, ERR_FIELD_IN, ERR_ID_MIN_VALUE } from "../messages/validation/validations.messages.mjs";

export const positionSchema = [
    query("pos")
        .isString(ERR_FIELD_STRING).withMessage()
        .notEmpty(ERR_FIELD_EMPTY).withMessage()
        .isIn(["TITULAR", "PRUEBA", "RESERVA", "ACADEMIA"]).withMessage(ERR_FIELD_IN)
]

export const idSchema = [
    param("id")
        .toInt()
        .isInt({ min: 1 }).withMessage(ERR_ID_MIN_VALUE)
];

export const driverSchema = [
    body("fullname")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("birthdate")
        .isISO8601().withMessage(ERR_FIELD_DATETIME)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("weight")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("height")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("city")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("debut_year")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("debut_team")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("number_of_wins")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_gp")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_championships")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_poles")
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("number_of_fastest_laps") 
        .isInt({ min: 0 }).withMessage(ERR_FIELD_INT),
    body("main_sponsor")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY),
    body("team_id")
        .isInt({ min: 1 }).withMessage(ERR_FIELD_INT),
    body("position")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY)
        .isIn(["TITULAR", "PRUEBA", "RESERVA", "ACADEMIA"]).withMessage(ERR_FIELD_IN),
    body("image")
        .isString().withMessage(ERR_FIELD_STRING)
        .notEmpty().withMessage(ERR_FIELD_EMPTY)
]

