const express = require('express');
const bodyParser = require('body-parser');

require('./db');

const app = express();
app.use(bodyParser.json());

app.use('/pets', require('./modules/pets/pets.router'));
app.use('/orders', require('./modules/orders/orders.routes'));

app.listen(4000, () => console.log('Server has started'));