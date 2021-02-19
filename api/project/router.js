// build your `/api/projects` router here
const express = require('express');
const router = express.Router()

const Project = require('./model')

router.get('/', async (req,res) => {
    try{
        const data = await Project.get()
        res.json(data)
    }catch{
        res.status(500).json({message: 'Error fetching data'})
    }
})




module.exports = router;