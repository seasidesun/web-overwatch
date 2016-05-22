'use strict';

var errorHandler = require('./error_handler.js');
var control = require('../lib/controller.js');

module.exports = function (app) {

    //ping
    app.get('/ping', function (req, res) { res.send('OK'); });

    /* views */
    //index
    app.get('/', function (req, res) { res.render('index', { title: 'Express' }); });
    //map
    app.get('/map/:mapName', control.getMapByName);

    //api
    // app.post('', controller);

    // 404 handler
    app.use(errorHandler.handler404);

    // Error handler
    app.use(errorHandler.errorHandler);
}
