
exports.seed = function(knex) {
  return knex('potlucks').del()
    .then(function () {
      return knex('potlucks').insert([
        {
          potluck_id: 1,
          potluck_name: 'Tasty Foodz Partay',
          potluck_description: 'bring the tastiest food pls.  NO BAD FOOD',
          date: '7/15/2021',
          time: '06:00 PM',
          location: '1403 Park Ave, Long Beach CA'
        },
        {
          potluck_id: 2,
          potluck_name: 'Yum Yum Food Time',
          potluck_description: 'yumyumyumyumyumyumyum',
          date: '8/20/2021',
          time: '05:00 PM',
          location: '1111 E 2222 S, SLC UT'
        },
        {
          potluck_id: 3,
          potluck_name: 'MM..FOOD',
          potluck_description: 'got more cheese than doritos, cheetos, or fritos',
          date: '7/31/2021',
          time: '07:30 PM',
          location: '45 S 5th Ave, New York NY'
        },
      ]);
    });
};
