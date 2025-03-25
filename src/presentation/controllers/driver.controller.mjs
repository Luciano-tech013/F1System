import { getAllByPosition, getByDriverId, save, deleteById, updateById } from "../../service/driver.service.mjs";
import { ContentTypeException } from "../../service/exceptions/MyException.mjs";
import { CONTENT_TYPE_EXP } from "../../utils/messages/error/headers.error.messages.mjs";

const HEADER_TYPE = "Content-Type"
const APPLICATION_CONTENT = "application/json"

const getAllDriversByPosition = async (req, res, next) => {
    try {
        const drivers = await getAllByPosition(req.query);
        res.status(200).json(drivers);
    } catch(error) {
        next(error);
    }
}

const getByIdDriver = async (req, res, next) => {
    try {
        const driver = await getByDriverId(req.params.id);
        res.status(200).json(driver);
    } catch(error) {
        next(error);
    } 
}

const saveDriver = async (req, res, next) => {
    if(req.get(HEADER_TYPE) !== APPLICATION_CONTENT)
        return next(new ContentTypeException(CONTENT_TYPE_EXP.msg, CONTENT_TYPE_EXP.status));

    try {
        const driver = await save(req.body);
        res.status(201).json(driver);
    } catch(error) {
        next(error);
    }
}

const deleteByIdDriver = async (req, res, next) => {
    try {
        const driver = await deleteById(req.params.id);
        res.status(200).json(driver);
    } catch(error) {
        next(error);
    }
}

const updateByIdDriver = async (req, res, next) => {
    if(req.get(HEADER_TYPE) !== APPLICATION_CONTENT)
        return next(new ContentTypeException(CONTENT_TYPE_EXP.msg, CONTENT_TYPE_EXP.status));

    try {
        const driver = await updateById(req.params.id, req.body);
        res.status(200).json(driver);
    } catch(error) {
        next(error);
    }
}

export { getAllDriversByPosition, getByIdDriver, saveDriver, deleteByIdDriver, updateByIdDriver }