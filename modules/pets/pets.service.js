const PetModel = require('./pet.model');

class PetsService {

    findAll(query) {
        return PetModel.findAll(query);
    }

    async subtractQuantity(petId, quantity, transaction) {
        const pet = await PetModel.findOne({ where: { id: petId }, transaction });
        if (!pet) {
            throw new Error(`Pet with id ${petId} not found`);
        }
        if(pet.quantity < quantity) {
            throw new Error(`You cannot buy more pets than it is available for id ${pet.id}`);
        }
        pet.quantity = pet.quantity - quantity;
        await pet.save({ transaction });
    }
}


module.exports = new PetsService();