/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: server.js
 * Run the API Server
 */

'use strict';

const Hapi = require('hapi');
const routes = require('./routes.js');


// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add the route
server.route(routes.routes);

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});