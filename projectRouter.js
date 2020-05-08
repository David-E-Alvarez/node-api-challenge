const express = require('express');

const router = express.Router();

const Projects = require('./data/helpers/projectModel.js');

//POST
router.post('/', (req,res) => {
    Projects.insert(req.body)
        .then(project => {
            // console.log(something)
            res.status(201).json(project)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
//GET
router.get('/', (req,res) => {
    Projects.get()
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})
//GET
// router.get('/:id', (req,res) => {
//     Projects.get(req.params.id)
//         .then(project => {
//             res.status(201).json(project)
//         })
//         .catch(error => {
//             res.status(500).json(error)
//         })
// })
//PUT
router.put('/:id', (req,res) => {
    Projects.update(req.params.id, req.body)
        .then(updatedProject => {
            // console.log("something: ", something)
            res.status(201).json(updatedProject)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
//DELETE
router.delete('/:id', (req,res) => {
    Projects.remove(req.params.id)
        .then(delProject => {
            // console.log("something: ", something)
            res.status(201).json(delProject)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

//GET project actions
router.get('/:id', (req,res) => {
    Projects.getProjectActions(req.params.id)
        .then(actions => {
            console.log('-------->', actions)
            res.status(201).json(actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
module.exports = router;