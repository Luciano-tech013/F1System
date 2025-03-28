import { findManyByPosition, findUnique, create, removeById, update } from "../persistence/repositories/driver.repository.mjs";
import { DriverNameException, DriverNotFoundException, DriverPositionCoverException } from "./exceptions/driver.exceptions.mjs";
import { getTeamById } from "./team.service.mjs";
import { DRIVER_NAME_EXP, DRIVER_NOT_FOUND_EXP, DRIVER_POS_HOLDER_COVER_EXP, DRIVER_POS_RESERVE_COVER_EXP } from "../utils/messages/error/driver.error.messages.mjs";

const DRIVER_POS_TITULAR = "TITULAR"
const DRIVER_POS_RESERVA = "RESERVA"

const getAllByPosition = async position => {
    return await findManyByPosition(position);
};

const getByDriverId = async id => {
    const driver = await findUnique(id);
    if(!driver)
        throw new DriverNotFoundException(DRIVER_NOT_FOUND_EXP.msg, DRIVER_NOT_FOUND_EXP.status);

    return driver;
};

const save = async body => {
    try {
        await validatePosition(body.team_id, body.position);
    } catch(error) {
        throw error;
    }
    
    try {
        return await create(body);
    } catch(error) {
        throw new DriverNameException(DRIVER_NAME_EXP.msg, DRIVER_NAME_EXP.status);
    }
};

const deleteById = async id => {
    await getByDriverId(id);
   
    return await removeById(id);
};

const updateById = async (id, body) => {
    await getByDriverId(id);

    try {
        await validatePosition(body.team_id, body.position);
    } catch(error) {
        throw error;
    }

    try {
        return await update(id, body);
    } catch(error) {
        throw new DriverNameException(DRIVER_NAME_EXP.msg, DRIVER_NAME_EXP.status);
    }
}

//**Éste codigo deberia refactorizarse porque su costo computacional es alto */
const validatePosition = async (team_id, position) => {
    const team = await getTeamById({ id: team_id, include: true });

    console.log(position, DRIVER_POS_TITULAR, (position === DRIVER_POS_TITULAR));
    //Si el equipo ya contiene dos pilotos titulares
    if(position === DRIVER_POS_TITULAR && hasDriver(team, {
        pos: DRIVER_POS_TITULAR,
        cant: 2
    })) 
        throw new DriverPositionCoverException(DRIVER_POS_HOLDER_COVER_EXP.msg, DRIVER_POS_HOLDER_COVER_EXP.status);

    //Si el equipo ya contiene un piloto reserva
    if(position === DRIVER_POS_RESERVA && hasDriver(team, { 
        pos: DRIVER_POS_RESERVA, 
        cant: 1 
    }))
        throw new DriverPositionCoverException(DRIVER_POS_RESERVE_COVER_EXP.msg, DRIVER_POS_RESERVE_COVER_EXP.status);
}

const hasDriver = (team, options) => {
    return team.drivers.filter(driver => driver.position === options.pos).length >= options.cant;
}

export { getAllByPosition, getByDriverId, save, deleteById, updateById }