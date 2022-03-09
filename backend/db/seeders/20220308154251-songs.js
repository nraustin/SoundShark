'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     return queryInterface.bulkInsert('Songs', [
          { title: 'SWAY', url: 'https://soundcloud.com/tubebackr/sway', favorites: 201, userId: 1, playlistId: 1},
          { title: 'Tropics', url: 'https://soundcloud.com/scandinavianz/scandinavianz-tropics-free-download', favorites: 0, userId: 3, playlistId: 3},
          { title: 'Enchante', url: 'https://soundcloud.com/tobjanmusic/enchante-free-download', favorites: 312, userId: 2, playlistId: 3},
          { title: 'Utopia', url: 'https://soundcloud.com/grandakt/utopia', favorites: 34, userId: 3, playlistId: 2},
          { title: 'Fortune-Of-Life', url: 'https://soundcloud.com/tobjanmusic/fortune-of-life-free-download', favorites: 85, userId: 3, playlistId: 1},
          { title: 'Reflections', url: 'https://soundcloud.com/markvard/reflections', favorites: 91, userId: 3, playlistId: 2},
          { title: 'Feels Good', url: 'https://soundcloud.com/justhea/feel-good', favorites: 14, userId: 2, playlistId: 1},
          { title: 'Take Me Away', url: 'https://soundcloud.com/tobjanmusic/take-me-away-free-download', favorites: 4, userId: 3, playlistId: 3},
          { title: 'GET AWAY', url: 'https://soundcloud.com/royaltyfreemusic-nocopyrightmusic', favorites: 136, userId: 1, playlistId: 3},
          { title: 'Chile', url: 'https://soundcloud.com/grandakt/chile', favorites: 57, userId: 2, playlistId: 3},
          { title: 'Fresh Up', url: 'https://soundcloud.com/tubebackr/fresh-up', favorites: 3, userId: 1, playlistId: 2}
     ], {})
      // {fields: [title, url, favorites, userId, playlistId], returning: true});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
