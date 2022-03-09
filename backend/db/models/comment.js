'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comments', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    songId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    body: {
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
  Comment.associate = function(models) {
    Comment.belongsTo(models.Song, {foreignKey: 'songId'})
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Comment;
};