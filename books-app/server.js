const express = require('express')();
let routes = require('./routes')

let env = process.env.NODE_ENV;
if (!env) {
    env = 'development'
}

let config = require(`./config/config.${env}.json`);

require('./database')(`mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`)

const port = process.env.port || 3000

express.use(routes)

express.listen(port, () =>{
    console.log('Server up and running on port: ' + port) 
})