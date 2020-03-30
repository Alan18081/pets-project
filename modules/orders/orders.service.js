const { Op } = require('sequelize');
const OrderModel = require('./orders.model');
const OrderItemModel = require('./order-item.model');
const sequelize = require('../../db');
const customersService = require('../customers/customers.service');
const petsService = require('../pets/pets.service');

class OrdersService {
    async createOne(orderData) {
        return sequelize.transaction(async transaction => {
            const { items } = orderData;
            const foundPets = await petsService.findAll({
                where: { id: { [Op.in]: items.map(i => i.petId) } },
                attributes: ['id', 'quantity'],
                transaction,
            });
            if (foundPets.length !== items.length) {
                const invalidIds = [];
                items.forEach(i => {
                    if (!foundPets.find(fp => fp.id === i)) {
                        invalidIds.push(i);
                    }
                });
                throw new Error(`Invalid pet ids are [${invalidIds.join(',')}]`);
            }

            items.forEach(pet => {
               const foundPet = foundPets.find(p => p.id === pet.id);
               if (foundPet.quantity < pet.quantity) {
                   throw new Error(`You cannot buy more pets than it is available for id ${pet.id}`);
               }
            });
            const order = new OrderModel();
            order.postedDate = new Date();
            order.customer = await customersService.createOne(orderData.customer, transaction);
            const savedOrder = await order.save({ transaction });
            const orderItems = items.map(
                item => new OrderItemModel({ orderId: savedOrder.id, petId: item.petId, quantity: item.quantity })
            );
            const savedOrderItems = await OrderItemModel.bulkCreate(orderItems, { transaction });
            await Promise.all(items.map(item => petsService.subtractQuantity(item.petId, item.quantity, transaction)));
            order.items = savedOrderItems;
            return order;
        });
    }

}

module.exports = new OrdersService();