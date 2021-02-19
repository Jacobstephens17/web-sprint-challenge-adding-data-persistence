// build your `Task` model here
const db = require("../../data/dbConfig");

const getTask = () => {
    return db('projects')
}

module.exports = {
    getTask
}