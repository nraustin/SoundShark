'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Comments', [
        { userId: 1, songId: 3, body: 'Who\'s still listening in 2022?'},
        { userId: 3, songId: 6, body: 'Riveting.'},
        { userId: 2, songId: 7, body: 'I saw this live in Barcelona!'},
        { userId: 2, songId: 8, body: 'Played this at my hamster\'s funeral. Miss you Brutus.' },
        { userId: 1, songId: 2, body: 'Is there a clean version?'},
        { userId: 3, songId: 1, body: 'Definitely my favorite SoundShark rapper.'},
        { userId: 1, songId: 8, body: 'Is that you Roddy Rich?'},
        { userId: 3, songId: 5, body: 'Still remember when this guy ran for president.'},
        { userId: 2, songId: 7, body: '🔥🔥🔥'},
        { userId: 2, songId: 4, body: 'Can I upload my own track?' },
        { userId: 1, songId: 2, body: 'I, too, go tremendo for new fettucini.'},
        { userId: 3, songId: 5, body: 'Is there an explicit version?'},
        { userId: 1, songId: 1, body: '¡Me encanta!'},
        { userId: 3, songId: 4, body: 'That intro SLAPS'}, 
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
