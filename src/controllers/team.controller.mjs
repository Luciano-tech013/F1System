import { getAll, getTeamById, save, updateById, deleteById } from "../services/team.service.mjs";
import { ContentTypeException } from "../services/exceptions/MyException.mjs";
import { CONTENT_TYPE_EXP } from "../utils/messages/error/headers.error.messages.mjs";

const HEADER_TYPE = "Content-Type"
const APPLICATION_CONTENT = "application/json"

const getAllTeams = async (req, res, next) => {
    try {
        const teams = await getAll();
        res.status(200).json(teams);
    } catch(error) {
        next(error);
    }
}

const getByIdTeam = async (req, res, next) => {
    try {
        const team = await getTeamById({ id: req.params.id, include: false });
        res.status(200).json(team);
    } catch(error) {
        next(error);
    }
}

const saveTeam = async (req, res, next) => {
    if(req.get(HEADER_TYPE) !== APPLICATION_CONTENT)
        return next(new ContentTypeException(CONTENT_TYPE_EXP.msg, CONTENT_TYPE_EXP.status));

    try {
        const team = await save(req.body);
        res.status(201).json(team);   
    } catch(error) {
        next(error)   
    }
}

const updateByIdTeam = async (req, res, next) => {
    if(req.get(HEADER_TYPE) !== APPLICATION_CONTENT)
        return next(new ContentTypeException(CONTENT_TYPE_EXP.msg, CONTENT_TYPE_EXP.status));

    try {
        const team = await updateById(req.params.id, req.body);
        res.status(201).json(team);   
    } catch(error) {
        next(error);   
    }
}

const deleteByIdTeam = async (req, res, next) => {
    try {
        const driver = await deleteById(req.params.id);
        res.status(200).json(driver);
    } catch(error) {
        next(error);
    }
}

export { getAllTeams, getByIdTeam, saveTeam, updateByIdTeam, deleteByIdTeam }