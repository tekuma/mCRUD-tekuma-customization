'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: DataTypes.STRING,
    country: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    modifiedBy: DataTypes.STRING
  });
}
