import { prisma } from "../config/db.mjs";


//TODO: AHora que lo pienso, tal vez esto lo podria controlar desde el frontend
//TODO: Agregar un findManyWithName para los usuarios publicos
//TODO: PARA aquellos usuarios logueados, podran acceder a la informacion de los pilotos de forma completa
const findManyByPosition = async positionParam => {
    return await prisma.driver.findMany({
        where: {
            position: toUpperCase(positionParam)
        }
    })
}

const findUnique = async idParam => {
    return await prisma.driver.findUnique({
        where: {
            id: parseInt(idParam)
        }
    })
}

const create = async body => {
    const age = getAge(body.birthdate);

    /*return await prisma.driver.create({
        data: {
            fullname: body.fullname,
            city: body.city,
            birthdate: body.birthdate,
            age: age,
            number_of_wins: body.number_of_wins,
            number_of_gp: body.number_of_gp,
            main_sponsor: body.main_sponsor,
            team: {
                connect: { id: parseInt(body.team_id) }
            },
            position: body.position.toUpperCase()
        }
    })*/
    return await prisma.driver.create({
        data: {
            fullname: body.fullname,
            birthdate: body.birthdate,
            age: age,
            weight: body.weight,
            height: body.height,
            city: body.city,
            debut_year: body.debut_year,
            debut_team: body.debut_team,
            number_of_wins: body.number_of_wins,
            number_of_gp: body.number_of_gp,
            number_of_championships: body.number_of_championships,
            number_of_poles: body.number_of_poles,
            number_of_fastest_laps: body.number_of_fastest_laps,
            main_sponsor: body.main_sponsor,
            team: {
                connect: { id: parseInt(body.team_id) }
            },
            position: body.position.toUpperCase(),
            image: body.image
        }
    });
}

const removeById = async idParam => {
    return await prisma.driver.delete({
        where: {
            id: parseInt(idParam)
        }
    })
}

const update = async (idParam, body) => {
    const age = getAge(body.birthdate);

    return await prisma.driver.create({
        where: {
            id: parseInt(idParam)
        },
        data: {
            fullname: body.fullname,
            birthdate: body.birthdate,
            age: age,
            weight: body.weight,
            height: body.height,
            city: body.city,
            debut_year: body.debut_year,
            debut_team: body.debut_team,
            number_of_wins: body.number_of_wins,
            number_of_gp: body.number_of_gp,
            number_of_championships: body.number_of_championships,
            number_of_poles: body.number_of_poles,
            number_of_fastest_laps: body.number_of_fastest_laps,
            main_sponsor: body.main_sponsor,
            team: {
                connect: { id: parseInt(body.team_id) }
            },
            position: body.position.toUpperCase(),
            image: body.image
        }
    });
}

const getAge = birthdate => {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

export { findManyByPosition, findUnique, create, removeById, update }