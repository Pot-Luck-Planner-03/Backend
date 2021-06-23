const db = require('../data/db-config')

async function getPotlucks() {
    return db('potlucks')
        .orderBy('potluck_id')
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

async function getPotluckUsers(potluck_id) {
    let potluck = await db('potlucks AS p')
        .join(
            'potluck_users AS pu',
            'pu.potluck_id',
            'p.potluck_id'
        )
        .join(
            'users AS u',
            'u.user_id',
            'pu.user_id'
        )
        .where('p.potluck_id', potluck_id)
    console.log("POTLUCK", potluck)

    return {
        potluck_id: potluck[0].potluck_id,
        potluck_name: potluck[0].potluck_name,
        details: {
            organizer: potluck[0].username,
            potluck_description: potluck[0].potluck_description,
            potluck_date: potluck[0].potluck_date,
            potluck_time: potluck[0].potluck_time,
            potluck_location: potluck[0].potluck_location
        },
        users: potluck.map(user => {
            return ({
                user_id: user.user_id,
                username: user.username,
                attending: user.attending ? 'attending' : 'not attending'
            })
        })
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
    getPotluckUsers,
    createPotluck,
    editPotluck,
    deletePotluck
}