
exports.seed = function(knex) {
  return knex('potluck_users').del()
    .then(function () {
      return knex('potluck_users').insert([
        {
          potluck_users_id: 1,
          potluck_id: 2,
          user_id: 4,
          attending: 1
        },
        {
          potluck_users_id: 2,
          potluck_id: 1,
          user_id: 5,
          attending: 0
        },
        {
          potluck_users_id: 3,
          potluck_id: 1,
          user_id: 1,
          attending: 1
        },
        {
          potluck_users_id: 4,
          potluck_id: 2,
          user_id: 3,
          attending: 0
        },
        {
          potluck_users_id: 5,
          potluck_id: 3,
          user_id: 7,
          attending: 1
        },
        {
          potluck_users_id: 6,
          potluck_id: 3,
          user_id: 8,
          attending: 1
        },
        {
          potluck_users_id: 7,
          potluck_id: 3,
          user_id: 9,
          attending: 1
        },
        {
          potluck_users_id: 8,
          potluck_id: 3,
          user_id: 10,
          attending: 1
        },
      ]);
    });
};
