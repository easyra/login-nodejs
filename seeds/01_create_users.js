
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Vinni', email: 'vmate0@cisco.com'},
        {name: 'Arlyne',email: 'arobinett1@oracle.com'},
        {name:'Carly',email: 'cheatlie2@google.de'}
      ]);
    });
};
