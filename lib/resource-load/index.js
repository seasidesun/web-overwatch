'use strict';

var defaultConfig = {
    img: '/images/',
    css: '/stylesheets/',
    js: '/javascript/',
};

module.exports.setConfig = setConfig;

(function () {
    var env = process.env.NODE_ENV || 'development';

    switch (env) {
        case 'production':
            var rootPath = 'http://o7o8qpdte.bkt.clouddn.com/';
            setConfig({
                img: rootPath + 'img/',
                css: rootPath + 'css/',
                js: rootPath + 'js/',
            });
            break;
        default:
            setConfig({});
    }
})();

function setConfig (option) {
    for (var i in option) {
        if (defaultConfig.hasOwnProperty(i)) defaultConfig[i] = option[i];
    }
    console.log('FileImg: ' + defaultConfig.img);
}

function upResource (data, type, params, rootPath) {
    var dataType = Object.prototype.toString.call(data);

    switch (dataType) {
        case '[object Object]':
            upObjResource(data, type, params, rootPath);
            break;
        case '[object Array]':
            for (var i = 0; i < data.length; i++) {
                upObjResource(data[i], type, params, rootPath);
            }
            break;
        default:
    }
}

function upObjResource (data, type, params, rootPath) {
    var str_o = 'data';
    for (var i = 0; i < params.length; i++) {
        str_o += '["' + params[i] + '"]';
    }
    var str = str_o + ' = "' + defaultConfig[type] + '" + "' + (rootPath || '') + '"+ ' + str_o;
    eval(str);
    return;
}

// upObjResource({ p: {name: {en: 'g', zh: 'gege', load: 'back.jpg'}}}, 'img', ['p', 'name', 'load']);
// upObjResource({ p: {name: {en: 'g', zh: 'gege', load: 'back.jpg'}}}, 'img', ['p', 'name', 'load'], 'maps/');

module.exports.setConfig = setConfig;
module.exports.upResource = upResource;
