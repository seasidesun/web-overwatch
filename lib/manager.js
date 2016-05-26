'use strict';

var resourceLoadHandler = require('./resource-load');
var maps = require('./map_info');
var files = require('./static_file');

module.exports.loadResource = function () {

    resourceLoadHandler.upResource(files, 'img', ['body_back_img']);
    resourceLoadHandler.upResource(files, 'img', ['index_top_img']);
    // //mpa load img
    // for (var i in maps) {
    //     resourceLoadHandler.upResource(maps[i], 'img', ['load_img']);
    // }
}
