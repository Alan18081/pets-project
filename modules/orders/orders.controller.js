const ordersService = require('./orders.service');

class OrdersController {

    async findMany(req, res, next) {
        try {
            const orders = await ordersService.findMany();
            res.send(orders);
        } catch (e) {
            next(e);
        }
    }

    async createOne(req, res, next) {
        try {
            const order = await ordersService.createOne(req.body);
            res.send(order);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new OrdersController();