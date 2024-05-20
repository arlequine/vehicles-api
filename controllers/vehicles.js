const VehicleModel = require('../models/vehicles')

const getVehicles = async () => {
    return VehicleModel.find({})
}

const vehicleFilter = async (params) => {
    const result = await VehicleModel.find({brand: `${params.brand}`})
    return result
}

const createVehicle = async (body) => {
    const newVehicle = new VehicleModel(body)
    newVehicle.save()
    return newVehicle
}

const updateVehicle = async (_id, updateObject) => {
    return VehicleModel.findByIdAndUpdate({_id}, updateObject, {
        upsert: false,
        new: true
    })
}

const deleteVehicle = async (_id) => {
    return VehicleModel.findByIdAndDelete({_id})
}

module.exports = {
    getVehicles,
    vehicleFilter,
    createVehicle,
    updateVehicle,
    deleteVehicle
}