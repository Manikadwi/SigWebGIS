var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'shelter_type': 'shelter_type', 'religion': 'religion', 'addr:full': 'addr:full', 'school:type_idn': 'school:type_idn', 'operator:type': 'operator:type', 'ground_floor:height': 'ground_floor:height', 'evacuation_center': 'evacuation_center', 'sport': 'sport', 'leisure': 'leisure', 'cuisine': 'cuisine', 'name_1': 'name_1', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator': 'operator', 'healthcare': 'healthcare', 'craft': 'craft', 'office': 'office', 'shop': 'shop', 'tourism': 'tourism', 'amenity': 'amenity', 'historic': 'historic', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'access:roof': 'access:roof', 'name': 'name', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'shelter_type': '', 'religion': '', 'addr:full': '', 'school:type_idn': '', 'operator:type': '', 'ground_floor:height': '', 'evacuation_center': '', 'sport': '', 'leisure': '', 'cuisine': '', 'name_1': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator': '', 'healthcare': '', 'craft': '', 'office': '', 'shop': '', 'tourism': '', 'amenity': '', 'historic': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'access:roof': '', 'name': '', 'addr:street': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'shelter_type': 'no label', 'religion': 'no label', 'addr:full': 'no label', 'school:type_idn': 'no label', 'operator:type': 'no label', 'ground_floor:height': 'no label', 'evacuation_center': 'no label', 'sport': 'no label', 'leisure': 'no label', 'cuisine': 'no label', 'name_1': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'craft': 'no label', 'office': 'no label', 'shop': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'historic': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'access:roof': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});