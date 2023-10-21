// Basemap
var url_ww =
  "http://localhost:8080/geoserver";
var url_wms =
"http://localhost:8080/geoserver/wms";
var workspace_name = "gis_group4";
var bingKey =
  "Aq-me6wppzOBwP-51YRnXc66qxrVmi9CA6pFUolMfujT0Hj9SMpv4B2FOSS_3ae7";

// BaseMaps
var bingRoads = new ol.layer.Tile({
  title: "Bing Maps—Roads",
  type: "base",
  visible: true,
  source: new ol.source.BingMaps({
    key: bingKey,
    imagerySet: "Road",
  }),
});
var bingAerial = new ol.layer.Tile({
  title: "Bing Maps—Aerial",
  type: "base",
  visible: true,
  source: new ol.source.BingMaps({
    key: bingKey,
    imagerySet: "Aerial",
  }),
});

var bingAerialWithLabels = new ol.layer.Tile({
  title: "Bing Maps—Aerial with Labels",
  type: "base",
  visible: true,
  source: new ol.source.BingMaps({
    key: bingKey,
    imagerySet: "AerialWithLabels",
  }),
});
var stamenWatercolor = new ol.layer.Tile({
  title: "Stamen Watercolor",
  type: "base",
  visible: true,
  source: new ol.source.Stamen({
    layer: "watercolor",
  }),
});
var stamenToner = new ol.layer.Tile({
  title: "Stamen Toner",
  type: "base",
  visible: true,
  source: new ol.source.Stamen({
    layer: "toner",
  }),
});

var osm = new ol.layer.Tile({
  title: "OpenStreetMap",
  type: "base",
  visibility: true,
  source: new ol.source.OSM(),
});

//  Overlay Layers

var aspect = new ol.layer.Image({
  title: "Aspect",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":aspect" },
   
  }),
  crossOrigin: "Anonymous",
});

var dtm = new ol.layer.Image({
  title: "Digital Terrain Model",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":dtm" }, 
  }),
  crossOrigin: "Anonymous",
});

var slope = new ol.layer.Image({
  title: "Slope",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":slope" }, 
  }),
  crossOrigin: "Anonymous",
});

var sus = new ol.layer.Image({
  title: "Susceptibility Map",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":LandslideSusceptibilityMap" },
  }),
  crossOrigin: "Anonymous",
});
var sus_reclass = new ol.layer.Image({
  title: "Susceptibility Map Reclassified",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":LandslideSusceptibilityMap_reclass" },
  }),
  crossOrigin: "Anonymous",
});
var population = new ol.layer.Image({
  title: "Population ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":population" },
  }),
  crossOrigin: "Anonymous",
});
var dusaf = new ol.layer.Image({
  title: "Land Use & Land Cover ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":dusaf" },
  }),
  crossOrigin: "Anonymous",
});
var ndvi = new ol.layer.Image({
  title: "NDVI ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":ndvi" },
  }),
  crossOrigin: "Anonymous",
});
var roads = new ol.layer.Image({
  title: "Roads Buffer ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":roads" },
  }),
  crossOrigin: "Anonymous",
});
var rivers = new ol.layer.Image({
  title: "Rivers Buffer ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":rivers" },
  }),
  crossOrigin: "Anonymous",
});
var faults = new ol.layer.Image({
  title: "Faults Buffer ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":faults" },
  }),
  crossOrigin: "Anonymous",
});
var watershed = new ol.layer.Image({
  title: "Study area boundaries ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":study_area_boundaries" },
  }),
  crossOrigin: "Anonymous",
});
var NLZ = new ol.layer.Image({
  title: "NLZ ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":NLZ" },
  }),
  crossOrigin: "Anonymous",
});
var trainingpoints = new ol.layer.Image({
  title: "Training Points Sampled ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":trainingPointsSampled" },
  }),
  crossOrigin: "Anonymous",
});
var testingpoints = new ol.layer.Image({
  title: "Testing Points Sampled ",
  source: new ol.source.ImageWMS({
    url: url_wms,
    params: { LAYERS: workspace_name + ":testingPointsSampled" },
  }),
  crossOrigin: "Anonymous",
});


var map = new ol.Map({
  target: document.getElementById("map"),
  layers: [
    new ol.layer.Group({
      title: "Base Maps",
      layers: [osm, bingRoads, stamenToner, stamenWatercolor,bingAerial],
    }),
    new ol.layer.Group({
      title: "Overlay Layers",
      layers: [
        
        population,
        sus_reclass,
        sus,
        testingpoints,
        trainingpoints,
        NLZ,
        ndvi,
        roads,
        faults,
        rivers,
        aspect,
        slope,
        dusaf,
        dtm,
        watershed,
      ],
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([9.6326, 45.7584]),
    zoom: 11,
  }) /*new ol.View({ 
		center: [0, 0], 
		zoom: 2
	})
	*/,
  controls: ol.control.defaults().extend([
    new ol.control.ScaleLine(),
    new ol.control.FullScreen(),
    new ol.control.OverviewMap({ layers: [osm] }),
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: "EPSG:32632",
    }),
  ]),
});
//Add Layer Switcher
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);

//Add Popup
var elementPopup = document.getElementById("popup");
var popup = new ol.Overlay({
  element: elementPopup,
});
map.addOverlay(popup);

