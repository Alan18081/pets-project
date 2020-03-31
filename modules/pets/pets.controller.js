const petsService = require('./pets.service');

class PetsController {

    async findAll(req, res, next) {
        try {
            const pets = await petsService.findAll({});
            res.send(pets);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = new PetsController();