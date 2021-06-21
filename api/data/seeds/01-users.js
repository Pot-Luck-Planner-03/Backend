
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'Lil John', password: '1000'},
        {username: 'Ludacris', password: '1000'},
        {username: 'Usher', password: '1000'},
        {username: 'T-Pain', password: '1000'},
        {username: 'Mariah', password: '1000'},
        {username: 'Nelly', password: '1000'},
        {username: 'ODB', password: '1000'},
        {username: 'Busta Rhymes', password: '1000'},
        {username: 'Redman', password: '1000'},
        {username: 'RZA', password: '1000'}
      ]);
    });
};
