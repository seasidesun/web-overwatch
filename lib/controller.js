'use strict';

module.exports.getMapByName = function (req, res, next) {
    var mapName = req.params.mapName;

    var mapInfo = data[mapName];

    if (!mapInfo) return res.redirect('/');

    res.render('map', {mapInfo: mapInfo});
}


var data = {
    'temple-of-anubis-thumb': {
        name: 'temple-of-anubis-thumb',
        introduce: '',
        medpack_img: ''
    }
}
