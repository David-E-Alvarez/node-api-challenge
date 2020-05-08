const express = require('express');

const router = express.Router();

const Actions = require('./data/helpers/actionModel.js');

//CRUD ops
//POST
router.post('/actions', (req,res) => {
    Actions.insert(req.body)
        .then(action => {
            console.log(action)
            res.status(201).json(action)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
//GET
router.get('/actions', (req, res) => {
    Actions.get()
        .then(actions => {
            // console.log("something: ", something)
            res.status(201).json(actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
//UPDATE
router.put('/actions/:id', (req,res) => {
    Actions.update(req.params.id, req.body)
        .then(updatedAction => {
            // console.log('------->', something)
            res.status(201).json(updatedAction)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
//DELETE
router.delete('/actions/:id', (req,res) => {
    Actions.remove(req.params.id)
        .then(deletedAction => {
            console.log('-------->', deletedAction)
            res.status(201).json(deletedAction)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;