const router = require("express").Router();
const Potlucks = require("./potlucks-model");
const { restricted } = require("../auth/auth-middleware.js");
const { validatePotluck, uniqueName } = require('./potlucks-middleware')

router.get('/', restricted, (req, res, next) => {
    Potlucks.getPotlucks()
        .then(potlucks => {
            res.status(200).json(potlucks)
        })
        .catch(next)
})

router.get('/:id', restricted, (req, res, next) => {
    Potlucks.getPotlucksById(req.params.id)
        .then(potluck => {
            console.log("POTLUCK", potluck)
            res.status(200).json(potluck)
        })
        .catch(next)
})

router.get('/:id/users', restricted, (req, res, next) => {
    Potlucks.getPotluckUsers(req.params.id)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.post(
    '/', 
    restricted, 
    validatePotluck, 
    uniqueName, 
    (req, res, next) => {
        Potlucks.createPotluck(req.potluck)
            .then(newPotluck => {
                res.status(201).json(newPotluck)
            })
            .catch(next)
})

router.put('/:id', restricted, validatePotluck, (req, res, next) => {
    Potlucks.editPotluck(req.params.id, req.potluck)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(next)
})

router.delete('/:id', restricted, (req, res, next) => {
    Potlucks.deletePotluck(req.params.id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(next)
})

module.exports = router