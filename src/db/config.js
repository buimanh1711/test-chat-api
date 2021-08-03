const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')

var db = new JsonDB(new Config("myDataBase", true, false, '/'))

module.exports = db