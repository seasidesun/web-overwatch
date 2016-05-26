'use strict';

var defaultConfig = {
    img: '/images/',
    css: '/stylesheets/',
    js: '/javascript/',
};

module.exports.setConfig = setConfig;

(function () {
    console.log(process.env.NODE_ENV);
    var env = process.env.NODE_ENV || 'development';

    switch (env) {
        case 'production':
            var rootPath = 'http://o7o8qpdte.bkt.clouddn.com/';
            setConfig({
                img: rootPath + 'img/',
                css: rootPath + 'css/',
                js: rootPath + 'js/',
            });
            console.log('rootPath: ' + rootPath);
            break;
        default:
    }
})();

function setConfig (option) {
    for (var i in option) {
        if (defaultConfig.hasOwnProperty(i)) defaultConfig[i] = option[i];
    }
}

function upResource (data, type, params) {
    var dataType = Object.prototype.toString.call(data);

    switch (dataType) {
        case '[object Object]':
            upObjResource(data, type, params);
            break;
        case '[object Array]':
            for (var i = 0; i < data.length; i++) {
                upObjResource(data[i], type, params);
            }
            break;
        default:
    }
}


function upObjResource (data, type, params) {
    var str_o = 'data';
    for (var i = 0; i < params.length; i++) {
        str_o += '.' + params[i];
    }
    eval(str_o)[type] = defaultConfig[type] + eval(str_o)[type];
    return;
}

module.exports.setConfig = setConfig;
module.exports.upResource = upResource;
