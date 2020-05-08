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
    console.log('req.params.id', req.params.id)
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
//DELETE

module.exports = router;