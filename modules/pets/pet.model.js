const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Pet extends Model {}

const PetModel = Pet.init({
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    species: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING
    },
    weight: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    breed: {
        type: DataTypes.STRING
    },
    quantity: {
        type: DataTypes.INTEGER,
    }
}, { sequelize, createdAt: false, updatedAt: false });

module.exports = PetModel;
