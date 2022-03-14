'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists', [
      { title: 'Upbeat' , imageUrl: 'https://static.wikia.nocookie.net/aesthetics/images/e/e8/Vaporwave-aesthetic-great-wave.png/revision/latest/scale-to-width-down/250?cb=20201206161614', userId: 10},
      { title: 'Study' , imageUrl: 'https://lofficiel.imgix.net/production/austria/images/1623680067938615-dark-academia-1.jpg?w=1920&h=800&fit=clip&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb', userId: 11},
      { title: 'Summer' , imageUrl: 'https://www.jordanrobins.com.au/wp-content/uploads/2020/10/Summer-Sun-_-Hyams-Beach-V1.3.jpg', userId: 12},
  ], {})
  // {fields: [title, imageUrl, userId, playlistId], returning: true});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
