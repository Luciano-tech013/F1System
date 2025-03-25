import express from "express";
import { getAllTeams, getByIdTeam, saveTeam, updateByIdTeam, deleteByIdTeam } from "../presentation/controllers/team.controller.mjs";
import { validationResult } from "express-validator";
import { teamSchema, idSchema } from "../utils/validator/team.validators.mjs";

const team_routes = express.Router();

team_routes.get('/teams', (req, res, next) => getAllTeams(req, res, next));

team_routes.get('/teams/:id', idSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    getByIdTeam(req, res, next)
});

team_routes.post('/teams', teamSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    saveTeam(req, res, next)
});

team_routes.put('/teams/:id', [idSchema, teamSchema], (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));
    
    updateByIdTeam(req, res, next)
});

team_routes.delete('/teams/:id', idSchema, (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json(mapperError(errors.array()));

    deleteByIdTeam(req, res, next)
});

const mapperError = errors => {
    return errors.map(error => ({
        value: error.value,
        msg: error.msg,
        field: error.path,
    }));
};

export { team_routes }