const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const { routeController } = require('../controllers')

const { getRoute, createRoute, updateRoute, deleteRoute } = routeController

router.get('/', async (req, res) => {
    const geoRoute = await getRoute()
    res.send(geoRoute)
})
  
router.post('/', async (req, res) => {
    const body = req.body

    try {
        const newGeoRoute = await createRoute(body)
        res.status(201)
        res.send(newGeoRoute)
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
    const geoRoute = await updateRoute(id, body)

    if (!geoRoute) {
        res.status(404)
        return res.send({
        message: `No existe ruta asignada`
        })
    }
    res.send(geoRoute)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params

    const result = await deleteRoute(id)

    res.send(result)
})

module.exports = router