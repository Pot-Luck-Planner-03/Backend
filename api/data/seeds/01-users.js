
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: 'Lil John', password: '1111'},
        {username: 'Ludacris', password: '1111'},
        {username: 'Usher', password: '1111'},
        {username: 'T-Pain', password: '1111'},
        {username: 'Mariah', password: '1111'},
        {username: 'Nelly', password: '1111'},
        {username: 'ODB', password: '1111'},
        {username: 'Busta Rhymes', password: '1111'},
        {username: 'Redman', password: '1111'},
        {username: 'RZA', password: '1111'}
      ]);
    });
};
