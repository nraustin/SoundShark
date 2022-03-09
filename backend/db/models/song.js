'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    userId: {
      type: DataTypes.INTEGER
    },
    playlistId: { 
      type: DataTypes.INTEGER
    },
    favorites: { 
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    }
  }, {});
  Song.associate = function(models) {
    Song.belongsTo(models.User, {foreignKey: 'userId' })
    Song.belongsTo(models.Playlist, {foreignKey: 'playlistId'})
    Song.hasMany(models.Comment, {foreignKey: 'songId'})
  };

  return Song;
};