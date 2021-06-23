const router = require('express').Router()
const Foods = require('./foods-model')
const { restricted } = require('../auth/auth-middleware')

router.get("/", restricted, (req, res, next) => {
    Foods.getFoods()
        .then(foods => {
            res.status(200).json(foods)
        })
        .catch(next)
})

router.get("/:id", restricted, (req, res, next) => {
    Foods.getFoodById(req.params.id)
        .then(food => {
            res.status(200).json(food)
        })
        .catch(next)
})

router.post("/", restricted, (req, res, next) => {
    Foods.createFood(req.body)
        .then(newFood => {
            res.status(201).json(newFood)
        })
        .catch(next)
})

router.put("/:id", restricted, (req, res, next) => {
    Foods.editFood(req.params.id, req.body)
        .then(edited => {
            res.status(200).json(edited)
        })
        .catch(next)
})

router.delete("/:id", restricted, (req, res, next) => {

})

module.exports = router