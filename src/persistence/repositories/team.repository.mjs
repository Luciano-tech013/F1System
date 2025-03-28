import { prisma } from "../config/db.mjs";

const findMany = async () => {
    return await prisma.team.findMany();
}

const findUnique = async (idParam, value) => {
    return await prisma.team.findUnique({
        where: { id: parseInt(idParam) },
        include: { drivers: value }
    });
}

const create = async body => {
    return await prisma.team.create({
        data: {
            name: body.name,
            base: body.base,
            date_fundation: body.date_fundation,
            main_sponsor: body.main_sponsor,
            number_of_championships_won: body.number_of_championships_won,
            number_of_races_won: body.number_of_races_won,
            number_of_poles: body.number_of_poles,
            number_of_races: body.number_of_races,
            founder: body.founder,
            director: body.director,
            president: body.president,
            image: body.image
        }
    });
}

const update = async (idParam, body) => {
    return await prisma.team.update({
        where: {
            id: parseInt(idParam)
        },
        data: {
            name: body.name,
            base: body.base,
            date_fundation: body.date_fundation,
            main_sponsor: body.main_sponsor,
            number_of_championships_won: body.number_of_championships_won,
            number_of_races_won: body.number_of_races_won,
            number_of_poles: body.number_of_poles,
            number_of_races: body.number_of_races,
            founder: body.founder,
            director: body.director,
            president: body.president,
            image: body.image
        }
    })
}

const remove = async idParam => {
    return await prisma.team.delete({
        where: {
            id: parseInt(idParam)
        }
    })
}

export { findMany, findUnique, create, update, remove }