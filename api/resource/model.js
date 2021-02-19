// build your `Resource` model here
const db = require("../../data/dbConfig");

const getResource = () => {
    return db('projects')
}

module.exports = {
    getResource
}