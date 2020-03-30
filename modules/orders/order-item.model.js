const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const PetModel = require('../pets/pet.model');
const OrderModel = require('../orders/orders.model');

class OrderItem extends Model {}

const OrderItemModel = OrderItem.init({
   quantity: { allowNull: false, type: DataTypes.INTEGER }
}, { sequelize });

module.exports = OrderItemModel;