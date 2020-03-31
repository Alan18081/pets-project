const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const PetModel = require('../pets/pet.model');
const OrderModel = require('../orders/orders.model');

class OrderItem extends Model {}

const OrderItemModel = OrderItem.init({
   orderId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
   petId: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true },
   quantity: { allowNull: false, type: DataTypes.INTEGER }
}, { sequelize, createdAt: false, updatedAt: false });

module.exports = OrderItemModel;