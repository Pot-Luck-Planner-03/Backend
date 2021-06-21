
exports.seed = function(knex) {
  return knex('foods').del()
    .then(function () {
      return knex('foods').insert([
        {
          food_name: 'Pineapple', 
          description: 'part pine, part apple'
        },
        {
          food_name: 'Sweet Potatoes', 
          description: 'mashed?  fried?  u choose'
        },
        {
          food_name: 'Pizza', 
          description: 'Veeeeegan pls'
        },
        {
          food_name: 'LaCroix', 
          description: ''
        },
        {
          food_name: 'Masala', 
          description: 'better make me sweat'
        },
        {
          food_name: 'Ramen', 
          description: ''
        },
      ]);
    });
};
