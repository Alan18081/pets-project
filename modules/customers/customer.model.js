const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');

class Customer extends Model {}

const CustomerModel = Customer.init({
    id: { primaryKey: true, autoIncrement: true, allowNull: false, type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    orderId: { type: DataTypes.INTEGER, allowNull: false },
}, { sequelize, createdAt: false, updatedAt: false });

module.exports = CustomerModel;