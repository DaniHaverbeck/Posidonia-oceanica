var wms_layers = [];

var lyr_Nar_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Nar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Nar_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-584820.395787, 4107815.644419, 3792977.897888, 5433348.477607]
                            })
                        });
var lyr_Ho_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ho",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ho_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-584820.395787, 4107815.644419, 3792977.897888, 5433348.477607]
                            })
                        });
var lyr_Fis_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fis",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Fis_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-584820.395787, 4107815.644419, 3792977.897888, 5433348.477607]
                            })
                        });
var lyr_R_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "R",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/R_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-584820.395787, 4107815.644419, 3792977.897888, 5433348.477607]
                            })
                        });
var format_Land_4 = new ol.format.GeoJSON();
var features_Land_4 = format_Land_4.readFeatures(json_Land_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Land_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Land_4.addFeatures(features_Land_4);
var lyr_Land_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Land_4, 
                style: style_Land_4,
                interactive: false,
                title: '<img src="styles/legend/Land_4.png" /> Land'
            });
var format_Populations_Joint_Depths_5 = new ol.format.GeoJSON();
var features_Populations_Joint_Depths_5 = format_Populations_Joint_Depths_5.readFeatures(json_Populations_Joint_Depths_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Populations_Joint_Depths_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populations_Joint_Depths_5.addFeatures(features_Populations_Joint_Depths_5);
var lyr_Populations_Joint_Depths_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Populations_Joint_Depths_5, 
                style: style_Populations_Joint_Depths_5,
                interactive: true,
                title: '<img src="styles/legend/Populations_Joint_Depths_5.png" /> Populations_Joint_Depths'
            });

lyr_Nar_0.setVisible(true);lyr_Ho_1.setVisible(true);lyr_Fis_2.setVisible(true);lyr_R_3.setVisible(true);lyr_Land_4.setVisible(true);lyr_Populations_Joint_Depths_5.setVisible(true);
var layersList = [lyr_Nar_0,lyr_Ho_1,lyr_Fis_2,lyr_R_3,lyr_Land_4,lyr_Populations_Joint_Depths_5];
lyr_Land_4.set('fieldAliases', {'fid': 'fid', 'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'SOVEREIGN': 'SOVEREIGN', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', });
lyr_Populations_Joint_Depths_5.set('fieldAliases', {'Population': 'Population', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'R': 'R', 'Nar': 'Nar', 'Ho': 'Ho', 'FIS': 'FIS', 'Reference': 'Reference', });
lyr_Land_4.set('fieldImages', {'fid': 'TextEdit', 'FIPS_CNTRY': 'TextEdit', 'GMI_CNTRY': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'SOVEREIGN': 'TextEdit', 'POP_CNTRY': 'TextEdit', 'SQKM_CNTRY': 'TextEdit', 'SQMI_CNTRY': 'TextEdit', 'CURR_TYPE': 'TextEdit', 'CURR_CODE': 'TextEdit', 'LANDLOCKED': 'TextEdit', 'COLOR_MAP': 'TextEdit', });
lyr_Populations_Joint_Depths_5.set('fieldImages', {'Population': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'R': 'TextEdit', 'Nar': 'TextEdit', 'Ho': 'TextEdit', 'FIS': 'TextEdit', 'Reference': 'TextEdit', });
lyr_Land_4.set('fieldLabels', {'fid': 'no label', 'FIPS_CNTRY': 'no label', 'GMI_CNTRY': 'no label', 'CNTRY_NAME': 'no label', 'SOVEREIGN': 'no label', 'POP_CNTRY': 'no label', 'SQKM_CNTRY': 'no label', 'SQMI_CNTRY': 'no label', 'CURR_TYPE': 'no label', 'CURR_CODE': 'no label', 'LANDLOCKED': 'no label', 'COLOR_MAP': 'no label', });
lyr_Populations_Joint_Depths_5.set('fieldLabels', {'Population': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'R': 'inline label', 'Nar': 'inline label', 'Ho': 'inline label', 'FIS': 'inline label', 'Reference': 'inline label', });
lyr_Populations_Joint_Depths_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});