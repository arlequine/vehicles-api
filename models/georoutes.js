const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const geometrySchema = new Schema({
    coordinates: [Number],
    type: String
})

const propertiesSchema = {
    address: String,
    name: String,
    type: String
}

const stationSchema = new Schema({
    id: String,
    type: String,
    order: Number
})
const featuresSchema = new Schema({
    geometry: geometrySchema,
    type: String,
    properties: propertiesSchema,
})
const geojsonSchema = new Schema({
    geojson: featuresSchema,
    type: String
})

const geoRouteSchema = new Schema({
    geojson: geojsonSchema,
    cide: String,
    is_active: Boolean,
    route_id: String,
    distance: Number,
    route_title: String,
    stations: [stationSchema],
    error: String,
    time_zone: String,
    status: String
},{
    versionKey: false,
    timestamps: true
})

const geoRouteModel = model('routes', geoRouteSchema);
  
module.exports = geoRouteModel