
const Koders = require('../.models/koders.model');

async function create (koderData) {
   const newKoder = await Koders.create(koderData);
   return newKoder;
}

async function getAll () {
    const allKoders = await Koders.find();
    return allKoders;
}

async function getById(id) {
    const koders = await Koders.findById(id);
    return koders;
}

async function deleteById (id) {
    const koderDeleted = await Koders.findByIdAndDelete(id);
    return koderDeleted;
}

async function updateById (id, newKoderData) {
    const updateKoder = await Koders.findByIdAndUpdate(id, newKoderData, {new: true,})
return updateKoder
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};