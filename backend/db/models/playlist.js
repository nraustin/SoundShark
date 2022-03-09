'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define('Playlist', {
    userId: {
      type: DataTypes.INTEGER
    },
    imageUrl: {
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
  Playlist.associate = function(models) {
    Playlist.hasMany(models.Song, {foreignKey: 'playlistId'})
    Playlist.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Playlist;
};