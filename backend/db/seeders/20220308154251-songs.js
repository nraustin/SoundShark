'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
     return queryInterface.bulkInsert('Songs', [
          { title: 'SWAY', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', favorites: 201, userId: 10, playlistId: null},
          { title: 'Tropics', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', favorites: 0, userId: 11, playlistId: null},
          { title: 'Enchante', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', favorites: 312, userId: 12, playlistId: null},
          { title: 'Utopia', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', favorites: 34, userId: 11, playlistId: null},
          { title: 'Fortune-Of-Life', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', favorites: 85, userId: 10, playlistId: null},
          { title: 'Reflections', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', favorites: 91, userId: 11, playlistId: null},
          { title: 'Feels Good', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', favorites: 14, userId: 12, playlistId: null},
          { title: 'Take Me Away', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', favorites: 4, userId: 10, playlistId: null},
          { title: 'GET AWAY', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3', favorites: 136, userId: 10, playlistId: null},
          { title: 'Chile', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3', favorites: 57, userId: 11, playlistId: null},
          { title: 'Fresh Up', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3', favorites: 3, userId: 12, playlistId: null}
     ], {})
      // {fields: [title, url, favorites, userId, playlistId], returning: true});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Songs', null, {});
  }
};
