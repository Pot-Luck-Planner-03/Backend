
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {user_id: 1, username: 'Lil John', password: '1000'},
        {user_id: 2, username: 'Ludacris', password: '1000'},
        {user_id: 3, username: 'Usher', password: '1000'},
        {user_id: 4, username: 'T-Pain', password: '1000'},
        {user_id: 5, username: 'Mariah', password: '1000'},
        {user_id: 6, username: 'Nelly', password: '1000'},
        {user_id: 7, username: 'ODB', password: '1000'},
        {user_id: 8, username: 'Busta Rhymes', password: '1000'},
        {user_id: 9, username: 'Redman', password: '1000'},
        {user_id: 10, username: 'RZA', password: '1000'}
      ]);
    });
};
