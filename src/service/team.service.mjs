import { findMany, findUnique, create, update, remove } from "../persistence/repository/team.repository.mjs";
import { TeamNotFoundException, CantBeEliminatedTeamException, RepeatedTeamException } from "../service/exceptions/team.exceptions.mjs";
import { CANT_BE_ELIMINATED_EXP, REPEATED_TEAM_EXP, TEAM_NOT_FOUND_EXP } from "../utils/messages/error/team.error.messages.mjs";

const getAll = async () => {
    return await findMany();
}

const getTeamById = async options => {
    const team = await findUnique(options.id, options.include);
    if(!team)
        throw new TeamNotFoundException(TEAM_NOT_FOUND_EXP.msg, TEAM_NOT_FOUND_EXP.status)

    return team;
}

const save = async body => {
    try {
        return await create(body);
    } catch {
        throw new RepeatedTeamException(REPEATED_TEAM_EXP.msg, REPEATED_TEAM_EXP.status);
    }
}

const updateById = async (id, body) => {
    console.log(await getTeamById({ id: idParam, include: false }));
    
    try {
        return await update(id, body);
    } catch {
        throw new RepeatedTeamException(CONTENT_TYPE_EXP.msg, CONTENT_TYPE_EXP.status);
    }
}

const deleteById = async idParam => {
    const team = await getTeamById({ id: idParam, include: true })
    
    if(team.drivers.length != 0)
        throw new CantBeEliminatedTeamException(CANT_BE_ELIMINATED_EXP.msg, CONTENT_TYPE_EXP.status);

    return await remove(id);
}

export { getAll, getTeamById, save, updateById, deleteById }