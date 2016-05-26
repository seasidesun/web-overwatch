'use strict';

var resourceLoadHandler = require('./resource-load');
var maps = require('./map_info');
var heros = require('./hero_info');
var files = require('./static_file');

module.exports.loadResource = function () {

    resourceLoadHandler.upResource(files, 'img', ['body_back_img']);
    resourceLoadHandler.upResource(files, 'img', ['index_top_img']);
    resourceLoadHandler.upResource(files.tvs, 'img', ['logo_img'], 'tvs/');
    //map load img
    for (var i in maps) {
        resourceLoadHandler.upResource(maps[i], 'img', ['load_img'], 'maps/');
    }
    //hero icon img
    for (var i in heros) {
        resourceLoadHandler.upResource(heros[i], 'img', ['icon'], 'heros/icons/');
    }
}
