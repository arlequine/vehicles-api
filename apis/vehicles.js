const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const { vehiclesController } = require('../controllers')

const { getVehicles, createVehicle, updateVehicle, deleteVehicle } = vehiclesController

router.get('/', async (req, res) => {
    const vehicles = await getVehicles()
    res.send(vehicles)
})
  
router.post('/', async (req, res) => {
    const body = req.body

    try {
        const newVehicle = await createVehicle(body)
        res.status(201)
        res.send(newVehicle)
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400)
            return res.send({
                message: 'Error de validación',
                reason: err.message
            })
        }
        res.status(500)
        return res.send({
            error: err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const vehicle = await updateVehicle(id, body)

    if (!vehicle) {
        res.status(404)
        return res.send({
        message: `El vehiculo con id: ${id}, no se encuentra`
        })
    }
    res.send(vehicle)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    const result = await deleteVehicle(id)

    res.send(result)
})

module.exports = router