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
  editUser,
  deleteUser
};