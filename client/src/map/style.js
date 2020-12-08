export const MAP_STYLE = {
    "version": 8,
    "name": "Streets",
    "metadata": {
        "mapbox:type": "default",
        "mapbox:origin": "streets-v11",
        "mapbox:sdk-support": {
            "android": "9.3.0",
            "ios": "5.10.0",
            "js": "1.10.0"
        },
        "mapbox:autocomposite": true,
        "mapbox:groups": {
            "Transit, transit-labels": {
                "name": "Transit, transit-labels",
                "collapsed": false
            },
            "Administrative boundaries, admin": {
                "name": "Administrative boundaries, admin",
                "collapsed": true
            },
            "Land & water, built": {
                "name": "Land & water, built",
                "collapsed": false
            },
            "Transit, bridges": { "name": "Transit, bridges", "collapsed": true },
            "Buildings, building-labels": {
                "name": "Buildings, building-labels",
                "collapsed": true
            },
            "Transit, surface": {
                "name": "Transit, surface",
                "collapsed": false
            },
            "Land & water, land": {
                "name": "Land & water, land",
                "collapsed": false
            },
            "Road network, bridges": {
                "name": "Road network, bridges",
                "collapsed": true
            },
            "Road network, tunnels": {
                "name": "Road network, tunnels",
                "collapsed": false
            },
            "Road network, road-labels": {
                "name": "Road network, road-labels",
                "collapsed": true
            },
            "Buildings, built": {
                "name": "Buildings, built",
                "collapsed": false
            },
            "Natural features, natural-labels": {
                "name": "Natural features, natural-labels",
                "collapsed": true
            },
            "Road network, surface": {
                "name": "Road network, surface",
                "collapsed": false
            },
            "Walking, cycling, etc., barriers-bridges": {
                "name": "Walking, cycling, etc., barriers-bridges",
                "collapsed": true
            },
            "Place labels, place-labels": {
                "name": "Place labels, place-labels",
                "collapsed": false
            },
            "Transit, ferries": {
                "name": "Transit, ferries",
                "collapsed": false
            },
            "Transit, elevated": {
                "name": "Transit, elevated",
                "collapsed": true
            },
            "Point of interest labels, poi-labels": {
                "name": "Point of interest labels, poi-labels",
                "collapsed": false
            },
            "Walking, cycling, etc., tunnels": {
                "name": "Walking, cycling, etc., tunnels",
                "collapsed": false
            },
            "Terrain, land": { "name": "Terrain, land", "collapsed": false },
            "Road network, tunnels-case": {
                "name": "Road network, tunnels-case",
                "collapsed": false
            },
            "Walking, cycling, etc., walking-cycling-labels": {
                "name": "Walking, cycling, etc., walking-cycling-labels",
                "collapsed": true
            },
            "Walking, cycling, etc., surface": {
                "name": "Walking, cycling, etc., surface",
                "collapsed": false
            },
            "Transit, built": { "name": "Transit, built", "collapsed": false },
            "Road network, surface-icons": {
                "name": "Road network, surface-icons",
                "collapsed": false
            },
            "Land & water, water": {
                "name": "Land & water, water",
                "collapsed": false
            },
            "Transit, ferry-aerialway-labels": {
                "name": "Transit, ferry-aerialway-labels",
                "collapsed": true
            }
        },
        "mapbox:trackposition": false,
        "mapbox:decompiler": {
            "id": "ckie54mw43bi619mkp5ljhgae",
            "componentVersion": "7.1.0",
            "strata": [{
                "id": "streets-v11",
                "order": [
                    ["land-and-water", "land"],
                    ["land-and-water", "water"],
                    ["terrain", "land"],
                    ["land-and-water", "built"],
                    ["transit", "built"],
                    ["buildings", "built"],
                    ["road-network", "tunnels-case"],
                    ["walking-cycling", "tunnels"],
                    ["road-network", "tunnels"],
                    ["terrain", "surface"],
                    ["transit", "ferries"],
                    ["walking-cycling", "surface"],
                    ["road-network", "surface"],
                    ["transit", "surface"],
                    ["road-network", "surface-icons"],
                    ["walking-cycling", "barriers-bridges"],
                    ["road-network", "bridges"],
                    ["transit", "bridges"],
                    ["road-network", "traffic-and-closures"],
                    ["buildings", "extruded"],
                    ["transit", "elevated"],
                    ["admin-boundaries", "admin"],
                    ["terrain", "terrain-labels"],
                    ["buildings", "building-labels"],
                    ["road-network", "road-labels"],
                    ["walking-cycling", "walking-cycling-labels"],
                    ["transit", "ferry-aerialway-labels"],
                    ["natural-features", "natural-labels"],
                    ["point-of-interest-labels", "poi-labels"],
                    ["transit", "transit-labels"],
                    ["place-labels", "place-labels"]
                ]
            }],
            "components": {
                "road-network": "7.1.0",
                "natural-features": "7.1.0",
                "place-labels": "7.1.0",
                "admin-boundaries": "7.1.0",
                "point-of-interest-labels": "7.1.0",
                "walking-cycling": "7.1.0",
                "transit": "7.1.0",
                "terrain": "7.1.0",
                "land-and-water": "7.1.0",
                "buildings": "7.1.0"
            },
            "propConfig": {
                "road-network": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-road": "hsl(0, 0%, 100%)",
                    "color-road-outline": "hsl(230, 26%, 88%)",
                    "color-motorway-trunk": "hsl(36, 87%, 68%)",
                    "color-road-label": "#000000",
                    "turningCircles": true
                },
                "natural-features": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-water": "hsl(196, 80%, 70%)",
                    "color-poi": "hsl(26, 25%, 32%)"
                },
                "place-labels": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-place-label": "hsl(230, 29%, 25%)",
                    "countries": true
                },
                "admin-boundaries": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-place-label": "hsl(230, 29%, 25%)"
                },
                "point-of-interest-labels": {
                    "educationDensity": 2,
                    "color-poi": "hsl(26, 25%, 32%)",
                    "commercialServicesDensity": 0,
                    "generalDensity": 0,
                    "color-hospital": "hsl(340, 75%, 52%)",
                    "sportAndLeisureDensity": 0,
                    "artsAndEntertainmentDensity": 0,
                    "parkLikeDensity": 3,
                    "density": 3,
                    "foodAndDrinkDensity": 0,
                    "historicDensity": 0,
                    "placeLikeDensity": 0,
                    "lodgingDensity": 0,
                    "color-greenspace": "hsl(99, 57%, 75%)",
                    "industrialDensity": 3,
                    "storeLikeDensity": 0,
                    "landmarkDensity": 3,
                    "motoristDensity": 0,
                    "color-greenspace-label": "hsl(105, 30%, 33%)",
                    "buildingDensity": 0,
                    "controlDensityByClass": true,
                    "foodAndDrinkStoresDensity": 0,
                    "color-base": "hsl(35, 14%, 94%)",
                    "labelStyle": "Text and icon",
                    "color-school": "hsl(50, 100%, 40%)",
                    "publicFacilitiesDensity": 0,
                    "visitorAmenitiesDensity": 4
                },
                "walking-cycling": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-greenspace": "hsl(99, 57%, 75%)",
                    "color-greenspace-label": "hsl(105, 30%, 33%)",
                    "color-road": "hsl(0, 0%, 100%)",
                    "color-road-outline": "hsl(230, 26%, 88%)",
                    "color-road-label": "#000000"
                },
                "transit": {
                    "color-airport": "hsl(230, 48%, 44%)",
                    "matchLabelAndIcon": true,
                    "aeroways": false,
                    "color-transit": "hsl(230, 48%, 44%)",
                    "airportLabels": false,
                    "aerialways": false,
                    "color-road": "hsl(0, 0%, 100%)",
                    "color-water": "hsl(196, 80%, 70%)",
                    "color-road-label": "#000000",
                    "transitLabels": false,
                    "railwayStyle": false,
                    "railways": false,
                    "ferries": false,
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-road-outline": "hsl(230, 26%, 88%)"
                },
                "terrain": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-greenspace": "hsl(99, 57%, 75%)",
                    "color-greenspace-label": "hsl(105, 30%, 33%)"
                },
                "land-and-water": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-water": "hsl(196, 80%, 70%)",
                    "color-greenspace": "hsl(99, 57%, 75%)",
                    "color-hospital": "hsl(340, 75%, 52%)",
                    "color-school": "hsl(50, 100%, 40%)",
                    "color-airport": "hsl(230, 48%, 44%)",
                    "transitionLandOnZoom": true
                },
                "buildings": {
                    "color-base": "hsl(35, 14%, 94%)",
                    "color-underground": "hsl(260, 67%, 80%)",
                    "underground": true,
                    "haloWidth": 1
                }
            }
        },
        "mapbox:uiParadigm": "components"
    },
    "center": [-71.10437941852683, 42.361558026467264],
    "zoom": 13.8,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/nsalinas/ckie54mw43bi619mkp5ljhgae/9khk6ls9ql1eij5hu4k0j64pa",
    "glyphs": "mapbox://fonts/nsalinas/{fontstack}/{range}.pbf",
    "layers": [{
            "id": "land",
            "type": "background",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "layout": {},
            "paint": {
                "background-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    11,
                    "hsl(35, 32%, 91%)",
                    13,
                    "hsl(35, 12%, 89%)"
                ]
            }
        },
        {
            "id": "landcover",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 7,
            "layout": {},
            "paint": {
                "fill-color": [
                    "match", ["get", "class"],
                    "snow",
                    "hsl(35, 14%, 100%)",
                    "hsl(81, 38%, 81%)"
                ],
                "fill-opacity": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    2,
                    0.3,
                    7,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "national-park",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse_overlay",
            "minzoom": 5,
            "filter": ["==", ["get", "class"], "national_park"],
            "layout": {},
            "paint": {
                "fill-color": "hsl(99, 57%, 75%)",
                "fill-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6,
                    0.5,
                    10,
                    0.5
                ]
            }
        },
        {
            "id": "landuse",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 5,
            "filter": [
                "match", ["get", "class"],
                ["park", "airport", "glacier", "pitch", "sand", "facility"],
                true,
                "cemetery",
                true,
                "school",
                true,
                "hospital",
                true,
                false
            ],
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15, [
                        "match", ["get", "class"],
                        "park",
                        "hsl(99, 57%, 75%)",
                        "airport",
                        "hsl(230, 15%, 91%)",
                        "cemetery",
                        "hsl(81, 28%, 81%)",
                        "glacier",
                        "hsl(196, 70%, 90%)",
                        "hospital",
                        "hsl(340, 37%, 87%)",
                        "pitch",
                        "hsl(99, 58%, 70%)",
                        "sand",
                        "hsl(56, 47%, 87%)",
                        "school",
                        "hsl(50, 48%, 81%)",
                        "hsl(35, 16%, 85%)"
                    ],
                    16, [
                        "match", ["get", "class"],
                        "park",
                        "hsl(99, 57%, 75%)",
                        "airport",
                        "hsl(230, 29%, 89%)",
                        "cemetery",
                        "hsl(81, 28%, 81%)",
                        "glacier",
                        "hsl(196, 70%, 90%)",
                        "hospital",
                        "hsl(340, 63%, 89%)",
                        "pitch",
                        "hsl(99, 58%, 70%)",
                        "sand",
                        "hsl(56, 47%, 87%)",
                        "school",
                        "hsl(50, 48%, 81%)",
                        "hsl(35, 16%, 85%)"
                    ]
                ],
                "fill-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    5,
                    0,
                    6, ["match", ["get", "class"], "glacier", 0.5, 1]
                ]
            }
        },
        {
            "id": "pitch-outline",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, land"
            },
            "source": "composite",
            "source-layer": "landuse",
            "minzoom": 15,
            "filter": ["==", ["get", "class"], "pitch"],
            "layout": {},
            "paint": { "line-color": "hsl(81, 33%, 84%)" }
        },
        {
            "id": "waterway-shadow",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(215, 84%, 69%)",
                "line-width": [
                    "interpolate", ["exponential", 1.3],
                    ["zoom"],
                    9, ["match", ["get", "class"],
                        ["canal", "river"], 0.1, 0
                    ],
                    20, ["match", ["get", "class"],
                        ["canal", "river"], 8, 3
                    ]
                ],
                "line-translate": [
                    "interpolate", ["exponential", 1.2],
                    ["zoom"],
                    7, ["literal", [0, 0]],
                    16, ["literal", [-1, -1]]
                ],
                "line-translate-anchor": "viewport",
                "line-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water-shadow",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": {
                "fill-color": "hsl(215, 84%, 69%)",
                "fill-translate": [
                    "interpolate", ["exponential", 1.2],
                    ["zoom"],
                    7, ["literal", [0, 0]],
                    16, ["literal", [-1, -1]]
                ],
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "waterway",
            "minzoom": 8,
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 11, "round"],
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(196, 80%, 70%)",
                "line-width": [
                    "interpolate", ["exponential", 1.3],
                    ["zoom"],
                    9, ["match", ["get", "class"],
                        ["canal", "river"], 0.1, 0
                    ],
                    20, ["match", ["get", "class"],
                        ["canal", "river"], 8, 3
                    ]
                ],
                "line-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    8,
                    0,
                    8.5,
                    1
                ]
            }
        },
        {
            "id": "water",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, water"
            },
            "source": "composite",
            "source-layer": "water",
            "layout": {},
            "paint": { "fill-color": "hsl(196, 80%, 70%)" }
        },
        {
            "id": "hillshade",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "terrain",
                "mapbox:group": "Terrain, land"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 16,
            "layout": {},
            "paint": {
                "fill-color": [
                    "match", ["get", "class"],
                    "shadow",
                    "hsl(56, 36%, 21%)",
                    "hsl(35, 14%, 100%)"
                ],
                "fill-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    14, [
                        "match", ["get", "level"],
                        [67, 56],
                        0.06, [89, 78],
                        0.05,
                        0.12
                    ],
                    16,
                    0
                ],
                "fill-antialias": false
            }
        },
        {
            "id": "land-structure-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, built"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["geometry-type"], "Polygon"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": {},
            "paint": { "fill-color": "hsl(35, 12%, 89%)" }
        },
        {
            "id": "land-structure-line",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "land-and-water",
                "mapbox:group": "Land & water, built"
            },
            "source": "composite",
            "source-layer": "structure",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["geometry-type"], "LineString"],
                ["==", ["get", "class"], "land"]
            ],
            "layout": { "line-cap": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.99],
                    ["zoom"],
                    14,
                    0.75,
                    20,
                    40
                ],
                "line-color": "hsl(35, 12%, 89%)"
            }
        },
        {
            "id": "building-outline",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all", ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "line-color": "hsl(35, 8%, 80%)",
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    0.75,
                    20,
                    3
                ],
                "line-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ]
            }
        },
        {
            "id": "building",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all", ["!=", ["get", "type"], "building:part"],
                ["==", ["get", "underground"], "false"]
            ],
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15,
                    "hsl(35, 11%, 86%)",
                    16,
                    "hsl(35, 7%, 85%)"
                ],
                "fill-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    1
                ],
                "fill-outline-color": "hsl(35, 8%, 80%)"
            }
        },
        {
            "id": "building-underground",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, built"
            },
            "source": "composite",
            "source-layer": "building",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["get", "underground"], "true"],
                ["==", ["geometry-type"], "Polygon"]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(260, 67%, 80%)",
                "fill-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15,
                    0,
                    16,
                    0.5
                ]
            }
        },
        {
            "id": "tunnel-street-minor-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14, [
                        "match", ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "tunnel-street-minor-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14, [
                        "match", ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 19%, 75%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-primary-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "match", ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10, ["match", ["get", "class"], "primary", 1, 0.75],
                    18,
                    2
                ],
                "line-color": "hsl(230, 19%, 75%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5, ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18, ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-major-link-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-motorway-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-dasharray": [3, 3]
            }
        },
        {
            "id": "tunnel-construction",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels-case"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "construction"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15, ["literal", [0.3, 0.6]],
                    16, ["literal", [0.2, 0.3]],
                    17, ["literal", [0.2, 0.25]],
                    18, ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "path"],
                ["!=", ["get", "type"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(35, 26%, 95%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.75, 1]],
                    16, ["literal", [1, 0.75]],
                    17, ["literal", [1, 0.5]]
                ]
            }
        },
        {
            "id": "tunnel-steps",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "type"], "steps"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(35, 26%, 95%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.75, 1]],
                    16, ["literal", [1, 0.75]],
                    17, ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "tunnel-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.5, 0.4]],
                    16, ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "tunnel-major-link",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway_link",
                    "hsl(26, 100%, 78%)",
                    "hsl(46, 77%, 78%)"
                ]
            }
        },
        {
            "id": "tunnel-street-minor",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14, [
                        "match", ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "street_limited",
                    "hsl(35, 16%, 93%)",
                    "hsl(0, 0%, 100%)"
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "tunnel-primary-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "match", ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5, ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18, ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "tunnel-oneway-arrow-blue",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["==", ["get", "oneway"], "true"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "street",
                            "street_limited",
                            "tertiary"
                        ],
                        true,
                        false
                    ],
                    16, [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step", ["zoom"],
                    "oneway-small",
                    17, [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        "oneway-large",
                        "oneway-small"
                    ],
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "tunnel-motorway-trunk",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway",
                    "hsl(26, 100%, 78%)",
                    "hsl(46, 77%, 78%)"
                ]
            }
        },
        {
            "id": "tunnel-oneway-arrow-white",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, tunnels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all", ["==", ["get", "structure"], "tunnel"],
                [
                    "match", ["get", "class"],
                    ["motorway", "motorway_link", "trunk", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["get", "oneway"], "true"]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step", ["zoom"],
                    "oneway-white-small",
                    17,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200
            },
            "paint": {}
        },
        {
            "id": "road-path-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all", ["==", ["get", "class"], "path"],
                [
                    "step", ["zoom"],
                    [
                        "!", [
                            "match", ["get", "type"],
                            ["steps", "sidewalk", "crossing"],
                            true,
                            false
                        ]
                    ],
                    16, ["!=", ["get", "type"], "steps"]
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    2,
                    18,
                    7
                ],
                "line-color": "hsl(230, 17%, 82%)"
            }
        },
        {
            "id": "road-steps-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "type"], "steps"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    2,
                    17,
                    4.6,
                    18,
                    7
                ],
                "line-opacity": 0.75,
                "line-color": "hsl(230, 17%, 82%)"
            }
        },
        {
            "id": "road-pedestrian-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "class"], "pedestrian"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    14.5
                ],
                "line-color": "hsl(230, 26%, 88%)"
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all", ["==", ["get", "class"], "path"],
                [
                    "step", ["zoom"],
                    [
                        "!", [
                            "match", ["get", "type"],
                            ["steps", "sidewalk", "crossing"],
                            true,
                            false
                        ]
                    ],
                    16, ["!=", ["get", "type"], "steps"]
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    13,
                    0.5,
                    14,
                    1,
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [4, 0.3]],
                    15, ["literal", [1.75, 0.3]],
                    16, ["literal", [1, 0.3]],
                    17, ["literal", [1, 0.25]]
                ]
            }
        },
        {
            "id": "road-steps",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "type"], "steps"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.75, 1]],
                    16, ["literal", [1, 0.75]],
                    17, ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all", ["==", ["get", "class"], "pedestrian"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": ["step", ["zoom"], "miter", 14, "round"] },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.5, 0.4]],
                    16, ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "road-pedestrian-polygon-fill",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all", ["==", ["geometry-type"], "Polygon"],
                [
                    "match", ["get", "class"],
                    ["path", "pedestrian"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["case", ["has", "layer"],
                    [">=", ["get", "layer"], 0], true
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    16,
                    "hsl(230, 16%, 94%)",
                    16.25,
                    "hsl(230, 52%, 98%)"
                ],
                "fill-outline-color": "hsl(230, 26%, 88%)"
            }
        },
        {
            "id": "road-pedestrian-polygon-pattern",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all", ["==", ["geometry-type"], "Polygon"],
                [
                    "match", ["get", "class"],
                    ["path", "pedestrian"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["case", ["has", "layer"],
                    [">=", ["get", "layer"], 0], true
                ]
            ],
            "layout": {},
            "paint": {
                "fill-pattern": "pedestrian-polygon",
                "fill-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    16,
                    0,
                    16.25,
                    1
                ]
            }
        },
        {
            "id": "golf-hole-line",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": ["==", ["get", "class"], "golf"],
            "layout": {},
            "paint": { "line-color": "hsl(99, 27%, 69%)" }
        },
        {
            "id": "turning-feature-outline",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["geometry-type"], "Point"],
                [
                    "match", ["get", "class"],
                    ["turning_circle", "turning_loop"],
                    true,
                    false
                ]
            ],
            "layout": {
                "icon-image": "turning-circle-outline",
                "icon-size": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.122,
                    18,
                    0.969,
                    20,
                    1
                ],
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "icon-padding": 0,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "road-minor-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", [
                    "step", ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14, [
                        "match", ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14, ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "road-minor-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", [
                    "step", ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14, [
                        "match", ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14, ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-street-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "road-street-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["secondary", "tertiary"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10,
                    0.75,
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.1,
                    18,
                    26
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1]
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 7,
            "filter": [
                "all", ["==", ["get", "class"], "primary"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1]
            }
        },
        {
            "id": "road-major-link-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-opacity": ["step", ["zoom"], 0, 11, 1]
            }
        },
        {
            "id": "road-motorway-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "filter": [
                "all", ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-opacity": [
                    "step", ["zoom"],
                    ["match", ["get", "class"], "motorway", 1, 0],
                    6,
                    1
                ]
            }
        },
        {
            "id": "road-construction",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "class"], "construction"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15, ["literal", [0.3, 0.6]],
                    16, ["literal", [0.2, 0.3]],
                    17, ["literal", [0.2, 0.25]],
                    18, ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "road-major-link",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 13, "round"],
                "line-join": ["step", ["zoom"], "miter", 13, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway_link",
                    "hsl(26, 100%, 68%)",
                    "hsl(46, 87%, 68%)"
                ]
            }
        },
        {
            "id": "road-polygon",
            "type": "fill",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "all", ["==", ["geometry-type"], "Polygon"],
                [
                    "match", ["get", "class"],
                    [
                        "primary",
                        "secondary",
                        "tertiary",
                        "primary_link",
                        "secondary_link",
                        "tertiary_link",
                        "trunk",
                        "trunk_link",
                        "street",
                        "street_limited",
                        "track",
                        "service"
                    ],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "hsl(0, 0%, 100%)",
                "fill-outline-color": "hsl(230, 26%, 88%)"
            }
        },
        {
            "id": "road-minor",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", [
                    "step", ["zoom"],
                    ["==", ["get", "class"], "track"],
                    14, [
                        "match", ["get", "class"],
                        ["track", "secondary_link", "tertiary_link", "service"],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14, ["match", ["get", "class"], "track", 1, 0.5],
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["street", "street_limited", "primary_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "street_limited",
                    "hsl(35, 16%, 93%)",
                    "hsl(0, 0%, 100%)"
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 8,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["secondary", "tertiary"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.1,
                    18,
                    26
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "filter": [
                "all", ["==", ["get", "class"], "primary"],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "road-oneway-arrow-blue",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["get", "oneway"], "true"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    16, [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step", ["zoom"],
                    "oneway-small",
                    17, [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        "oneway-large",
                        "oneway-small"
                    ],
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "road-motorway-trunk",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface"
            },
            "source": "composite",
            "source-layer": "road",
            "filter": [
                "all", ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 13, "round"],
                "line-join": ["step", ["zoom"], "miter", 13, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        "motorway",
                        "hsl(26, 87%, 62%)",
                        "hsl(0, 0%, 100%)"
                    ],
                    6, [
                        "match", ["get", "class"],
                        "motorway",
                        "hsl(26, 87%, 62%)",
                        "hsl(46, 80%, 60%)"
                    ],
                    9, [
                        "match", ["get", "class"],
                        "motorway",
                        "hsl(26, 100%, 68%)",
                        "hsl(46, 87%, 68%)"
                    ]
                ]
            }
        },
        {
            "id": "level-crossing",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface-icons"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": ["==", ["get", "class"], "level_crossing"],
            "layout": {
                "icon-image": "level-crossing",
                "icon-allow-overlap": true
            },
            "paint": {}
        },
        {
            "id": "road-oneway-arrow-white",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface-icons"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all", ["==", ["get", "oneway"], "true"],
                [
                    "match", ["get", "class"],
                    ["motorway", "trunk", "motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["match", ["get", "structure"],
                    ["none", "ford"], true, false
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step", ["zoom"],
                    "oneway-white-small",
                    17,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200
            },
            "paint": {}
        },
        {
            "id": "turning-feature",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, surface-icons"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["geometry-type"], "Point"],
                [
                    "match", ["get", "class"],
                    ["turning_circle", "turning_loop"],
                    true,
                    false
                ]
            ],
            "layout": {
                "icon-image": "turning-circle",
                "icon-size": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.095,
                    18,
                    1
                ],
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
                "icon-padding": 0,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "bridge-path-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "path"],
                [
                    "step", ["zoom"],
                    [
                        "!", [
                            "match", ["get", "type"],
                            ["steps", "sidewalk", "crossing"],
                            true,
                            false
                        ]
                    ],
                    16, ["!=", ["get", "type"], "steps"]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    2,
                    18,
                    7
                ],
                "line-color": "hsl(230, 17%, 82%)"
            }
        },
        {
            "id": "bridge-steps-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "type"], "steps"],
                ["==", ["get", "structure"], "bridge"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    2,
                    17,
                    4.6,
                    18,
                    7
                ],
                "line-opacity": 0.75,
                "line-color": "hsl(230, 17%, 82%)"
            }
        },
        {
            "id": "bridge-pedestrian-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    14.5
                ],
                "line-color": "hsl(230, 26%, 88%)"
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "path"],
                ["==", ["geometry-type"], "LineString"],
                ["!=", ["get", "type"], "steps"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    18,
                    4
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [4, 0.3]],
                    15, ["literal", [1.75, 0.3]],
                    16, ["literal", [1, 0.3]],
                    17, ["literal", [1, 0.25]]
                ]
            }
        },
        {
            "id": "bridge-steps",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "type"], "steps"],
                ["==", ["get", "structure"], "bridge"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    15,
                    1,
                    16,
                    1.6,
                    18,
                    6
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.75, 1]],
                    16, ["literal", [1, 0.75]],
                    17, ["literal", [0.3, 0.3]]
                ]
            }
        },
        {
            "id": "bridge-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., barriers-bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "pedestrian"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    0.5,
                    18,
                    12
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [1, 0]],
                    15, ["literal", [1.5, 0.4]],
                    16, ["literal", [1, 0.2]]
                ]
            }
        },
        {
            "id": "bridge-street-minor-low",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14, [
                        "match", ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": "hsl(0, 0%, 100%)",
                "line-opacity": ["step", ["zoom"], 1, 14, 0]
            }
        },
        {
            "id": "bridge-street-minor-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14, [
                        "match", ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "bridge-primary-secondary-tertiary-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "match", ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10, ["match", ["get", "class"], "primary", 1, 0.75],
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5, ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18, ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-opacity": ["step", ["zoom"], 0, 10, 1]
            }
        },
        {
            "id": "bridge-major-link-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-construction",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "class"], "construction"],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": "hsl(230, 26%, 88%)",
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [0.4, 0.8]],
                    15, ["literal", [0.3, 0.6]],
                    16, ["literal", [0.2, 0.3]],
                    17, ["literal", [0.2, 0.25]],
                    18, ["literal", [0.15, 0.15]]
                ]
            }
        },
        {
            "id": "bridge-major-link",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway_link",
                    "hsl(26, 100%, 68%)",
                    "hsl(46, 87%, 68%)"
                ]
            }
        },
        {
            "id": "bridge-street-minor",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link", "track"],
                        true,
                        false
                    ],
                    14, [
                        "match", ["get", "class"],
                        [
                            "street",
                            "street_limited",
                            "track",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service"
                        ],
                        true,
                        false
                    ]
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        2,
                        "track",
                        1,
                        0.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        ["street", "street_limited", "primary_link"],
                        18,
                        12
                    ]
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "street_limited",
                    "hsl(35, 16%, 93%)",
                    "hsl(0, 0%, 100%)"
                ],
                "line-opacity": ["step", ["zoom"], 0, 14, 1]
            }
        },
        {
            "id": "bridge-primary-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "match", ["get", "class"],
                    ["primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5, ["match", ["get", "class"], "primary", 0.75, 0.1],
                    18, ["match", ["get", "class"], "primary", 32, 26]
                ],
                "line-color": "hsl(0, 0%, 100%)"
            }
        },
        {
            "id": "bridge-oneway-arrow-blue",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["==", ["get", "oneway"], "true"],
                [
                    "step", ["zoom"],
                    [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        true,
                        false
                    ],
                    16, [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "service",
                            "track"
                        ],
                        true,
                        false
                    ]
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step", ["zoom"],
                    "oneway-small",
                    17, [
                        "match", ["get", "class"],
                        [
                            "primary",
                            "secondary",
                            "tertiary",
                            "street",
                            "street_limited"
                        ],
                        "oneway-large",
                        "oneway-small"
                    ],
                    18,
                    "oneway-large"
                ],
                "symbol-spacing": 200,
                "icon-rotation-alignment": "map"
            },
            "paint": {}
        },
        {
            "id": "bridge-motorway-trunk",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["<=", ["get", "layer"], 1],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway",
                    "hsl(26, 100%, 68%)",
                    "hsl(46, 87%, 68%)"
                ]
            }
        },
        {
            "id": "bridge-major-link-2-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.75,
                    20,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-2-case",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    10,
                    1,
                    18,
                    2
                ],
                "line-color": "hsl(230, 26%, 100%)",
                "line-gap-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ]
            }
        },
        {
            "id": "bridge-major-link-2",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                [
                    "match", ["get", "class"],
                    ["motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": { "line-cap": "round", "line-join": "round" },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    12,
                    0.5,
                    14,
                    2,
                    18,
                    18
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway_link",
                    "hsl(26, 100%, 68%)",
                    "hsl(46, 87%, 68%)"
                ]
            }
        },
        {
            "id": "bridge-motorway-trunk-2",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [">=", ["get", "layer"], 2],
                ["match", ["get", "class"],
                    ["motorway", "trunk"], true, false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "line-cap": ["step", ["zoom"], "butt", 14, "round"],
                "line-join": ["step", ["zoom"], "miter", 14, "round"]
            },
            "paint": {
                "line-width": [
                    "interpolate", ["exponential", 1.5],
                    ["zoom"],
                    5,
                    0.75,
                    18,
                    32
                ],
                "line-color": [
                    "match", ["get", "class"],
                    "motorway",
                    "hsl(26, 100%, 68%)",
                    "hsl(46, 87%, 68%)"
                ]
            }
        },
        {
            "id": "bridge-oneway-arrow-white",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, bridges"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": [
                "all", ["==", ["get", "structure"], "bridge"],
                [
                    "match", ["get", "class"],
                    ["motorway", "trunk", "motorway_link", "trunk_link"],
                    true,
                    false
                ],
                ["==", ["get", "oneway"], "true"]
            ],
            "layout": {
                "symbol-placement": "line",
                "icon-image": [
                    "step", ["zoom"],
                    "oneway-white-small",
                    17,
                    "oneway-white-large"
                ],
                "symbol-spacing": 200
            },
            "paint": {}
        },
        {
            "id": "admin-1-boundary-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 7,
            "filter": [
                "all", ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ]
            ],
            "layout": { "line-join": "bevel" },
            "paint": {
                "line-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    8,
                    "hsl(35, 12%, 89%)",
                    16,
                    "hsl(230, 49%, 90%)"
                ],
                "line-width": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    7,
                    3.75,
                    12,
                    5.5
                ],
                "line-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    7,
                    0,
                    8,
                    0.75
                ],
                "line-dasharray": [1, 0],
                "line-blur": ["interpolate", ["linear"],
                    ["zoom"], 3, 0, 8, 3
                ]
            }
        },
        {
            "id": "admin-0-boundary-bg",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all", ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ]
            ],
            "layout": {},
            "paint": {
                "line-width": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    3,
                    3.5,
                    10,
                    8
                ],
                "line-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    6,
                    "hsl(35, 12%, 89%)",
                    8,
                    "hsl(230, 49%, 90%)"
                ],
                "line-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    3,
                    0,
                    4,
                    0.5
                ],
                "line-blur": ["interpolate", ["linear"],
                    ["zoom"], 3, 0, 10, 2
                ]
            }
        },
        {
            "id": "admin-1-boundary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 2,
            "filter": [
                "all", ["==", ["get", "admin_level"], 1],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [2, 0]],
                    7, ["literal", [2, 2, 6, 2]]
                ],
                "line-width": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    7,
                    0.75,
                    12,
                    1.5
                ],
                "line-opacity": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    2,
                    0,
                    3,
                    1
                ],
                "line-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    3,
                    "hsl(230, 15%, 77%)",
                    7,
                    "hsl(230, 8%, 62%)"
                ]
            }
        },
        {
            "id": "admin-0-boundary",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all", ["==", ["get", "admin_level"], 0],
                ["==", ["get", "disputed"], "false"],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ]
            ],
            "layout": { "line-join": "round", "line-cap": "round" },
            "paint": {
                "line-color": "hsl(230, 8%, 51%)",
                "line-width": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ],
                "line-dasharray": [10, 0]
            }
        },
        {
            "id": "admin-0-boundary-disputed",
            "type": "line",
            "metadata": {
                "mapbox:featureComponent": "admin-boundaries",
                "mapbox:group": "Administrative boundaries, admin"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
            "filter": [
                "all", ["==", ["get", "disputed"], "true"],
                ["==", ["get", "admin_level"], 0],
                ["==", ["get", "maritime"], "false"],
                ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ]
            ],
            "layout": { "line-join": "round" },
            "paint": {
                "line-color": "hsl(230, 8%, 51%)",
                "line-width": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    3,
                    0.5,
                    10,
                    2
                ],
                "line-dasharray": [
                    "step", ["zoom"],
                    ["literal", [3.25, 3.25]],
                    6, ["literal", [2.5, 2.5]],
                    7, ["literal", [2, 2.25]],
                    8, ["literal", [1.75, 2]]
                ]
            }
        },
        {
            "id": "building-number-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, building-labels"
            },
            "source": "composite",
            "source-layer": "housenum_label",
            "minzoom": 17,
            "layout": {
                "text-field": ["get", "house_num"],
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "text-padding": 4,
                "text-max-width": 7,
                "text-size": 9.5
            },
            "paint": {
                "text-color": "hsl(35, 2%, 68%)",
                "text-halo-color": "hsl(35, 7%, 90%)",
                "text-halo-width": 0.5
            }
        },
        {
            "id": "block-number-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "buildings",
                "mapbox:group": "Buildings, building-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 16,
            "filter": [
                "all", ["==", ["get", "class"], "settlement_subdivision"],
                ["==", ["get", "type"], "block"]
            ],
            "layout": {
                "text-field": ["get", "name"],
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "text-max-width": 7,
                "text-size": 11
            },
            "paint": {
                "text-color": "hsl(35, 12%, 55%)",
                "text-halo-color": "hsl(35, 11%, 99%)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "road-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "filter": [
                "step", ["zoom"],
                [
                    "match", ["get", "class"],
                    ["motorway", "trunk", "primary", "secondary", "tertiary"],
                    true,
                    false
                ],
                12, [
                    "match", ["get", "class"],
                    [
                        "motorway",
                        "trunk",
                        "primary",
                        "secondary",
                        "tertiary",
                        "street",
                        "street_limited"
                    ],
                    true,
                    false
                ],
                15, [
                    "match", ["get", "class"],
                    ["path", "pedestrian", "golf", "ferry", "aerialway"],
                    false,
                    true
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    10, [
                        "match", ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        10, [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited"
                        ],
                        9,
                        6.5
                    ],
                    18, [
                        "match", ["get", "class"],
                        [
                            "motorway",
                            "trunk",
                            "primary",
                            "secondary",
                            "tertiary"
                        ],
                        16, [
                            "motorway_link",
                            "trunk_link",
                            "primary_link",
                            "secondary_link",
                            "tertiary_link",
                            "street",
                            "street_limited"
                        ],
                        14,
                        13
                    ]
                ],
                "text-max-angle": 30,
                "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-halo-color": [
                    "match", ["get", "class"],
                    ["motorway", "trunk"],
                    "hsla(35, 19%, 100%, 0.75)",
                    "hsl(35, 19%, 100%)"
                ],
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "road-intersection",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "filter": [
                "all", ["==", ["get", "class"], "intersection"],
                ["has", "name"]
            ],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "icon-image": "intersection",
                "icon-text-fit": "both",
                "icon-text-fit-padding": [1, 2, 1, 2],
                "text-size": [
                    "interpolate", ["exponential", 1.2],
                    ["zoom"],
                    15,
                    9,
                    18,
                    12
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"]
            },
            "paint": { "text-color": "hsl(230, 57%, 64%)" }
        },
        {
            "id": "road-number-shield",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "filter": [
                "all", ["has", "reflen"],
                ["<=", ["get", "reflen"], 6],
                [
                    "step", ["zoom"],
                    ["==", ["geometry-type"], "Point"],
                    11, [">", ["get", "len"], 5000],
                    12, [">", ["get", "len"], 2500],
                    13, [">", ["get", "len"], 1000],
                    14,
                    true
                ]
            ],
            "layout": {
                "text-size": 9,
                "icon-image": [
                    "concat", ["get", "shield"],
                    "-", ["to-string", ["get", "reflen"]]
                ],
                "icon-rotation-alignment": "viewport",
                "text-max-angle": 38,
                "symbol-spacing": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    11,
                    150,
                    14,
                    200
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"],
                "symbol-placement": ["step", ["zoom"], "point", 11, "line"],
                "text-rotation-alignment": "viewport",
                "text-field": ["get", "ref"],
                "text-letter-spacing": 0.05
            },
            "paint": {
                "text-color": [
                    "match", ["get", "shield_text_color"],
                    "white",
                    "hsl(0, 0%, 100%)",
                    "yellow",
                    "hsl(50, 100%, 70%)",
                    "orange",
                    "hsl(25, 100%, 75%)",
                    "blue",
                    "hsl(230, 57%, 44%)",
                    "hsl(230, 18%, 13%)"
                ]
            }
        },
        {
            "id": "road-exit-shield",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "road-network",
                "mapbox:group": "Road network, road-labels"
            },
            "source": "composite",
            "source-layer": "motorway_junction",
            "minzoom": 14,
            "filter": ["all", ["has", "reflen"],
                ["<=", ["get", "reflen"], 9]
            ],
            "layout": {
                "text-field": ["get", "ref"],
                "text-size": 9,
                "icon-image": [
                    "concat",
                    "motorway-exit-", ["to-string", ["get", "reflen"]]
                ],
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"]
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-translate": [0, 0]
            }
        },
        {
            "id": "path-pedestrian-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., walking-cycling-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "filter": [
                "step", ["zoom"],
                ["match", ["get", "class"],
                    ["pedestrian"], true, false
                ],
                15, ["match", ["get", "class"],
                    ["path", "pedestrian"], true, false
                ]
            ],
            "layout": {
                "text-size": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    10, ["match", ["get", "class"], "pedestrian", 9, 6.5],
                    18, ["match", ["get", "class"], "pedestrian", 14, 13]
                ],
                "text-max-angle": 30,
                "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                "symbol-placement": "line",
                "text-padding": 1,
                "text-rotation-alignment": "map",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "golf-hole-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "walking-cycling",
                "mapbox:group": "Walking, cycling, etc., walking-cycling-labels"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "filter": ["==", ["get", "class"], "golf"],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "text-size": 12
            },
            "paint": {
                "text-halo-color": "hsl(99, 62%, 100%)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": "hsl(105, 30%, 32%)"
            }
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 13,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["canal", "river", "stream"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    ["disputed_canal", "disputed_river", "disputed_stream"],
                    [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "text-max-angle": 30,
                "symbol-spacing": [
                    "interpolate", ["linear", 1],
                    ["zoom"],
                    15,
                    250,
                    17,
                    400
                ],
                "text-size": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    13,
                    12,
                    18,
                    16
                ],
                "symbol-placement": "line",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ]
            },
            "paint": { "text-color": "hsl(196, 48%, 57%)" }
        },
        {
            "id": "natural-line-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["glacier", "landform"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    ["disputed_glacier", "disputed_landform"],
                    [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "LineString"],
                ["<=", ["get", "filterrank"], 2]
            ],
            "layout": {
                "text-size": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17, ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "text-max-angle": 30,
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport"
            },
            "paint": {
                "text-halo-width": 0.5,
                "text-halo-color": "hsl(35, 19%, 100%)",
                "text-halo-blur": 0.5,
                "text-color": [
                    "step", ["zoom"],
                    [
                        "step", ["get", "sizerank"],
                        "hsl(26, 20%, 42%)",
                        5,
                        "hsl(26, 25%, 32%)"
                    ],
                    17, [
                        "step", ["get", "sizerank"],
                        "hsl(26, 20%, 42%)",
                        13,
                        "hsl(26, 25%, 32%)"
                    ]
                ]
            }
        },
        {
            "id": "natural-point-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "minzoom": 4,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["dock", "glacier", "landform", "water_feature", "wetland"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    [
                        "disputed_dock",
                        "disputed_glacier",
                        "disputed_landform",
                        "disputed_water_feature",
                        "disputed_wetland"
                    ],
                    [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "Point"],
                ["<=", ["get", "filterrank"], 2]
            ],
            "layout": {
                "text-size": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17, ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "icon-image": [
                    "step", ["zoom"],
                    ["concat", ["get", "maki"], "-11"],
                    15, ["concat", ["get", "maki"], "-15"]
                ],
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "text-offset": [
                    "step", ["zoom"],
                    [
                        "step", ["get", "sizerank"],
                        ["literal", [0, 0]],
                        5, ["literal", [0, 0.75]]
                    ],
                    17, [
                        "step", ["get", "sizerank"],
                        ["literal", [0, 0]],
                        13, ["literal", [0, 0.75]]
                    ]
                ],
                "text-anchor": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], "center", 5, "top"],
                    17, ["step", ["get", "sizerank"], "center", 13, "top"]
                ],
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ]
            },
            "paint": {
                "icon-opacity": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], 0, 5, 1],
                    17, ["step", ["get", "sizerank"], 0, 13, 1]
                ],
                "text-halo-color": "hsl(35, 19%, 100%)",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": [
                    "step", ["zoom"],
                    [
                        "step", ["get", "sizerank"],
                        "hsl(26, 20%, 42%)",
                        5,
                        "hsl(26, 25%, 32%)"
                    ],
                    17, [
                        "step", ["get", "sizerank"],
                        "hsl(26, 20%, 42%)",
                        13,
                        "hsl(26, 25%, 32%)"
                    ]
                ]
            }
        },
        {
            "id": "water-line-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["bay", "ocean", "reservoir", "sea", "water"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    [
                        "disputed_bay",
                        "disputed_ocean",
                        "disputed_reservoir",
                        "disputed_sea",
                        "disputed_water"
                    ],
                    [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "LineString"]
            ],
            "layout": {
                "text-size": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    7, ["step", ["get", "sizerank"], 20, 6, 18, 12, 12],
                    10, ["step", ["get", "sizerank"], 15, 9, 12],
                    18, ["step", ["get", "sizerank"], 15, 9, 14]
                ],
                "text-max-angle": 30,
                "text-letter-spacing": [
                    "match", ["get", "class"],
                    "ocean",
                    0.25, ["sea", "bay"],
                    0.15,
                    0
                ],
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "symbol-placement": "line-center",
                "text-pitch-alignment": "viewport",
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ]
            },
            "paint": {
                "text-color": [
                    "match", ["get", "class"],
                    ["bay", "ocean", "sea"],
                    "hsl(196, 76%, 50%)",
                    "hsl(196, 48%, 57%)"
                ]
            }
        },
        {
            "id": "water-point-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "natural-features",
                "mapbox:group": "Natural features, natural-labels"
            },
            "source": "composite",
            "source-layer": "natural_label",
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    ["bay", "ocean", "reservoir", "sea", "water"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    [
                        "disputed_bay",
                        "disputed_ocean",
                        "disputed_reservoir",
                        "disputed_sea",
                        "disputed_water"
                    ],
                    [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["==", ["geometry-type"], "Point"]
            ],
            "layout": {
                "text-line-height": 1.3,
                "text-size": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    7, ["step", ["get", "sizerank"], 20, 6, 15, 12, 12],
                    10, ["step", ["get", "sizerank"], 15, 9, 12]
                ],
                "text-font": ["DIN Pro Italic", "Arial Unicode MS Regular"],
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-letter-spacing": [
                    "match", ["get", "class"],
                    "ocean",
                    0.25, ["bay", "sea"],
                    0.15,
                    0.01
                ],
                "text-max-width": [
                    "match", ["get", "class"],
                    "ocean",
                    4,
                    "sea",
                    5, ["bay", "water"],
                    7,
                    10
                ]
            },
            "paint": {
                "text-color": [
                    "match", ["get", "class"],
                    ["bay", "ocean", "sea"],
                    "hsl(196, 76%, 50%)",
                    "hsl(196, 48%, 57%)"
                ]
            }
        },
        {
            "id": "poi-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "point-of-interest-labels",
                "mapbox:group": "Point of interest labels, poi-labels"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "minzoom": 6,
            "filter": [
                "let",
                "densityByClass", [
                    "match", ["get", "class"],
                    "education",
                    2,
                    "industrial",
                    3,
                    "landmark",
                    3,
                    "medical",
                    3,
                    "park_like",
                    3,
                    "religion",
                    3,
                    "visitor_amenities",
                    4,
                    0
                ],
                [
                    "<=", ["get", "filterrank"],
                    [
                        "case", ["<", 0, ["var", "densityByClass"]],
                        [
                            "+", ["step", ["zoom"], 0, 16, 1, 17, 2],
                            ["var", "densityByClass"]
                        ],
                        ["var", "densityByClass"]
                    ]
                ]
            ],
            "layout": {
                "text-size": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], 18, 5, 12],
                    17, ["step", ["get", "sizerank"], 18, 13, 12]
                ],
                "icon-image": [
                    "step", ["zoom"],
                    [
                        "case", ["has", "maki_beta"],
                        ["image", ["concat", ["get", "maki_beta"], "-11"]],
                        ["image", ["concat", ["get", "maki"], "-11"]]
                    ],
                    15, [
                        "case", ["has", "maki_beta"],
                        ["image", ["concat", ["get", "maki_beta"], "-15"]],
                        ["image", ["concat", ["get", "maki"], "-15"]]
                    ]
                ],
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "text-offset": [
                    "step", ["zoom"],
                    [
                        "step", ["get", "sizerank"],
                        ["literal", [0, 0]],
                        5, ["literal", [0, 0.75]]
                    ],
                    17, [
                        "step", ["get", "sizerank"],
                        ["literal", [0, 0]],
                        13, ["literal", [0, 0.75]]
                    ]
                ],
                "text-anchor": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], "center", 5, "top"],
                    17, ["step", ["get", "sizerank"], "center", 13, "top"]
                ],
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ]
            },
            "paint": {
                "icon-opacity": [
                    "step", ["zoom"],
                    ["step", ["get", "sizerank"], 0, 5, 1],
                    17, ["step", ["get", "sizerank"], 0, 13, 1]
                ],
                "text-halo-color": [
                    "match", ["get", "class"],
                    "park_like",
                    "hsl(99, 62%, 100%)",
                    "education",
                    "hsl(50, 62%, 100%)",
                    "medical",
                    "hsl(340, 68%, 100%)",
                    "hsl(35, 19%, 100%)"
                ],
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": [
                    "step", ["zoom"],
                    [
                        "step", ["get", "sizerank"],
                        [
                            "match", ["get", "class"],
                            "food_and_drink",
                            "hsl(22, 55%, 55%)",
                            "park_like",
                            "hsl(105, 31%, 43%)",
                            "education",
                            "hsl(50, 40%, 40%)",
                            "medical",
                            "hsl(340, 30%, 52%)",
                            "hsl(26, 20%, 42%)"
                        ],
                        5, [
                            "match", ["get", "class"],
                            "food_and_drink",
                            "hsl(22, 85%, 38%)",
                            "park_like",
                            "hsl(105, 30%, 32%)",
                            "education",
                            "hsl(50, 100%, 20%)",
                            "medical",
                            "hsl(340, 39%, 42%)",
                            "hsl(26, 25%, 32%)"
                        ]
                    ],
                    17, [
                        "step", ["get", "sizerank"],
                        [
                            "match", ["get", "class"],
                            "food_and_drink",
                            "hsl(22, 55%, 55%)",
                            "park_like",
                            "hsl(105, 31%, 43%)",
                            "education",
                            "hsl(50, 40%, 40%)",
                            "medical",
                            "hsl(340, 30%, 52%)",
                            "hsl(26, 20%, 42%)"
                        ],
                        13, [
                            "match", ["get", "class"],
                            "food_and_drink",
                            "hsl(22, 85%, 38%)",
                            "park_like",
                            "hsl(105, 30%, 32%)",
                            "education",
                            "hsl(50, 100%, 20%)",
                            "medical",
                            "hsl(340, 39%, 42%)",
                            "hsl(26, 25%, 32%)"
                        ]
                    ]
                ]
            }
        },
        {
            "id": "settlement-subdivision-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 15,
            "filter": [
                "all", [
                    "match", ["get", "class"],
                    "settlement_subdivision", ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    "disputed_settlement_subdivision", [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                ["<=", ["get", "filterrank"], 4]
            ],
            "layout": {
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-transform": "uppercase",
                "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                "text-letter-spacing": [
                    "match", ["get", "type"],
                    "suburb",
                    0.15,
                    0.1
                ],
                "text-max-width": 7,
                "text-padding": 3,
                "text-size": [
                    "interpolate", ["cubic-bezier", 0.5, 0, 1, 1],
                    ["zoom"],
                    11, ["match", ["get", "type"], "suburb", 11, 10.5],
                    15, ["match", ["get", "type"], "suburb", 15, 14]
                ]
            },
            "paint": {
                "text-halo-color": "hsla(35, 19%, 100%, 0.75)",
                "text-halo-width": 1,
                "text-color": "hsl(230, 29%, 36%)",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "settlement-minor-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all", ["<=", ["get", "filterrank"], 3],
                [
                    "match", ["get", "class"],
                    "settlement", ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    "disputed_settlement", [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                [
                    "step", ["zoom"],
                    true,
                    8, [">=", ["get", "symbolrank"], 11],
                    10, [">=", ["get", "symbolrank"], 12],
                    11, [">=", ["get", "symbolrank"], 13],
                    12, [">=", ["get", "symbolrank"], 15],
                    13, [">=", ["get", "symbolrank"], 11],
                    14, [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate", ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    3, [
                        "step", ["get", "symbolrank"],
                        12,
                        9,
                        11,
                        10,
                        10.5,
                        12,
                        9.5,
                        14,
                        8.5,
                        16,
                        6.5,
                        17,
                        4
                    ],
                    13, [
                        "step", ["get", "symbolrank"],
                        23,
                        9,
                        21,
                        10,
                        19,
                        11,
                        17,
                        12,
                        16,
                        13,
                        15,
                        15,
                        13
                    ]
                ],
                "icon-image": [
                    "step", ["zoom"],
                    [
                        "case", ["==", ["get", "capital"], 2],
                        "border-dot-13", [
                            "step", ["get", "symbolrank"],
                            "dot-11",
                            9,
                            "dot-10",
                            11,
                            "dot-9"
                        ]
                    ],
                    8,
                    ""
                ],
                "text-font": ["DIN Pro Regular", "Arial Unicode MS Regular"],
                "text-justify": [
                    "step", ["zoom"],
                    [
                        "match", ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left", ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step", ["zoom"],
                    [
                        "match", ["get", "capital"],
                        2, [
                            "match", ["get", "text_anchor"],
                            "bottom", ["literal", [0, -0.3]],
                            "bottom-left", ["literal", [0.3, -0.1]],
                            "left", ["literal", [0.45, 0.1]],
                            "top-left", ["literal", [0.3, 0.1]],
                            "top", ["literal", [0, 0.3]],
                            "top-right", ["literal", [-0.3, 0.1]],
                            "right", ["literal", [-0.45, 0]],
                            "bottom-right", ["literal", [-0.3, -0.1]],
                            ["literal", [0, -0.3]]
                        ],
                        [
                            "match", ["get", "text_anchor"],
                            "bottom", ["literal", [0, -0.25]],
                            "bottom-left", ["literal", [0.2, -0.05]],
                            "left", ["literal", [0.4, 0.05]],
                            "top-left", ["literal", [0.2, 0.05]],
                            "top", ["literal", [0, 0.25]],
                            "top-right", ["literal", [-0.2, 0.05]],
                            "right", ["literal", [-0.4, 0.05]],
                            "bottom-right", ["literal", [-0.2, -0.05]],
                            ["literal", [0, -0.25]]
                        ]
                    ],
                    8, ["literal", [0, 0]]
                ],
                "text-anchor": [
                    "step", ["zoom"],
                    ["get", "text_anchor"],
                    8,
                    "center"
                ],
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(230, 29%, 0%)",
                "text-halo-color": "hsl(35, 19%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "settlement-major-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "maxzoom": 15,
            "filter": [
                "all", ["<=", ["get", "filterrank"], 3],
                [
                    "match", ["get", "class"],
                    "settlement", ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ],
                    "disputed_settlement", [
                        "all", ["==", ["get", "disputed"], "true"],
                        [
                            "match", ["get", "worldview"],
                            ["all", "US"],
                            true,
                            false
                        ]
                    ],
                    false
                ],
                [
                    "step", ["zoom"],
                    false,
                    8, ["<", ["get", "symbolrank"], 11],
                    10, ["<", ["get", "symbolrank"], 12],
                    11, ["<", ["get", "symbolrank"], 13],
                    12, ["<", ["get", "symbolrank"], 15],
                    13, [">=", ["get", "symbolrank"], 11],
                    14, [">=", ["get", "symbolrank"], 13]
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": [
                    "interpolate", ["cubic-bezier", 0.2, 0, 0.9, 1],
                    ["zoom"],
                    8, ["step", ["get", "symbolrank"], 18, 9, 17, 10, 15],
                    15, [
                        "step", ["get", "symbolrank"],
                        23,
                        9,
                        22,
                        10,
                        20,
                        11,
                        18,
                        12,
                        16,
                        13,
                        15,
                        15,
                        13
                    ]
                ],
                "icon-image": [
                    "step", ["zoom"],
                    [
                        "case", ["==", ["get", "capital"], 2],
                        "border-dot-13", [
                            "step", ["get", "symbolrank"],
                            "dot-11",
                            9,
                            "dot-10",
                            11,
                            "dot-9"
                        ]
                    ],
                    8,
                    ""
                ],
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "text-justify": [
                    "step", ["zoom"],
                    [
                        "match", ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left", ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    8,
                    "center"
                ],
                "text-offset": [
                    "step", ["zoom"],
                    [
                        "match", ["get", "capital"],
                        2, [
                            "match", ["get", "text_anchor"],
                            "bottom", ["literal", [0, -0.3]],
                            "bottom-left", ["literal", [0.3, -0.1]],
                            "left", ["literal", [0.45, 0.1]],
                            "top-left", ["literal", [0.3, 0.1]],
                            "top", ["literal", [0, 0.3]],
                            "top-right", ["literal", [-0.3, 0.1]],
                            "right", ["literal", [-0.45, 0]],
                            "bottom-right", ["literal", [-0.3, -0.1]],
                            ["literal", [0, -0.3]]
                        ],
                        [
                            "match", ["get", "text_anchor"],
                            "bottom", ["literal", [0, -0.25]],
                            "bottom-left", ["literal", [0.2, -0.05]],
                            "left", ["literal", [0.4, 0.05]],
                            "top-left", ["literal", [0.2, 0.05]],
                            "top", ["literal", [0, 0.25]],
                            "top-right", ["literal", [-0.2, 0.05]],
                            "right", ["literal", [-0.4, 0.05]],
                            "bottom-right", ["literal", [-0.2, -0.05]],
                            ["literal", [0, -0.25]]
                        ]
                    ],
                    8, ["literal", [0, 0]]
                ],
                "text-anchor": [
                    "step", ["zoom"],
                    ["get", "text_anchor"],
                    8,
                    "center"
                ],
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(230, 29%, 0%)",
                "text-halo-color": "hsl(35, 19%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "state-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 3,
            "maxzoom": 9,
            "filter": [
                "match", ["get", "class"],
                "state", ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ],
                "disputed_state", [
                    "all", ["==", ["get", "disputed"], "true"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ]
                ],
                false
            ],
            "layout": {
                "text-size": [
                    "interpolate", ["cubic-bezier", 0.85, 0.7, 0.65, 1],
                    ["zoom"],
                    4, ["step", ["get", "symbolrank"], 10, 6, 9.5, 7, 9],
                    9, ["step", ["get", "symbolrank"], 21, 6, 16, 7, 13]
                ],
                "text-transform": "uppercase",
                "text-font": ["DIN Pro Bold", "Arial Unicode MS Bold"],
                "text-field": [
                    "step", ["zoom"],
                    [
                        "step", ["get", "symbolrank"],
                        ["coalesce", ["get", "name_en"],
                            ["get", "name"]
                        ],
                        5, [
                            "coalesce", ["get", "abbr"],
                            ["get", "name_en"],
                            ["get", "name"]
                        ]
                    ],
                    5, ["coalesce", ["get", "name_en"],
                        ["get", "name"]
                    ]
                ],
                "text-letter-spacing": 0.15,
                "text-max-width": 6
            },
            "paint": {
                "text-color": "hsl(230, 29%, 0%)",
                "text-halo-color": "hsl(35, 19%, 100%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "country-label",
            "type": "symbol",
            "metadata": {
                "mapbox:featureComponent": "place-labels",
                "mapbox:group": "Place labels, place-labels"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 10,
            "filter": [
                "match", ["get", "class"],
                "country", ["match", ["get", "worldview"],
                    ["all", "US"], true, false
                ],
                "disputed_country", [
                    "all", ["==", ["get", "disputed"], "true"],
                    ["match", ["get", "worldview"],
                        ["all", "US"], true, false
                    ]
                ],
                false
            ],
            "layout": {
                "icon-image": "",
                "text-field": ["coalesce", ["get", "name_en"],
                    ["get", "name"]
                ],
                "text-line-height": 1.1,
                "text-max-width": 6,
                "text-font": ["DIN Pro Medium", "Arial Unicode MS Regular"],
                "text-offset": ["literal", [0, 0]],
                "text-justify": [
                    "step", ["zoom"],
                    [
                        "match", ["get", "text_anchor"],
                        ["left", "bottom-left", "top-left"],
                        "left", ["right", "bottom-right", "top-right"],
                        "right",
                        "center"
                    ],
                    7,
                    "center"
                ],
                "text-size": [
                    "interpolate", ["cubic-bezier", 0.2, 0, 0.7, 1],
                    ["zoom"],
                    1, ["step", ["get", "symbolrank"], 11, 4, 9, 5, 8],
                    9, ["step", ["get", "symbolrank"], 22, 4, 19, 5, 17]
                ]
            },
            "paint": {
                "icon-opacity": [
                    "step", ["zoom"],
                    ["case", ["has", "text_anchor"], 1, 0],
                    7,
                    0
                ],
                "text-color": "hsl(230, 29%, 0%)",
                "text-halo-color": [
                    "interpolate", ["linear"],
                    ["zoom"],
                    2,
                    "hsla(35, 19%, 100%, 0.75)",
                    3,
                    "hsl(35, 19%, 100%)"
                ],
                "text-halo-width": 1.25
            }
        }
    ],
    "created": "2020-12-07T05:55:05.337Z",
    "modified": "2020-12-07T06:36:30.529Z",
    "id": "ckie54mw43bi619mkp5ljhgae",
    "owner": "nsalinas",
    "visibility": "private",
    "draft": false
}