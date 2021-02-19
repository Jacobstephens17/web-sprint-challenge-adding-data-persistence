// build your `/api/tasks` router here
const express = require('express');
const router = express.Router()

const Task = require('./model')

router.get('/', async (req,res) => {
    try{
        const data = await Task.get()
        res.json(data)
    }catch{
        res.status(500).json({message: 'Error fetching data'})
    }
})




module.exports = router;