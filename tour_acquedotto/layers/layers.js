var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_tracciato_acquedotto_1 = new ol.format.GeoJSON();
var features_tracciato_acquedotto_1 = format_tracciato_acquedotto_1.readFeatures(json_tracciato_acquedotto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracciato_acquedotto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracciato_acquedotto_1.addFeatures(features_tracciato_acquedotto_1);
var lyr_tracciato_acquedotto_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracciato_acquedotto_1, 
                style: style_tracciato_acquedotto_1,
                interactive: false,
                title: '<img src="styles/legend/tracciato_acquedotto_1.png" /> tracciato_acquedotto'
            });
var format_POI_acquedotto_2 = new ol.format.GeoJSON();
var features_POI_acquedotto_2 = format_POI_acquedotto_2.readFeatures(json_POI_acquedotto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_acquedotto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_acquedotto_2.addFeatures(features_POI_acquedotto_2);
var lyr_POI_acquedotto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POI_acquedotto_2, 
                style: style_POI_acquedotto_2,
                interactive: true,
                title: '<img src="styles/legend/POI_acquedotto_2.png" /> POI_acquedotto'
            });

lyr_GooglecnSatellite_0.setVisible(true);lyr_tracciato_acquedotto_1.setVisible(true);lyr_POI_acquedotto_2.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_tracciato_acquedotto_1,lyr_POI_acquedotto_2];
lyr_tracciato_acquedotto_1.set('fieldAliases', {'id': 'id', });
lyr_POI_acquedotto_2.set('fieldAliases', {'id': 'id', 'Comune': 'Comune', 'Loc': 'Loc', 'Descrizion': 'Descrizion', 'Foto': 'Foto', 'href': 'href', 'Credits': 'Credits', });
lyr_tracciato_acquedotto_1.set('fieldImages', {'id': 'Range', });
lyr_POI_acquedotto_2.set('fieldImages', {'id': 'Hidden', 'Comune': 'TextEdit', 'Loc': 'TextEdit', 'Descrizion': 'TextEdit', 'Foto': 'TextEdit', 'href': 'TextEdit', 'Credits': 'TextEdit', });
lyr_tracciato_acquedotto_1.set('fieldLabels', {'id': 'no label', });
lyr_POI_acquedotto_2.set('fieldLabels', {'Comune': 'no label', 'Loc': 'no label', 'Descrizion': 'no label', 'Foto': 'no label', 'href': 'no label', 'Credits': 'no label', });
lyr_POI_acquedotto_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});