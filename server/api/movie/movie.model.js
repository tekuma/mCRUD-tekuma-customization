'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Movie', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    production: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    stars: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    genre: DataTypes.STRING,
    language: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    modifiedBy: DataTypes.STRING,
    unittype: DataTypes.STRING
  });
}
