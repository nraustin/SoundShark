'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Comments', [
        { userId: 10, songId: 56, body: 'Who\'s still listening in 2022?'},
        { userId: 11, songId: 57, body: 'Riveting.'},
        { userId: 12, songId: 58, body: 'I saw this live in Barcelona!'},
        { userId: 12, songId: 59, body: 'Played this at my hamster\'s funeral. Miss you Brutus.' },
        { userId: 10, songId: 60, body: 'Is there a clean version?'},
        { userId: 11, songId: 61, body: 'Definitely my favorite SoundShark rapper.'},
        { userId: 10, songId: 66, body: 'Is that you Roddy Rich?'},
        { userId: 12, songId: 64, body: 'Still remember when this guy ran for president.'},
        { userId: 11, songId: 63, body: '🔥🔥🔥'},
        { userId: 11, songId: 62, body: 'Can I upload my own track?' },
        { userId: 10, songId: 56, body: 'I, too, go tremendo for new fettucini.'},
        { userId: 12, songId: 57, body: 'Is there an explicit version?'},
        { userId: 10, songId: 59, body: '¡Me encanta!'},
        { userId: 12, songId: 65, body: 'That intro SLAPS'}, 
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
