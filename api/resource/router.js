// build your `/api/resources` router here
const express = require('express');
const router = express.Router()

const Resource = require('./model')

router.get('/', async (req,res) => {
    try{
        const data = await Resource.get()
        res.json(data)
    }catch{
        res.status(500).json({message: 'Error fetching data'})
    }
})




module.exports = router;