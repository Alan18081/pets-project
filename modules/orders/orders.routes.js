const { Router } = require('express');
const { CreateOrderSchema } = require('./orders.schema');
const createValidator = require('../../common/middlewares/create-validator.middleware');
const ordersController = require('./orders.controller');

const router = new Router();

router.get('/', ordersController.findMany);

router.post('/', createValidator(CreateOrderSchema), ordersController.createOne.bind(ordersController));

module.exports = router;