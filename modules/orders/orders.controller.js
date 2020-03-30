const ordersService = require('./orders.service');

class OrdersController {

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