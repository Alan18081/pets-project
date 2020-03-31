const { Router } = require('express');
const petsController = require('./pets.controller');

const router = new Router();

router.get('/', petsController.findAll);

module.exports = router;