const geoRouteModel = require('../models/georoutes')

const getRoute = async () => {
    return geoRouteModel.find({})
}

const createRoute = async (body) => {
    const newGeoRout = new geoRouteModel(body)
    newGeoRout.save()
    return newGeoRout
}

const updateRoute = async (_id, updateObject) => {
    return geoRouteModel.findByIdAndUpdate({_id}, updateObject, {
        upsert: false,
        new: true
    })
}

const deleteRoute = async (_id) => {
    return geoRouteModel.findByIdAndDelete({_id})
}

module.exports = {
    getRoute,
    createRoute,
    updateRoute,
    deleteRoute
}