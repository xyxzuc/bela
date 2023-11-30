var wms_layers = [];

var format_clipdasposotuplah_0 = new ol.format.GeoJSON();
var features_clipdasposotuplah_0 = format_clipdasposotuplah_0.readFeatures(json_clipdasposotuplah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipdasposotuplah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipdasposotuplah_0.addFeatures(features_clipdasposotuplah_0);
var lyr_clipdasposotuplah_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clipdasposotuplah_0, 
                style: style_clipdasposotuplah_0,
                interactive: true,
    title: 'clip das poso tuplah<br />\
    <img src="styles/legend/clipdasposotuplah_0_0.png" /> Belukar<br />\
    <img src="styles/legend/clipdasposotuplah_0_1.png" /> Belukar Rawa<br />\
    <img src="styles/legend/clipdasposotuplah_0_2.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/clipdasposotuplah_0_3.png" /> Hutan Lahan Kering Sekunder<br />\
    <img src="styles/legend/clipdasposotuplah_0_4.png" /> Pemukiman<br />\
    <img src="styles/legend/clipdasposotuplah_0_5.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/clipdasposotuplah_0_6.png" /> Pertanian Lahan Kering Campur<br />\
    <img src="styles/legend/clipdasposotuplah_0_7.png" /> Savana / Padang rumput<br />\
    <img src="styles/legend/clipdasposotuplah_0_8.png" /> Sawah<br />\
    <img src="styles/legend/clipdasposotuplah_0_9.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/clipdasposotuplah_0_10.png" /> Transmigrasi<br />\
    <img src="styles/legend/clipdasposotuplah_0_11.png" /> <br />'
        });

lyr_clipdasposotuplah_0.setVisible(true);
var layersList = [lyr_clipdasposotuplah_0];
lyr_clipdasposotuplah_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', 'Provinsi': 'Provinsi', 'PL_19_R': 'PL_19_R', 'Legenda': 'Legenda', });
lyr_clipdasposotuplah_0.set('fieldImages', {'OBJECTID_1': 'Range', 'NAME': 'TextEdit', 'Provinsi': 'TextEdit', 'PL_19_R': 'Range', 'Legenda': 'TextEdit', });
lyr_clipdasposotuplah_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'NAME': 'no label', 'Provinsi': 'no label', 'PL_19_R': 'no label', 'Legenda': 'no label', });
lyr_clipdasposotuplah_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});