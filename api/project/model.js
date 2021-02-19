// build your `Project` model here
const db = require("../../data/dbConfig");

const getProject = () => {
    return db('projects')
}

module.exports = {
    getProject
}