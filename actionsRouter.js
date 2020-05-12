const express = require('express');

const router = express.Router();

const Actions = require('./data/helpers/actionModel.js');
const Project = require('./data/helpers/projectModel.js');

//CRUD ops
//POST
router.post('/actions', (req,res) => {
    // console.log(req.body.project_id)
    Project.get(req.body.project_id)
        .then(proj => {
            if(proj.length === 0){
                res.status(400).json("project doesnt exist")
            }else{
                Actions.insert(req.body)
                    .then(action => {
                        console.log("action: ------->",action)
                        res.status(201).json(action)
                    })
                    .catch(error => {
                        res.status(500).json(error)
                    })
            }
        })
        .catch(error => {
            res.status()
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
    console.log("req.paramserere.id", req.params.id)
    Actions.get(req.params.id)
        .then(action => {
            console.log("action: ", action)
            if(action === null){
                res.status(400).json("action with specified id doesnt exist")
            }else{
                res.status(201).json(action)
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
        
})
//UPDATE
router.put('/actions/:id', (req,res) => {
    Project.getProjectActions(req.body.project_id)
        .then(projActions => {
            console.log("projActions: ", projActions)
            if(!projActions[0].project_id){
                res.status(400).json("project doesnt exist")
            }else{
                Actions.update(req.params.id, req.body)
                    .then(updatedAction => {
                        console.log("updatedAction", updatedAction)
                        if(updatedAction === null){
                            res.status(400).json("action doesnt exist")
                        }else{
                            res.status(201).json(updatedAction)
                        }
                    })
                    .catch(error => {
                        res.status(500).json(error)
                    })
            }
        })
        .catch(error => {
            res.status(500).json("no project with given project id")
        })
})
//DELETE
router.delete('/actions/:id', (req,res) => {
    Actions.remove(req.params.id)
        .then(deletedAction => {
            console.log('-------->', deletedAction)
            if(deletedAction === 0){
                res.status(400).json("no action with specified id")
            }else{
                res.status(201).json(deletedAction)
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;