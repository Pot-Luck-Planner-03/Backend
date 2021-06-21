const db = require('../data/db-config');

function find() {
  return db('users AS u')
    .select('user_id', 'username')
}

function findBy(filter) {
  return db('users AS u')
    .select('user_id', 'username', 'password')
    .where(filter)
    .first()
}

function findById(user_id) {
    return db('users AS u')
      .select('user_id', 'username', 'role_name')
      .where({ user_id })
      .first()
}

async function add(newUser) {
    return db('users')
        .insert(newUser, ['user_id', 'username'])
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};