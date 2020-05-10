const express = require('express');

const router = express.Router();

const Actions = require('./data/helpers/actionModel.js');
const Project = require('./data/helpers/projectModel.js');

//CRUD ops
//POST
router.post('/actions', (req,res) => {
    console.log('----this----',req.body.project_id)
    Project.getProjectActions(req.body.project_id)
        .then(action => {
            console.log('----------action------------',action)
            if(action.length === 0 || action.length === null){
                res.status(500).json("project with specified id not in database")
            }else{
                Actions.insert(req.body)
                .then(action => {
                    console.log('------------', action)
                    res.status(201).json(action)
                })
                .catch(error => {
                    res.status(500).json(error)
                })
            }
        })
        .catch(error => {
            res.status(500).json(error);
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
//GET actions/:id
router.get('/actions/:id', (req,res) => {
    Actions.get(req.params.id)
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