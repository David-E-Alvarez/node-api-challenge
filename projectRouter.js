const express = require('express');

const router = express.Router();

const Projects = require('./data/helpers/projectModel.js');

router.get('/:id', (req,res) => {
    Projects.get(req.params.id)
        .then(project => {
            res.status(201).json(something)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router;