import express from "express";
import { getAllDriversByPosition, getByIdDriver, saveDriver, deleteByIdDriver, updateByIdDriver } from "../presentation/controllers/driver.controller.mjs";
import { validationResult } from "express-validator";
import { positionSchema, idSchema, driverSchema } from "../utils/validator/driver.validators.mjs";

const driver_router = express.Router();

driver_router.get('/drivers', positionSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    getAllDriversByPosition(req, res, next)
});

driver_router.get('/drivers/:id', idSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    getByIdDriver(req, res, next)
});

driver_router.post('/drivers', driverSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    saveDriver(req, res, next)
});

driver_router.delete('/drivers/:id', idSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));
    
    deleteByIdDriver(req, res, next)
});

driver_router.put('/drivers/:id', [idSchema, driverSchema], (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    updateByIdDriver(req, res, next)
});

const mapperError = errors => {
    return errors.map(error => ({
        value: error.value,
        msg: error.msg,
        field: error.path,
    }));
};

export { driver_router };