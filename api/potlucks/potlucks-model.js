const db = require('../data/db-config')

async function getPotlucks() {
    return db('potlucks')
}

function getPotluckBy(filter) {
    return db('potlucks')
        .where(filter)
}

async function getPotlucksById(potluck_id) {
    let potluck = await db('potlucks AS p')
        .join(
            'users AS u', 
            'u.user_id', 
            'p.organizer',
        )
        .where('p.potluck_id', potluck_id)
        .first()
        
    return {
        potluck_id: potluck.potluck_id,
        potluck_name: potluck.potluck_name,
        details: {
            organizer: potluck.username,
            potluck_description: potluck.potluck_description,
            potluck_date: potluck.potluck_date,
            potluck_time: potluck.potluck_time,
            potluck_location: potluck.potluck_location,
        },
    }
}

async function createPotluck(newPotluck) {
    const potluck  = await db('potlucks')
        .insert(newPotluck, ['*'])
    const id = potluck[0].potluck_id
    return getPotlucksById(id)
}

function editPotluck(potluck_id, potluckInfo) {
    return db('potlucks')
        .update(potluckInfo)
        .where({ potluck_id })
        .then(() => {
            return getPotlucksById(potluck_id)
        })
}

async function deletePotluck(potluck_id) {
    const deletedPotluck = await getPotlucksById(potluck_id)
    await db('potlucks')
        .where('potluck_id', potluck_id)
        .del()
    return deletedPotluck
}

module.exports = {
    getPotlucks,
    getPotluckBy,
    getPotlucksById,
    createPotluck,
    editPotluck,
    deletePotluck
}