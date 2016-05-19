'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Book', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
    isbn: DataTypes.STRING,
    weight: DataTypes.STRING,
    releaseDate: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    modifiedBy: DataTypes.STRING
  });
}
