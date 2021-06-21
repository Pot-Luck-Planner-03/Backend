
exports.seed = function(knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          food_id: 1, 
          food_name: 'Pineapple', 
          description: 'part pine, part apple'
        },
        {
          food_id: 2, 
          food_name: 'Sweet Potatoes', 
          description: 'mashed?  fried?  u choose'
        },
        {
          food_id: 3, 
          food_name: 'Pizza', 
          description: 'Veeeeegan pls'
        },
        {
          food_id: 4, 
          food_name: 'LaCroix', 
          description: ''
        },
        {
          food_id: 5, 
          food_name: 'Masala', 
          description: 'better make me sweat'
        },
        {
          food_id: 6, 
          food_name: 'Ramen', 
          description: ''
        },
      ]);
    });
};
