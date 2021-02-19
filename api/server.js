// build your server here and require it from index.js
const express = require('express');
const server = express()


const ProjectRouter = require('/api/project/router')
const ResourceRouter = require('/api/resource/router')
const TaskRouter = require('/api/task/router')



server.use(express.json())
server.use('/api/project', ProjectRouter)
server.use('/api/resource', ResourceRouter)
server.use('/api/task', TaskRouter)