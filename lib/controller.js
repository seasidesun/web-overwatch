'use strict';

var manager = require('./manager');
var maps = require('./map_info');
var files = require('./static_file');
manager.loadResource();

module.exports.index = function (req, res, next) {
    var data = {
        files: files,
        maps_load_img: [],
    }

    for (var i in maps) {
        data.maps_load_img.push({
            name_en: maps[i].name_en,
            name_zh: maps[i].name_zh,
            load_img: maps[i].load_img,
        })
    }

    res.render('index', data);
}

module.exports.getMapByName = function (req, res, next) {
    var mapName = req.params.mapName;

    var mapInfo = maps[mapName];

    if (!mapInfo) return res.redirect('/');
    var type = mapInfo.type;
    mapInfo.typeInfo = mapType[type];

    res.render('map', {mapInfo: mapInfo});
}

var mapType = {
    'occupy': '占领: 攻击方展开战斗佔领一连串目标；防守方阻止对方，直到时间结束。',
    'convoy': '护送: 攻击方必须将指定目标运送到指定地点；而防守方必须阻止攻击方，直到时间结束。',
    'control': '控制: 双方会为了佔领指定目标而交战；率先赢得两回合胜利的团队赢得比赛。',
    'occupy-convoy': '占领/护送: 攻击方必须先佔领指定目标将它运送到指定地点；而防守方的目标是拦阻攻击方。'
}
