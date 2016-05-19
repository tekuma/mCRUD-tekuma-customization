'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Contact', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    category: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    updatedAt: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    modifiedBy: DataTypes.STRING
  });
}
