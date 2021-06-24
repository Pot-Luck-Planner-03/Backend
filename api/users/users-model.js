const db = require('../data/db-config');

function find() {
  return db('users AS u')
    .select('user_id', 'username')
    .orderBy('user_id')
}

function findBy(filter) {
  return db('users AS u')
    .select('user_id', 'username', 'password')
    .where(filter)
    .first()
}

function findById(user_id) {
  return db('users AS u')
    .select('user_id', 'username')
    .where({ user_id })
    .first()
}

async function getUserPotlucks(user_id) {
  const users = await find()
  const user = await findById(user_id)
  const potlucks = await db('potlucks AS p')
    .join(
      'potluck_users AS pu',
      'pu.potluck_id',
      'p.potluck_id'
      )
    .where('pu.user_id', user_id)
    .orderBy('p.potluck_date')

  let userPotlucks = potlucks.map( potluck => {
    //orgainzer logic would need to change if you change if you are able to delete a user
      return({
        attending: potluck.attending,
        potluck_id: potluck.potluck_id,
        potluck_name: potluck.potluck_name,
        organizer: users[potluck.organizer].username,  
        potluck_description: potluck.potluck_description,
        potluck_date: potluck.potluck_date,
        potluck_time: potluck.potluck_time,
        potluck_location: potluck.potluck_location
        })
  })
  return {
    user_id: user_id,
    username: user.username,
    potlucks: userPotlucks
  }
}

async function editUser(user_id, newData) {
  return db('users')
    .update(newData, ['*'])
    .where({ user_id })  
}

async function deleteUser(user_id) {
  const deleted = await findById({ user_id })
  db('users')
    .where({ user_id })
    .del()
  return deleted
}




module.exports = {
  find,
  findBy,
  findById,
  getUserPotlucks,
  editUser,
  deleteUser
};