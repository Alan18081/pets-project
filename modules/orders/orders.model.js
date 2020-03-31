const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const OrderItemModel = require('./order-item.model');
const PetModel = require('../pets/pet.model');
const CustomerModel = require('../customers/customer.model');

class Order extends Model {}

const OrderModel = Order.init({
   id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
   postedDate: { allowNull: false, type: DataTypes.DATE },
}, { sequelize, createdAt: false, updatedAt: false });

OrderModel.hasMany(OrderItemModel, { foreignKey: 'orderId', as: 'items' });
OrderModel.hasOne(CustomerModel, { foreignKey: 'orderId', foreignKeyConstraint: true, as: 'customer' });

OrderItemModel.belongsTo(PetModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });
// OrderItemModel.belongsTo(OrderModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });

OrderModel.belongsToMany(PetModel, { through: { model: OrderItemModel } });

module.exports = OrderModel;