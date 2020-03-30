const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../db');
const OrderItemModel = require('./order-item.model');
const PetModel = require('../pets/pet.model');
const CustomerModel = require('../customers/customer.model');

class Order extends Model {}

const OrderModel = Order.init({
   id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
   postedDate: { allowNull: false, type: DataTypes.DATE }
}, { sequelize });

OrderModel.items = OrderModel.hasMany(OrderItemModel);
OrderModel.customer = OrderModel.hasOne(CustomerModel, { foreignKey: 'customerId', foreignKeyConstraint: true });

OrderItemModel.pet = OrderItemModel.belongsTo(PetModel, { foreignKeyConstraint: true, foreignKey: 'petId', targetKey: 'id' });
OrderItemModel.order = OrderItemModel.belongsTo(OrderModel, { foreignKeyConstraint: true, foreignKey: 'orderId', targetKey: 'id' });