var tree={
  "plugins": [
    "defaults",
    "search",
    "sort",
    "state",
    "types",
    "contextmenu"
  ],
  "search": {
    "show_only_matches": true
  },
  "types": {
    "class": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/class.png"
    },
    "geoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoclass.png"
    },
    "halfgeoclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/halfgeoclass.png"
    },
    "collectionclass": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/collectionclass.png"
    },
    "geocollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geometrycollection.png"
    },
    "featurecollection": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/featurecollection.png"
    },
    "instance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/instance.png"
    },
    "geoinstance": {
      "icon": "https://cdn.jsdelivr.net/gh/i3mainz/geopubby@master/public/icons/geoinstance.png"
    }
  },
  "core": {
    "themes": {
      "responsive": true
    },
    "check_callback": true,
    "data": [
      {
        "id": "http://i3mainz.de/metadata/digitalizationResult.xml",
        "parent": "http://objects.mainzed.org/ont#MeasurementProject",
        "type": "instance",
        "text": "digitalizationResult.xml",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementProject",
        "parent": "#",
        "type": "class",
        "text": "MeasurementProject (ns2:MeasurementProject) [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#measurementSeries": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#MeasurementSeries": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 2
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side0_cam0_measure10_ledSet9_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side0_cam0_measure10_ledSet9_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side0_cam0_measure10_ledSet9_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side0_cam0_measure10_ledSet9_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side0_cam0_measure10_ledSet9_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side0_cam0_measure10_ledSet9_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side0_cam0_measure10_ledSet9_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side0_cam0_measure10_ledSet9_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side0_cam0_measure10_ledSet9_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side0_cam0_measure10_ledSet9_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side0_cam0_measure11_ledSet10_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side0_cam0_measure11_ledSet10_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side0_cam0_measure11_ledSet10_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side0_cam0_measure11_ledSet10_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side0_cam0_measure11_ledSet10_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side0_cam0_measure11_ledSet10_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side0_cam0_measure11_ledSet10_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side0_cam0_measure11_ledSet10_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side0_cam0_measure11_ledSet10_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side0_cam0_measure11_ledSet10_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side0_cam0_measure12_ledSet11_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side0_cam0_measure12_ledSet11_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side0_cam0_measure12_ledSet11_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side0_cam0_measure12_ledSet11_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side0_cam0_measure12_ledSet11_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side0_cam0_measure12_ledSet11_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side0_cam0_measure12_ledSet11_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side0_cam0_measure12_ledSet11_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side0_cam0_measure12_ledSet11_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side0_cam0_measure12_ledSet11_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side0_cam0_measure13_ledSet12_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side0_cam0_measure13_ledSet12_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side0_cam0_measure13_ledSet12_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side0_cam0_measure13_ledSet12_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side0_cam0_measure13_ledSet12_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side0_cam0_measure13_ledSet12_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side0_cam0_measure13_ledSet12_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side0_cam0_measure13_ledSet12_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side0_cam0_measure13_ledSet12_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side0_cam0_measure13_ledSet12_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side0_cam0_measure14_ledSet13_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side0_cam0_measure14_ledSet13_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side0_cam0_measure14_ledSet13_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side0_cam0_measure14_ledSet13_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side0_cam0_measure14_ledSet13_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side0_cam0_measure14_ledSet13_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side0_cam0_measure14_ledSet13_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side0_cam0_measure14_ledSet13_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side0_cam0_measure14_ledSet13_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side0_cam0_measure14_ledSet13_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side0_cam0_measure15_ledSet14_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side0_cam0_measure15_ledSet14_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side0_cam0_measure15_ledSet14_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side0_cam0_measure15_ledSet14_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side0_cam0_measure15_ledSet14_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side0_cam0_measure15_ledSet14_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side0_cam0_measure15_ledSet14_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side0_cam0_measure15_ledSet14_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side0_cam0_measure15_ledSet14_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side0_cam0_measure15_ledSet14_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side0_cam0_measure16_ledSet15_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side0_cam0_measure16_ledSet15_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side0_cam0_measure16_ledSet15_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side0_cam0_measure16_ledSet15_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side0_cam0_measure16_ledSet15_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side0_cam0_measure16_ledSet15_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side0_cam0_measure16_ledSet15_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side0_cam0_measure16_ledSet15_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side0_cam0_measure16_ledSet15_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side0_cam0_measure16_ledSet15_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side0_cam0_measure17_ledSet16_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side0_cam0_measure17_ledSet16_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side0_cam0_measure17_ledSet16_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side0_cam0_measure17_ledSet16_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side0_cam0_measure17_ledSet16_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side0_cam0_measure17_ledSet16_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side0_cam0_measure17_ledSet16_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side0_cam0_measure17_ledSet16_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side0_cam0_measure17_ledSet16_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side0_cam0_measure17_ledSet16_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side0_cam0_measure18_ledSet17_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side0_cam0_measure18_ledSet17_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side0_cam0_measure18_ledSet17_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side0_cam0_measure18_ledSet17_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side0_cam0_measure18_ledSet17_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side0_cam0_measure18_ledSet17_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side0_cam0_measure18_ledSet17_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side0_cam0_measure18_ledSet17_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side0_cam0_measure18_ledSet17_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side0_cam0_measure18_ledSet17_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side0_cam0_measure19_ledSet18_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side0_cam0_measure19_ledSet18_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side0_cam0_measure19_ledSet18_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side0_cam0_measure19_ledSet18_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side0_cam0_measure19_ledSet18_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side0_cam0_measure19_ledSet18_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side0_cam0_measure19_ledSet18_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side0_cam0_measure19_ledSet18_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side0_cam0_measure19_ledSet18_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side0_cam0_measure19_ledSet18_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp2500",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side0_cam0_measure1_ledSet0_exp2500)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp5000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side0_cam0_measure1_ledSet0_exp5000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side0_cam0_measure20_ledSet19_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side0_cam0_measure20_ledSet19_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side0_cam0_measure20_ledSet19_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side0_cam0_measure20_ledSet19_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side0_cam0_measure20_ledSet19_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side0_cam0_measure20_ledSet19_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side0_cam0_measure20_ledSet19_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side0_cam0_measure20_ledSet19_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side0_cam0_measure20_ledSet19_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side0_cam0_measure20_ledSet19_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side0_cam0_measure21_ledSet20_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side0_cam0_measure21_ledSet20_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side0_cam0_measure21_ledSet20_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side0_cam0_measure21_ledSet20_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side0_cam0_measure21_ledSet20_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side0_cam0_measure21_ledSet20_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side0_cam0_measure21_ledSet20_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side0_cam0_measure21_ledSet20_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side0_cam0_measure21_ledSet20_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side0_cam0_measure21_ledSet20_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side0_cam0_measure22_ledSet21_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side0_cam0_measure22_ledSet21_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side0_cam0_measure22_ledSet21_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side0_cam0_measure22_ledSet21_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side0_cam0_measure22_ledSet21_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side0_cam0_measure22_ledSet21_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side0_cam0_measure22_ledSet21_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side0_cam0_measure22_ledSet21_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side0_cam0_measure22_ledSet21_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side0_cam0_measure22_ledSet21_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side0_cam0_measure23_ledSet22_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side0_cam0_measure23_ledSet22_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side0_cam0_measure23_ledSet22_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side0_cam0_measure23_ledSet22_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side0_cam0_measure23_ledSet22_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side0_cam0_measure23_ledSet22_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side0_cam0_measure23_ledSet22_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side0_cam0_measure23_ledSet22_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side0_cam0_measure23_ledSet22_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side0_cam0_measure23_ledSet22_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side0_cam0_measure24_ledSet23_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side0_cam0_measure24_ledSet23_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side0_cam0_measure24_ledSet23_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side0_cam0_measure24_ledSet23_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side0_cam0_measure24_ledSet23_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side0_cam0_measure24_ledSet23_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side0_cam0_measure24_ledSet23_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side0_cam0_measure24_ledSet23_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side0_cam0_measure24_ledSet23_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side0_cam0_measure24_ledSet23_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side0_cam0_measure25_ledSet24_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side0_cam0_measure25_ledSet24_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side0_cam0_measure25_ledSet24_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side0_cam0_measure25_ledSet24_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side0_cam0_measure25_ledSet24_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side0_cam0_measure25_ledSet24_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side0_cam0_measure25_ledSet24_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side0_cam0_measure25_ledSet24_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side0_cam0_measure25_ledSet24_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side0_cam0_measure25_ledSet24_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side0_cam0_measure2_ledSet1_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side0_cam0_measure2_ledSet1_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side0_cam0_measure2_ledSet1_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side0_cam0_measure2_ledSet1_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side0_cam0_measure2_ledSet1_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side0_cam0_measure2_ledSet1_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side0_cam0_measure2_ledSet1_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side0_cam0_measure2_ledSet1_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side0_cam0_measure2_ledSet1_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side0_cam0_measure2_ledSet1_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side0_cam0_measure3_ledSet2_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side0_cam0_measure3_ledSet2_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side0_cam0_measure3_ledSet2_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side0_cam0_measure3_ledSet2_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side0_cam0_measure3_ledSet2_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side0_cam0_measure3_ledSet2_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side0_cam0_measure3_ledSet2_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side0_cam0_measure3_ledSet2_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side0_cam0_measure3_ledSet2_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side0_cam0_measure3_ledSet2_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side0_cam0_measure4_ledSet3_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side0_cam0_measure4_ledSet3_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side0_cam0_measure4_ledSet3_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side0_cam0_measure4_ledSet3_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side0_cam0_measure4_ledSet3_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side0_cam0_measure4_ledSet3_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side0_cam0_measure4_ledSet3_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side0_cam0_measure4_ledSet3_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side0_cam0_measure4_ledSet3_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side0_cam0_measure4_ledSet3_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side0_cam0_measure5_ledSet4_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side0_cam0_measure5_ledSet4_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side0_cam0_measure5_ledSet4_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side0_cam0_measure5_ledSet4_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side0_cam0_measure5_ledSet4_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side0_cam0_measure5_ledSet4_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side0_cam0_measure5_ledSet4_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side0_cam0_measure5_ledSet4_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side0_cam0_measure5_ledSet4_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side0_cam0_measure5_ledSet4_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side0_cam0_measure6_ledSet5_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side0_cam0_measure6_ledSet5_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side0_cam0_measure6_ledSet5_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side0_cam0_measure6_ledSet5_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side0_cam0_measure6_ledSet5_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side0_cam0_measure6_ledSet5_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side0_cam0_measure6_ledSet5_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side0_cam0_measure6_ledSet5_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side0_cam0_measure6_ledSet5_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side0_cam0_measure6_ledSet5_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side0_cam0_measure7_ledSet6_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side0_cam0_measure7_ledSet6_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side0_cam0_measure7_ledSet6_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side0_cam0_measure7_ledSet6_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side0_cam0_measure7_ledSet6_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side0_cam0_measure7_ledSet6_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side0_cam0_measure7_ledSet6_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side0_cam0_measure7_ledSet6_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side0_cam0_measure7_ledSet6_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side0_cam0_measure7_ledSet6_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side0_cam0_measure8_ledSet7_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side0_cam0_measure8_ledSet7_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side0_cam0_measure8_ledSet7_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side0_cam0_measure8_ledSet7_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side0_cam0_measure8_ledSet7_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side0_cam0_measure8_ledSet7_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side0_cam0_measure8_ledSet7_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side0_cam0_measure8_ledSet7_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side0_cam0_measure8_ledSet7_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side0_cam0_measure8_ledSet7_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side0_cam0_measure9_ledSet8_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side0_cam0_measure9_ledSet8_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side0_cam0_measure9_ledSet8_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side0_cam0_measure9_ledSet8_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side0_cam0_measure9_ledSet8_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side0_cam0_measure9_ledSet8_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side0_cam0_measure9_ledSet8_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side0_cam0_measure9_ledSet8_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side0_cam0_measure9_ledSet8_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side0_cam0_measure9_ledSet8_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side0_cam1_measure26_ledSet0_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp125",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side0_cam1_measure26_ledSet0_exp125)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side0_cam1_measure26_ledSet0_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp250",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side0_cam1_measure26_ledSet0_exp250)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp500",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side0_cam1_measure26_ledSet0_exp500)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side1_cam0_measure10_ledSet9_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side1_cam0_measure10_ledSet9_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side1_cam0_measure10_ledSet9_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side1_cam0_measure10_ledSet9_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side1_cam0_measure10_ledSet9_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side1_cam0_measure10_ledSet9_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side1_cam0_measure10_ledSet9_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side1_cam0_measure10_ledSet9_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side1_cam0_measure10_ledSet9_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side1_cam0_measure10_ledSet9_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side1_cam0_measure11_ledSet10_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side1_cam0_measure11_ledSet10_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side1_cam0_measure11_ledSet10_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side1_cam0_measure11_ledSet10_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side1_cam0_measure11_ledSet10_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side1_cam0_measure11_ledSet10_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side1_cam0_measure11_ledSet10_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side1_cam0_measure11_ledSet10_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side1_cam0_measure11_ledSet10_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side1_cam0_measure11_ledSet10_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side1_cam0_measure12_ledSet11_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side1_cam0_measure12_ledSet11_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side1_cam0_measure12_ledSet11_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side1_cam0_measure12_ledSet11_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side1_cam0_measure12_ledSet11_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side1_cam0_measure12_ledSet11_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side1_cam0_measure12_ledSet11_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side1_cam0_measure12_ledSet11_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side1_cam0_measure12_ledSet11_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side1_cam0_measure12_ledSet11_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side1_cam0_measure13_ledSet12_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side1_cam0_measure13_ledSet12_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side1_cam0_measure13_ledSet12_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side1_cam0_measure13_ledSet12_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side1_cam0_measure13_ledSet12_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side1_cam0_measure13_ledSet12_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side1_cam0_measure13_ledSet12_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side1_cam0_measure13_ledSet12_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side1_cam0_measure13_ledSet12_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side1_cam0_measure13_ledSet12_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side1_cam0_measure14_ledSet13_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side1_cam0_measure14_ledSet13_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side1_cam0_measure14_ledSet13_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side1_cam0_measure14_ledSet13_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side1_cam0_measure14_ledSet13_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side1_cam0_measure14_ledSet13_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side1_cam0_measure14_ledSet13_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side1_cam0_measure14_ledSet13_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side1_cam0_measure14_ledSet13_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side1_cam0_measure14_ledSet13_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side1_cam0_measure15_ledSet14_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side1_cam0_measure15_ledSet14_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side1_cam0_measure15_ledSet14_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side1_cam0_measure15_ledSet14_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side1_cam0_measure15_ledSet14_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side1_cam0_measure15_ledSet14_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side1_cam0_measure15_ledSet14_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side1_cam0_measure15_ledSet14_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side1_cam0_measure15_ledSet14_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side1_cam0_measure15_ledSet14_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side1_cam0_measure16_ledSet15_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side1_cam0_measure16_ledSet15_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side1_cam0_measure16_ledSet15_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side1_cam0_measure16_ledSet15_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side1_cam0_measure16_ledSet15_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side1_cam0_measure16_ledSet15_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side1_cam0_measure16_ledSet15_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side1_cam0_measure16_ledSet15_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side1_cam0_measure16_ledSet15_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side1_cam0_measure16_ledSet15_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side1_cam0_measure17_ledSet16_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side1_cam0_measure17_ledSet16_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side1_cam0_measure17_ledSet16_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side1_cam0_measure17_ledSet16_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side1_cam0_measure17_ledSet16_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side1_cam0_measure17_ledSet16_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side1_cam0_measure17_ledSet16_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side1_cam0_measure17_ledSet16_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side1_cam0_measure17_ledSet16_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side1_cam0_measure17_ledSet16_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side1_cam0_measure18_ledSet17_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side1_cam0_measure18_ledSet17_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side1_cam0_measure18_ledSet17_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side1_cam0_measure18_ledSet17_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side1_cam0_measure18_ledSet17_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side1_cam0_measure18_ledSet17_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side1_cam0_measure18_ledSet17_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side1_cam0_measure18_ledSet17_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side1_cam0_measure18_ledSet17_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side1_cam0_measure18_ledSet17_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side1_cam0_measure19_ledSet18_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side1_cam0_measure19_ledSet18_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side1_cam0_measure19_ledSet18_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side1_cam0_measure19_ledSet18_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side1_cam0_measure19_ledSet18_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side1_cam0_measure19_ledSet18_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side1_cam0_measure19_ledSet18_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side1_cam0_measure19_ledSet18_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side1_cam0_measure19_ledSet18_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side1_cam0_measure19_ledSet18_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp2500",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side1_cam0_measure1_ledSet0_exp2500)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp5000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side1_cam0_measure1_ledSet0_exp5000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side1_cam0_measure20_ledSet19_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side1_cam0_measure20_ledSet19_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side1_cam0_measure20_ledSet19_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side1_cam0_measure20_ledSet19_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side1_cam0_measure20_ledSet19_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side1_cam0_measure20_ledSet19_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side1_cam0_measure20_ledSet19_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side1_cam0_measure20_ledSet19_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side1_cam0_measure20_ledSet19_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side1_cam0_measure20_ledSet19_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side1_cam0_measure21_ledSet20_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side1_cam0_measure21_ledSet20_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side1_cam0_measure21_ledSet20_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side1_cam0_measure21_ledSet20_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side1_cam0_measure21_ledSet20_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side1_cam0_measure21_ledSet20_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side1_cam0_measure21_ledSet20_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side1_cam0_measure21_ledSet20_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side1_cam0_measure21_ledSet20_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side1_cam0_measure21_ledSet20_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side1_cam0_measure22_ledSet21_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side1_cam0_measure22_ledSet21_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side1_cam0_measure22_ledSet21_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side1_cam0_measure22_ledSet21_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side1_cam0_measure22_ledSet21_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side1_cam0_measure22_ledSet21_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side1_cam0_measure22_ledSet21_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side1_cam0_measure22_ledSet21_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side1_cam0_measure22_ledSet21_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side1_cam0_measure22_ledSet21_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side1_cam0_measure23_ledSet22_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side1_cam0_measure23_ledSet22_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side1_cam0_measure23_ledSet22_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side1_cam0_measure23_ledSet22_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side1_cam0_measure23_ledSet22_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side1_cam0_measure23_ledSet22_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side1_cam0_measure23_ledSet22_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side1_cam0_measure23_ledSet22_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side1_cam0_measure23_ledSet22_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side1_cam0_measure23_ledSet22_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side1_cam0_measure24_ledSet23_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side1_cam0_measure24_ledSet23_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side1_cam0_measure24_ledSet23_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side1_cam0_measure24_ledSet23_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side1_cam0_measure24_ledSet23_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side1_cam0_measure24_ledSet23_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side1_cam0_measure24_ledSet23_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side1_cam0_measure24_ledSet23_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side1_cam0_measure24_ledSet23_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side1_cam0_measure24_ledSet23_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side1_cam0_measure25_ledSet24_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side1_cam0_measure25_ledSet24_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side1_cam0_measure25_ledSet24_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side1_cam0_measure25_ledSet24_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side1_cam0_measure25_ledSet24_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side1_cam0_measure25_ledSet24_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side1_cam0_measure25_ledSet24_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side1_cam0_measure25_ledSet24_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side1_cam0_measure25_ledSet24_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side1_cam0_measure25_ledSet24_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side1_cam0_measure2_ledSet1_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side1_cam0_measure2_ledSet1_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side1_cam0_measure2_ledSet1_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side1_cam0_measure2_ledSet1_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side1_cam0_measure2_ledSet1_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side1_cam0_measure2_ledSet1_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side1_cam0_measure2_ledSet1_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side1_cam0_measure2_ledSet1_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side1_cam0_measure2_ledSet1_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side1_cam0_measure2_ledSet1_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side1_cam0_measure3_ledSet2_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side1_cam0_measure3_ledSet2_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side1_cam0_measure3_ledSet2_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side1_cam0_measure3_ledSet2_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side1_cam0_measure3_ledSet2_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side1_cam0_measure3_ledSet2_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side1_cam0_measure3_ledSet2_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side1_cam0_measure3_ledSet2_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side1_cam0_measure3_ledSet2_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side1_cam0_measure3_ledSet2_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side1_cam0_measure4_ledSet3_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side1_cam0_measure4_ledSet3_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side1_cam0_measure4_ledSet3_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side1_cam0_measure4_ledSet3_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side1_cam0_measure4_ledSet3_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side1_cam0_measure4_ledSet3_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side1_cam0_measure4_ledSet3_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side1_cam0_measure4_ledSet3_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side1_cam0_measure4_ledSet3_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side1_cam0_measure4_ledSet3_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side1_cam0_measure5_ledSet4_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side1_cam0_measure5_ledSet4_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side1_cam0_measure5_ledSet4_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side1_cam0_measure5_ledSet4_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side1_cam0_measure5_ledSet4_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side1_cam0_measure5_ledSet4_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side1_cam0_measure5_ledSet4_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side1_cam0_measure5_ledSet4_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side1_cam0_measure5_ledSet4_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side1_cam0_measure5_ledSet4_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side1_cam0_measure6_ledSet5_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side1_cam0_measure6_ledSet5_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side1_cam0_measure6_ledSet5_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side1_cam0_measure6_ledSet5_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side1_cam0_measure6_ledSet5_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side1_cam0_measure6_ledSet5_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side1_cam0_measure6_ledSet5_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side1_cam0_measure6_ledSet5_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side1_cam0_measure6_ledSet5_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side1_cam0_measure6_ledSet5_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side1_cam0_measure7_ledSet6_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side1_cam0_measure7_ledSet6_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side1_cam0_measure7_ledSet6_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side1_cam0_measure7_ledSet6_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side1_cam0_measure7_ledSet6_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side1_cam0_measure7_ledSet6_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side1_cam0_measure7_ledSet6_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side1_cam0_measure7_ledSet6_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side1_cam0_measure7_ledSet6_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side1_cam0_measure7_ledSet6_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side1_cam0_measure8_ledSet7_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side1_cam0_measure8_ledSet7_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side1_cam0_measure8_ledSet7_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side1_cam0_measure8_ledSet7_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side1_cam0_measure8_ledSet7_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side1_cam0_measure8_ledSet7_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side1_cam0_measure8_ledSet7_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side1_cam0_measure8_ledSet7_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side1_cam0_measure8_ledSet7_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side1_cam0_measure8_ledSet7_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side1_cam0_measure9_ledSet8_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp128000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side1_cam0_measure9_ledSet8_exp128000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp16000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side1_cam0_measure9_ledSet8_exp16000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side1_cam0_measure9_ledSet8_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp256000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side1_cam0_measure9_ledSet8_exp256000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp32000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side1_cam0_measure9_ledSet8_exp32000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp4000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side1_cam0_measure9_ledSet8_exp4000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp512000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side1_cam0_measure9_ledSet8_exp512000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp64000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side1_cam0_measure9_ledSet8_exp64000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp8000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side1_cam0_measure9_ledSet8_exp8000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp1000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side1_cam1_measure26_ledSet0_exp1000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp125",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side1_cam1_measure26_ledSet0_exp125)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp2000",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side1_cam1_measure26_ledSet0_exp2000)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp250",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side1_cam1_measure26_ledSet0_exp250)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp500",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side1_cam1_measure26_ledSet0_exp500)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#Measurement",
        "parent": "#",
        "type": "class",
        "text": "Measurement (ns2:Measurement) [494]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#axisDistancePosition": {
              "instancecount": 1
            },
            "http://objects.mainzed.org/ont#axisFocusPosition": {
              "instancecount": 1
            },
            "http://objects.mainzed.org/ont#capturingdevice": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#RTIScanner": 1
            },
            "http://objects.mainzed.org/ont#pixelType": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#PixelType": 1
            },
            "http://objects.mainzed.org/ont#setup": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#MeasurementSetup": 1
            },
            "http://objects.mainzed.org/ont#usesCamera": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#Camera": 1
            },
            "http://objects.mainzed.org/ont#usesLightSourceGroup": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#LightSourceGroup": 1
            },
            "http://purl.org/dc/terms/created": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#comment": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 11
      },
      {
        "id": "http://i3mainz.de/metadata/capturing_device_1_dome",
        "parent": "http://objects.mainzed.org/ont#RTIDome",
        "type": "instance",
        "text": "RTI Dome of RTI Scanner (capturing_device_1_dome)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#RTIDome",
        "parent": "#",
        "type": "class",
        "text": "RTIDome (ns2:RTIDome) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#hasComponent": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#RTIScanner": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://i3mainz.de/metadata/digitalizationResult.xml_ms",
        "parent": "http://objects.mainzed.org/ont#MeasurementSeries",
        "type": "instance",
        "text": "MeasurementSeries for Measurement Project http://i3mainz.de/metadata/digitalizationResult.xml (digitalizationResult.xml_ms)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementSeries",
        "parent": "#",
        "type": "class",
        "text": "MeasurementSeries (ns2:MeasurementSeries) [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#measurement": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#measurementSeries": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#MeasurementProject": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side0_cam0_measure10_ledSet9_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side0_cam0_measure10_ledSet9_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side0_cam0_measure10_ledSet9_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side0_cam0_measure10_ledSet9_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side0_cam0_measure10_ledSet9_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side0_cam0_measure10_ledSet9_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side0_cam0_measure10_ledSet9_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side0_cam0_measure10_ledSet9_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side0_cam0_measure10_ledSet9_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side0_cam0_measure10_ledSet9_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side0_cam0_measure11_ledSet10_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side0_cam0_measure11_ledSet10_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side0_cam0_measure11_ledSet10_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side0_cam0_measure11_ledSet10_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side0_cam0_measure11_ledSet10_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side0_cam0_measure11_ledSet10_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side0_cam0_measure11_ledSet10_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side0_cam0_measure11_ledSet10_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side0_cam0_measure11_ledSet10_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side0_cam0_measure11_ledSet10_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side0_cam0_measure12_ledSet11_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side0_cam0_measure12_ledSet11_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side0_cam0_measure12_ledSet11_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side0_cam0_measure12_ledSet11_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side0_cam0_measure12_ledSet11_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side0_cam0_measure12_ledSet11_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side0_cam0_measure12_ledSet11_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side0_cam0_measure12_ledSet11_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side0_cam0_measure12_ledSet11_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side0_cam0_measure12_ledSet11_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side0_cam0_measure13_ledSet12_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side0_cam0_measure13_ledSet12_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side0_cam0_measure13_ledSet12_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side0_cam0_measure13_ledSet12_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side0_cam0_measure13_ledSet12_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side0_cam0_measure13_ledSet12_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side0_cam0_measure13_ledSet12_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side0_cam0_measure13_ledSet12_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side0_cam0_measure13_ledSet12_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side0_cam0_measure13_ledSet12_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side0_cam0_measure14_ledSet13_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side0_cam0_measure14_ledSet13_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side0_cam0_measure14_ledSet13_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side0_cam0_measure14_ledSet13_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side0_cam0_measure14_ledSet13_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side0_cam0_measure14_ledSet13_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side0_cam0_measure14_ledSet13_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side0_cam0_measure14_ledSet13_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side0_cam0_measure14_ledSet13_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side0_cam0_measure14_ledSet13_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side0_cam0_measure15_ledSet14_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side0_cam0_measure15_ledSet14_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side0_cam0_measure15_ledSet14_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side0_cam0_measure15_ledSet14_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side0_cam0_measure15_ledSet14_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side0_cam0_measure15_ledSet14_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side0_cam0_measure15_ledSet14_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side0_cam0_measure15_ledSet14_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side0_cam0_measure15_ledSet14_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side0_cam0_measure15_ledSet14_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side0_cam0_measure16_ledSet15_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side0_cam0_measure16_ledSet15_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side0_cam0_measure16_ledSet15_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side0_cam0_measure16_ledSet15_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side0_cam0_measure16_ledSet15_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side0_cam0_measure16_ledSet15_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side0_cam0_measure16_ledSet15_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side0_cam0_measure16_ledSet15_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side0_cam0_measure16_ledSet15_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side0_cam0_measure16_ledSet15_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side0_cam0_measure17_ledSet16_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side0_cam0_measure17_ledSet16_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side0_cam0_measure17_ledSet16_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side0_cam0_measure17_ledSet16_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side0_cam0_measure17_ledSet16_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side0_cam0_measure17_ledSet16_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side0_cam0_measure17_ledSet16_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side0_cam0_measure17_ledSet16_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side0_cam0_measure17_ledSet16_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side0_cam0_measure17_ledSet16_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side0_cam0_measure18_ledSet17_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side0_cam0_measure18_ledSet17_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side0_cam0_measure18_ledSet17_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side0_cam0_measure18_ledSet17_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side0_cam0_measure18_ledSet17_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side0_cam0_measure18_ledSet17_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side0_cam0_measure18_ledSet17_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side0_cam0_measure18_ledSet17_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side0_cam0_measure18_ledSet17_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side0_cam0_measure18_ledSet17_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side0_cam0_measure19_ledSet18_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side0_cam0_measure19_ledSet18_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side0_cam0_measure19_ledSet18_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side0_cam0_measure19_ledSet18_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side0_cam0_measure19_ledSet18_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side0_cam0_measure19_ledSet18_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side0_cam0_measure19_ledSet18_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side0_cam0_measure19_ledSet18_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side0_cam0_measure19_ledSet18_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side0_cam0_measure19_ledSet18_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp2500_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side0_cam0_measure1_ledSet0_exp2500_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp5000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side0_cam0_measure1_ledSet0_exp5000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side0_cam0_measure20_ledSet19_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side0_cam0_measure20_ledSet19_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side0_cam0_measure20_ledSet19_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side0_cam0_measure20_ledSet19_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side0_cam0_measure20_ledSet19_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side0_cam0_measure20_ledSet19_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side0_cam0_measure20_ledSet19_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side0_cam0_measure20_ledSet19_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side0_cam0_measure20_ledSet19_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side0_cam0_measure20_ledSet19_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side0_cam0_measure21_ledSet20_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side0_cam0_measure21_ledSet20_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side0_cam0_measure21_ledSet20_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side0_cam0_measure21_ledSet20_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side0_cam0_measure21_ledSet20_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side0_cam0_measure21_ledSet20_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side0_cam0_measure21_ledSet20_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side0_cam0_measure21_ledSet20_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side0_cam0_measure21_ledSet20_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side0_cam0_measure21_ledSet20_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side0_cam0_measure22_ledSet21_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side0_cam0_measure22_ledSet21_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side0_cam0_measure22_ledSet21_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side0_cam0_measure22_ledSet21_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side0_cam0_measure22_ledSet21_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side0_cam0_measure22_ledSet21_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side0_cam0_measure22_ledSet21_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side0_cam0_measure22_ledSet21_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side0_cam0_measure22_ledSet21_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side0_cam0_measure22_ledSet21_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side0_cam0_measure23_ledSet22_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side0_cam0_measure23_ledSet22_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side0_cam0_measure23_ledSet22_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side0_cam0_measure23_ledSet22_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side0_cam0_measure23_ledSet22_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side0_cam0_measure23_ledSet22_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side0_cam0_measure23_ledSet22_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side0_cam0_measure23_ledSet22_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side0_cam0_measure23_ledSet22_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side0_cam0_measure23_ledSet22_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side0_cam0_measure24_ledSet23_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side0_cam0_measure24_ledSet23_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side0_cam0_measure24_ledSet23_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side0_cam0_measure24_ledSet23_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side0_cam0_measure24_ledSet23_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side0_cam0_measure24_ledSet23_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side0_cam0_measure24_ledSet23_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side0_cam0_measure24_ledSet23_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side0_cam0_measure24_ledSet23_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side0_cam0_measure24_ledSet23_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side0_cam0_measure25_ledSet24_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side0_cam0_measure25_ledSet24_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side0_cam0_measure25_ledSet24_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side0_cam0_measure25_ledSet24_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side0_cam0_measure25_ledSet24_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side0_cam0_measure25_ledSet24_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side0_cam0_measure25_ledSet24_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side0_cam0_measure25_ledSet24_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side0_cam0_measure25_ledSet24_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side0_cam0_measure25_ledSet24_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side0_cam0_measure2_ledSet1_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side0_cam0_measure2_ledSet1_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side0_cam0_measure2_ledSet1_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side0_cam0_measure2_ledSet1_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side0_cam0_measure2_ledSet1_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side0_cam0_measure2_ledSet1_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side0_cam0_measure2_ledSet1_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side0_cam0_measure2_ledSet1_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side0_cam0_measure2_ledSet1_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side0_cam0_measure2_ledSet1_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side0_cam0_measure3_ledSet2_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side0_cam0_measure3_ledSet2_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side0_cam0_measure3_ledSet2_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side0_cam0_measure3_ledSet2_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side0_cam0_measure3_ledSet2_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side0_cam0_measure3_ledSet2_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side0_cam0_measure3_ledSet2_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side0_cam0_measure3_ledSet2_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side0_cam0_measure3_ledSet2_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side0_cam0_measure3_ledSet2_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side0_cam0_measure4_ledSet3_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side0_cam0_measure4_ledSet3_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side0_cam0_measure4_ledSet3_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side0_cam0_measure4_ledSet3_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side0_cam0_measure4_ledSet3_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side0_cam0_measure4_ledSet3_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side0_cam0_measure4_ledSet3_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side0_cam0_measure4_ledSet3_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side0_cam0_measure4_ledSet3_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side0_cam0_measure4_ledSet3_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side0_cam0_measure5_ledSet4_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side0_cam0_measure5_ledSet4_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side0_cam0_measure5_ledSet4_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side0_cam0_measure5_ledSet4_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side0_cam0_measure5_ledSet4_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side0_cam0_measure5_ledSet4_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side0_cam0_measure5_ledSet4_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side0_cam0_measure5_ledSet4_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side0_cam0_measure5_ledSet4_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side0_cam0_measure5_ledSet4_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side0_cam0_measure6_ledSet5_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side0_cam0_measure6_ledSet5_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side0_cam0_measure6_ledSet5_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side0_cam0_measure6_ledSet5_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side0_cam0_measure6_ledSet5_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side0_cam0_measure6_ledSet5_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side0_cam0_measure6_ledSet5_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side0_cam0_measure6_ledSet5_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side0_cam0_measure6_ledSet5_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side0_cam0_measure6_ledSet5_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side0_cam0_measure7_ledSet6_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side0_cam0_measure7_ledSet6_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side0_cam0_measure7_ledSet6_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side0_cam0_measure7_ledSet6_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side0_cam0_measure7_ledSet6_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side0_cam0_measure7_ledSet6_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side0_cam0_measure7_ledSet6_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side0_cam0_measure7_ledSet6_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side0_cam0_measure7_ledSet6_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side0_cam0_measure7_ledSet6_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side0_cam0_measure8_ledSet7_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side0_cam0_measure8_ledSet7_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side0_cam0_measure8_ledSet7_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side0_cam0_measure8_ledSet7_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side0_cam0_measure8_ledSet7_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side0_cam0_measure8_ledSet7_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side0_cam0_measure8_ledSet7_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side0_cam0_measure8_ledSet7_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side0_cam0_measure8_ledSet7_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side0_cam0_measure8_ledSet7_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side0_cam0_measure9_ledSet8_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side0_cam0_measure9_ledSet8_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side0_cam0_measure9_ledSet8_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side0_cam0_measure9_ledSet8_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side0_cam0_measure9_ledSet8_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side0_cam0_measure9_ledSet8_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side0_cam0_measure9_ledSet8_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side0_cam0_measure9_ledSet8_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side0_cam0_measure9_ledSet8_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side0_cam0_measure9_ledSet8_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side0_cam1_measure26_ledSet0_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp125_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side0_cam1_measure26_ledSet0_exp125_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side0_cam1_measure26_ledSet0_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp250_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side0_cam1_measure26_ledSet0_exp250_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp500_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side0_cam1_measure26_ledSet0_exp500_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side1_cam0_measure10_ledSet9_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side1_cam0_measure10_ledSet9_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side1_cam0_measure10_ledSet9_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side1_cam0_measure10_ledSet9_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side1_cam0_measure10_ledSet9_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side1_cam0_measure10_ledSet9_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side1_cam0_measure10_ledSet9_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side1_cam0_measure10_ledSet9_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side1_cam0_measure10_ledSet9_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side1_cam0_measure10_ledSet9_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side1_cam0_measure11_ledSet10_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side1_cam0_measure11_ledSet10_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side1_cam0_measure11_ledSet10_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side1_cam0_measure11_ledSet10_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side1_cam0_measure11_ledSet10_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side1_cam0_measure11_ledSet10_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side1_cam0_measure11_ledSet10_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side1_cam0_measure11_ledSet10_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side1_cam0_measure11_ledSet10_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side1_cam0_measure11_ledSet10_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side1_cam0_measure12_ledSet11_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side1_cam0_measure12_ledSet11_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side1_cam0_measure12_ledSet11_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side1_cam0_measure12_ledSet11_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side1_cam0_measure12_ledSet11_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side1_cam0_measure12_ledSet11_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side1_cam0_measure12_ledSet11_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side1_cam0_measure12_ledSet11_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side1_cam0_measure12_ledSet11_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side1_cam0_measure12_ledSet11_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side1_cam0_measure13_ledSet12_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side1_cam0_measure13_ledSet12_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side1_cam0_measure13_ledSet12_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side1_cam0_measure13_ledSet12_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side1_cam0_measure13_ledSet12_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side1_cam0_measure13_ledSet12_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side1_cam0_measure13_ledSet12_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side1_cam0_measure13_ledSet12_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side1_cam0_measure13_ledSet12_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side1_cam0_measure13_ledSet12_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side1_cam0_measure14_ledSet13_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side1_cam0_measure14_ledSet13_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side1_cam0_measure14_ledSet13_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side1_cam0_measure14_ledSet13_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side1_cam0_measure14_ledSet13_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side1_cam0_measure14_ledSet13_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side1_cam0_measure14_ledSet13_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side1_cam0_measure14_ledSet13_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side1_cam0_measure14_ledSet13_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side1_cam0_measure14_ledSet13_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side1_cam0_measure15_ledSet14_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side1_cam0_measure15_ledSet14_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side1_cam0_measure15_ledSet14_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side1_cam0_measure15_ledSet14_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side1_cam0_measure15_ledSet14_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side1_cam0_measure15_ledSet14_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side1_cam0_measure15_ledSet14_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side1_cam0_measure15_ledSet14_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side1_cam0_measure15_ledSet14_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side1_cam0_measure15_ledSet14_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side1_cam0_measure16_ledSet15_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side1_cam0_measure16_ledSet15_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side1_cam0_measure16_ledSet15_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side1_cam0_measure16_ledSet15_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side1_cam0_measure16_ledSet15_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side1_cam0_measure16_ledSet15_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side1_cam0_measure16_ledSet15_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side1_cam0_measure16_ledSet15_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side1_cam0_measure16_ledSet15_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side1_cam0_measure16_ledSet15_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side1_cam0_measure17_ledSet16_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side1_cam0_measure17_ledSet16_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side1_cam0_measure17_ledSet16_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side1_cam0_measure17_ledSet16_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side1_cam0_measure17_ledSet16_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side1_cam0_measure17_ledSet16_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side1_cam0_measure17_ledSet16_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side1_cam0_measure17_ledSet16_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side1_cam0_measure17_ledSet16_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side1_cam0_measure17_ledSet16_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side1_cam0_measure18_ledSet17_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side1_cam0_measure18_ledSet17_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side1_cam0_measure18_ledSet17_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side1_cam0_measure18_ledSet17_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side1_cam0_measure18_ledSet17_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side1_cam0_measure18_ledSet17_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side1_cam0_measure18_ledSet17_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side1_cam0_measure18_ledSet17_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side1_cam0_measure18_ledSet17_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side1_cam0_measure18_ledSet17_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side1_cam0_measure19_ledSet18_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side1_cam0_measure19_ledSet18_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side1_cam0_measure19_ledSet18_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side1_cam0_measure19_ledSet18_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side1_cam0_measure19_ledSet18_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side1_cam0_measure19_ledSet18_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side1_cam0_measure19_ledSet18_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side1_cam0_measure19_ledSet18_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side1_cam0_measure19_ledSet18_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side1_cam0_measure19_ledSet18_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp2500_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side1_cam0_measure1_ledSet0_exp2500_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp5000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side1_cam0_measure1_ledSet0_exp5000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side1_cam0_measure20_ledSet19_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side1_cam0_measure20_ledSet19_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side1_cam0_measure20_ledSet19_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side1_cam0_measure20_ledSet19_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side1_cam0_measure20_ledSet19_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side1_cam0_measure20_ledSet19_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side1_cam0_measure20_ledSet19_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side1_cam0_measure20_ledSet19_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side1_cam0_measure20_ledSet19_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side1_cam0_measure20_ledSet19_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side1_cam0_measure21_ledSet20_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side1_cam0_measure21_ledSet20_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side1_cam0_measure21_ledSet20_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side1_cam0_measure21_ledSet20_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side1_cam0_measure21_ledSet20_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side1_cam0_measure21_ledSet20_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side1_cam0_measure21_ledSet20_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side1_cam0_measure21_ledSet20_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side1_cam0_measure21_ledSet20_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side1_cam0_measure21_ledSet20_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side1_cam0_measure22_ledSet21_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side1_cam0_measure22_ledSet21_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side1_cam0_measure22_ledSet21_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side1_cam0_measure22_ledSet21_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side1_cam0_measure22_ledSet21_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side1_cam0_measure22_ledSet21_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side1_cam0_measure22_ledSet21_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side1_cam0_measure22_ledSet21_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side1_cam0_measure22_ledSet21_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side1_cam0_measure22_ledSet21_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side1_cam0_measure23_ledSet22_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side1_cam0_measure23_ledSet22_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side1_cam0_measure23_ledSet22_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side1_cam0_measure23_ledSet22_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side1_cam0_measure23_ledSet22_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side1_cam0_measure23_ledSet22_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side1_cam0_measure23_ledSet22_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side1_cam0_measure23_ledSet22_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side1_cam0_measure23_ledSet22_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side1_cam0_measure23_ledSet22_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side1_cam0_measure24_ledSet23_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side1_cam0_measure24_ledSet23_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side1_cam0_measure24_ledSet23_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side1_cam0_measure24_ledSet23_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side1_cam0_measure24_ledSet23_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side1_cam0_measure24_ledSet23_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side1_cam0_measure24_ledSet23_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side1_cam0_measure24_ledSet23_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side1_cam0_measure24_ledSet23_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side1_cam0_measure24_ledSet23_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side1_cam0_measure25_ledSet24_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side1_cam0_measure25_ledSet24_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side1_cam0_measure25_ledSet24_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side1_cam0_measure25_ledSet24_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side1_cam0_measure25_ledSet24_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side1_cam0_measure25_ledSet24_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side1_cam0_measure25_ledSet24_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side1_cam0_measure25_ledSet24_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side1_cam0_measure25_ledSet24_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side1_cam0_measure25_ledSet24_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side1_cam0_measure2_ledSet1_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side1_cam0_measure2_ledSet1_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side1_cam0_measure2_ledSet1_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side1_cam0_measure2_ledSet1_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side1_cam0_measure2_ledSet1_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side1_cam0_measure2_ledSet1_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side1_cam0_measure2_ledSet1_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side1_cam0_measure2_ledSet1_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side1_cam0_measure2_ledSet1_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side1_cam0_measure2_ledSet1_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side1_cam0_measure3_ledSet2_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side1_cam0_measure3_ledSet2_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side1_cam0_measure3_ledSet2_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side1_cam0_measure3_ledSet2_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side1_cam0_measure3_ledSet2_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side1_cam0_measure3_ledSet2_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side1_cam0_measure3_ledSet2_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side1_cam0_measure3_ledSet2_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side1_cam0_measure3_ledSet2_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side1_cam0_measure3_ledSet2_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side1_cam0_measure4_ledSet3_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side1_cam0_measure4_ledSet3_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side1_cam0_measure4_ledSet3_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side1_cam0_measure4_ledSet3_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side1_cam0_measure4_ledSet3_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side1_cam0_measure4_ledSet3_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side1_cam0_measure4_ledSet3_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side1_cam0_measure4_ledSet3_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side1_cam0_measure4_ledSet3_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side1_cam0_measure4_ledSet3_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side1_cam0_measure5_ledSet4_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side1_cam0_measure5_ledSet4_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side1_cam0_measure5_ledSet4_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side1_cam0_measure5_ledSet4_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side1_cam0_measure5_ledSet4_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side1_cam0_measure5_ledSet4_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side1_cam0_measure5_ledSet4_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side1_cam0_measure5_ledSet4_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side1_cam0_measure5_ledSet4_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side1_cam0_measure5_ledSet4_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side1_cam0_measure6_ledSet5_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side1_cam0_measure6_ledSet5_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side1_cam0_measure6_ledSet5_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side1_cam0_measure6_ledSet5_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side1_cam0_measure6_ledSet5_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side1_cam0_measure6_ledSet5_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side1_cam0_measure6_ledSet5_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side1_cam0_measure6_ledSet5_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side1_cam0_measure6_ledSet5_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side1_cam0_measure6_ledSet5_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side1_cam0_measure7_ledSet6_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side1_cam0_measure7_ledSet6_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side1_cam0_measure7_ledSet6_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side1_cam0_measure7_ledSet6_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side1_cam0_measure7_ledSet6_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side1_cam0_measure7_ledSet6_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side1_cam0_measure7_ledSet6_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side1_cam0_measure7_ledSet6_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side1_cam0_measure7_ledSet6_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side1_cam0_measure7_ledSet6_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side1_cam0_measure8_ledSet7_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side1_cam0_measure8_ledSet7_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side1_cam0_measure8_ledSet7_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side1_cam0_measure8_ledSet7_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side1_cam0_measure8_ledSet7_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side1_cam0_measure8_ledSet7_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side1_cam0_measure8_ledSet7_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side1_cam0_measure8_ledSet7_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side1_cam0_measure8_ledSet7_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side1_cam0_measure8_ledSet7_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side1_cam0_measure9_ledSet8_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp128000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side1_cam0_measure9_ledSet8_exp128000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp16000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side1_cam0_measure9_ledSet8_exp16000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side1_cam0_measure9_ledSet8_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp256000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side1_cam0_measure9_ledSet8_exp256000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp32000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side1_cam0_measure9_ledSet8_exp32000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp4000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side1_cam0_measure9_ledSet8_exp4000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp512000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side1_cam0_measure9_ledSet8_exp512000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp64000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side1_cam0_measure9_ledSet8_exp64000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp8000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side1_cam0_measure9_ledSet8_exp8000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp1000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side1_cam1_measure26_ledSet0_exp1000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp125_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side1_cam1_measure26_ledSet0_exp125_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp2000_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side1_cam1_measure26_ledSet0_exp2000_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp250_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side1_cam1_measure26_ledSet0_exp250_setup)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp500_setup",
        "parent": "http://objects.mainzed.org/ont#MeasurementSetup",
        "type": "instance",
        "text": "Measurement Setup for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side1_cam1_measure26_ledSet0_exp500_setup)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementSetup",
        "parent": "#",
        "type": "class",
        "text": "MeasurementSetup (ns2:MeasurementSetup) [494]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "http://www.w3.org/2003/12/exif/exposureTime": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#M_shutter_time0": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#setup": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#Measurement": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side0_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side0_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side0_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side0_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side0_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side0_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side0_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side0_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side0_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side0_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side0_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side0_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side0_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side0_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side0_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side0_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side0_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side0_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side0_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side0_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side0_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side0_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side0_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side0_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side0_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side0_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side0_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side0_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side0_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side0_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side0_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side0_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side0_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side0_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side0_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side0_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side0_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side0_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side0_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side0_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side0_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side0_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side0_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side0_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side0_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side0_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side0_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side0_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side0_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side0_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side0_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side0_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side0_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side0_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side0_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side0_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side0_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side0_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side0_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side0_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side0_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side0_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side0_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side0_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side0_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side0_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side0_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side0_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side0_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side0_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side0_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side0_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side0_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side0_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side0_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side0_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side0_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side0_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side0_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side0_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side0_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side0_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side0_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side0_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side0_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side0_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side0_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side0_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side0_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side0_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side0_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side0_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side0_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side0_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side0_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side0_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side0_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side0_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side0_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side0_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side0_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side0_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side0_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side0_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side0_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side0_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side0_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side0_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side0_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side0_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side0_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side0_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side0_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side0_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side0_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side0_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side0_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side0_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side0_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side0_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side0_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side0_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side0_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side0_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side0_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side0_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side0_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side0_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side0_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side0_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side0_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side0_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side0_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side0_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side0_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side0_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side0_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side0_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side0_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side0_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side0_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side0_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side0_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side0_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side0_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side0_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side0_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side0_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side0_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side0_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side0_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side0_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side0_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side0_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side0_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side0_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side0_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side0_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side0_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side0_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side0_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side0_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side0_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side0_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side0_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side0_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side0_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side0_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side0_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side0_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side0_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side0_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side0_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side0_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side0_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side0_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side0_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side0_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side0_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side0_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side0_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side0_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side0_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side0_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side0_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side0_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side0_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side0_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side0_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side0_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side0_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side0_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side0_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side0_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side0_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side0_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side0_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side0_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side0_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side0_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side0_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side0_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side0_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side0_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side0_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side0_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side0_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side0_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side0_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side0_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side0_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side0_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side0_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side0_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side0_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side0_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side0_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side0_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side0_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side0_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side0_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side0_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side0_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side0_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side0_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side0_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side0_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side0_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side0_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side0_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side0_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side0_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side0_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side0_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side0_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side0_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side0_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side0_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side0_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side0_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side0_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side0_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side0_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp125_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side0_cam1_measure26_ledSet0_exp125_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side0_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp250_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side0_cam1_measure26_ledSet0_exp250_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp500_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side0_cam1_measure26_ledSet0_exp500_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side1_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side1_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side1_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side1_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side1_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side1_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side1_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side1_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side1_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side1_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side1_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side1_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side1_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side1_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side1_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side1_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side1_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side1_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side1_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side1_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side1_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side1_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side1_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side1_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side1_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side1_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side1_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side1_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side1_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side1_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side1_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side1_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side1_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side1_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side1_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side1_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side1_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side1_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side1_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side1_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side1_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side1_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side1_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side1_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side1_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side1_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side1_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side1_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side1_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side1_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side1_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side1_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side1_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side1_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side1_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side1_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side1_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side1_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side1_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side1_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side1_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side1_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side1_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side1_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side1_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side1_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side1_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side1_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side1_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side1_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side1_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side1_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side1_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side1_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side1_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side1_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side1_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side1_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side1_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side1_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side1_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side1_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side1_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side1_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side1_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side1_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side1_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side1_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side1_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side1_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side1_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side1_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side1_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side1_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side1_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side1_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side1_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side1_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side1_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side1_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side1_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side1_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side1_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side1_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side1_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side1_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side1_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side1_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side1_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side1_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side1_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side1_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side1_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side1_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side1_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side1_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side1_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side1_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side1_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side1_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side1_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side1_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side1_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side1_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side1_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side1_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side1_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side1_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side1_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side1_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side1_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side1_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side1_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side1_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side1_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side1_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side1_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side1_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side1_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side1_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side1_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side1_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side1_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side1_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side1_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side1_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side1_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side1_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side1_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side1_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side1_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side1_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side1_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side1_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side1_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side1_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side1_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side1_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side1_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side1_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side1_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side1_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side1_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side1_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side1_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side1_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side1_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side1_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side1_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side1_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side1_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side1_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side1_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side1_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side1_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side1_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side1_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side1_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side1_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side1_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side1_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side1_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side1_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side1_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side1_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side1_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side1_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side1_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side1_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side1_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side1_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side1_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side1_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side1_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side1_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side1_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side1_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side1_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side1_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side1_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side1_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side1_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side1_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side1_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side1_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side1_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side1_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side1_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side1_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side1_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side1_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side1_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side1_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side1_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side1_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side1_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side1_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side1_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side1_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side1_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side1_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side1_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side1_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side1_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side1_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side1_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side1_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side1_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side1_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side1_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side1_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side1_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side1_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side1_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side1_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side1_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side1_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side1_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side1_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side1_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side1_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side1_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side1_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp125_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side1_cam1_measure26_ledSet0_exp125_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side1_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp250_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side1_cam1_measure26_ledSet0_exp250_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp500_setup_shutterTime_1",
        "parent": "http://objects.mainzed.org/ont#M_shutter_time0",
        "type": "instance",
        "text": "Shutter Time Measure for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side1_cam1_measure26_ledSet0_exp500_setup_shutterTime_1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#M_shutter_time0",
        "parent": "#",
        "type": "class",
        "text": "M_shutter_time0 (ns2:M_shutter_time0) [494]",
        "data": {
          "to": {
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue": {
              "instancecount": 1,
              "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.w3.org/2003/12/exif/exposureTime": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#MeasurementSetup": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side0_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side0_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side0_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side0_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side0_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side0_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side0_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side0_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side0_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side0_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side0_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side0_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side0_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side0_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side0_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side0_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side0_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side0_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side0_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side0_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side0_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side0_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side0_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side0_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side0_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side0_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side0_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side0_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side0_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side0_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side0_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side0_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side0_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side0_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side0_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side0_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side0_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side0_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side0_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side0_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side0_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side0_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side0_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side0_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side0_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side0_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side0_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side0_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side0_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side0_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side0_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side0_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side0_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side0_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side0_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side0_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side0_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side0_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side0_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side0_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side0_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side0_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side0_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side0_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side0_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side0_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side0_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side0_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side0_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side0_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side0_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side0_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side0_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side0_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side0_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side0_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side0_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side0_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side0_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side0_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side0_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side0_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side0_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side0_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side0_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side0_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side0_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side0_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side0_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side0_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side0_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side0_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side0_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side0_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side0_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side0_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side0_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side0_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side0_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side0_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side0_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side0_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side0_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side0_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side0_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side0_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side0_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side0_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side0_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side0_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side0_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side0_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side0_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side0_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side0_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side0_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side0_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side0_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side0_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side0_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side0_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side0_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side0_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side0_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side0_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side0_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side0_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side0_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side0_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side0_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side0_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side0_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side0_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side0_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side0_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side0_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side0_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side0_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side0_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side0_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side0_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side0_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side0_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side0_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side0_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side0_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side0_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side0_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side0_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side0_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side0_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side0_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side0_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side0_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side0_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side0_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side0_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side0_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side0_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side0_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side0_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side0_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side0_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side0_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side0_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side0_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side0_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side0_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side0_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side0_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side0_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side0_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side0_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side0_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side0_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side0_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side0_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side0_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side0_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side0_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side0_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side0_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side0_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side0_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side0_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side0_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side0_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side0_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side0_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side0_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side0_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side0_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side0_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side0_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side0_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side0_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side0_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side0_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side0_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side0_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side0_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side0_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side0_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side0_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side0_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side0_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side0_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side0_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side0_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side0_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side0_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side0_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side0_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side0_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side0_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side0_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side0_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side0_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side0_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side0_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side0_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side0_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side0_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side0_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side0_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side0_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side0_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side0_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side0_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side0_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side0_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side0_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side0_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side0_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side0_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side0_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side0_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side0_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side0_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side0_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side0_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side0_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side0_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp125_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side0_cam1_measure26_ledSet0_exp125_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side0_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp250_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side0_cam1_measure26_ledSet0_exp250_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side0_cam1_measure26_ledSet0_exp500_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side0_cam1_measure26_ledSet0_exp500_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 1000) (side1_cam0_measure10_ledSet9_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 128000) (side1_cam0_measure10_ledSet9_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 16000) (side1_cam0_measure10_ledSet9_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 2000) (side1_cam0_measure10_ledSet9_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 256000) (side1_cam0_measure10_ledSet9_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 32000) (side1_cam0_measure10_ledSet9_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 4000) (side1_cam0_measure10_ledSet9_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 512000) (side1_cam0_measure10_ledSet9_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 64000) (side1_cam0_measure10_ledSet9_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_10 (Camera 0 LED Set ledset_9 Exp 8000) (side1_cam0_measure10_ledSet9_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 1000) (side1_cam0_measure11_ledSet10_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 128000) (side1_cam0_measure11_ledSet10_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 16000) (side1_cam0_measure11_ledSet10_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 2000) (side1_cam0_measure11_ledSet10_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 256000) (side1_cam0_measure11_ledSet10_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 32000) (side1_cam0_measure11_ledSet10_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 4000) (side1_cam0_measure11_ledSet10_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 512000) (side1_cam0_measure11_ledSet10_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 64000) (side1_cam0_measure11_ledSet10_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_11 (Camera 0 LED Set ledset_10 Exp 8000) (side1_cam0_measure11_ledSet10_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 1000) (side1_cam0_measure12_ledSet11_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 128000) (side1_cam0_measure12_ledSet11_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 16000) (side1_cam0_measure12_ledSet11_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 2000) (side1_cam0_measure12_ledSet11_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 256000) (side1_cam0_measure12_ledSet11_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 32000) (side1_cam0_measure12_ledSet11_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 4000) (side1_cam0_measure12_ledSet11_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 512000) (side1_cam0_measure12_ledSet11_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 64000) (side1_cam0_measure12_ledSet11_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_12 (Camera 0 LED Set ledset_11 Exp 8000) (side1_cam0_measure12_ledSet11_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 1000) (side1_cam0_measure13_ledSet12_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 128000) (side1_cam0_measure13_ledSet12_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 16000) (side1_cam0_measure13_ledSet12_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 2000) (side1_cam0_measure13_ledSet12_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 256000) (side1_cam0_measure13_ledSet12_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 32000) (side1_cam0_measure13_ledSet12_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 4000) (side1_cam0_measure13_ledSet12_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 512000) (side1_cam0_measure13_ledSet12_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 64000) (side1_cam0_measure13_ledSet12_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_13 (Camera 0 LED Set ledset_12 Exp 8000) (side1_cam0_measure13_ledSet12_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 1000) (side1_cam0_measure14_ledSet13_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 128000) (side1_cam0_measure14_ledSet13_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 16000) (side1_cam0_measure14_ledSet13_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 2000) (side1_cam0_measure14_ledSet13_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 256000) (side1_cam0_measure14_ledSet13_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 32000) (side1_cam0_measure14_ledSet13_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 4000) (side1_cam0_measure14_ledSet13_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 512000) (side1_cam0_measure14_ledSet13_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 64000) (side1_cam0_measure14_ledSet13_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_14 (Camera 0 LED Set ledset_13 Exp 8000) (side1_cam0_measure14_ledSet13_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 1000) (side1_cam0_measure15_ledSet14_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 128000) (side1_cam0_measure15_ledSet14_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 16000) (side1_cam0_measure15_ledSet14_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 2000) (side1_cam0_measure15_ledSet14_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 256000) (side1_cam0_measure15_ledSet14_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 32000) (side1_cam0_measure15_ledSet14_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 4000) (side1_cam0_measure15_ledSet14_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 512000) (side1_cam0_measure15_ledSet14_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 64000) (side1_cam0_measure15_ledSet14_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_15 (Camera 0 LED Set ledset_14 Exp 8000) (side1_cam0_measure15_ledSet14_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 1000) (side1_cam0_measure16_ledSet15_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 128000) (side1_cam0_measure16_ledSet15_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 16000) (side1_cam0_measure16_ledSet15_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 2000) (side1_cam0_measure16_ledSet15_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 256000) (side1_cam0_measure16_ledSet15_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 32000) (side1_cam0_measure16_ledSet15_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 4000) (side1_cam0_measure16_ledSet15_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 512000) (side1_cam0_measure16_ledSet15_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 64000) (side1_cam0_measure16_ledSet15_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_16 (Camera 0 LED Set ledset_15 Exp 8000) (side1_cam0_measure16_ledSet15_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 1000) (side1_cam0_measure17_ledSet16_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 128000) (side1_cam0_measure17_ledSet16_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 16000) (side1_cam0_measure17_ledSet16_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 2000) (side1_cam0_measure17_ledSet16_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 256000) (side1_cam0_measure17_ledSet16_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 32000) (side1_cam0_measure17_ledSet16_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 4000) (side1_cam0_measure17_ledSet16_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 512000) (side1_cam0_measure17_ledSet16_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 64000) (side1_cam0_measure17_ledSet16_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_17 (Camera 0 LED Set ledset_16 Exp 8000) (side1_cam0_measure17_ledSet16_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 1000) (side1_cam0_measure18_ledSet17_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 128000) (side1_cam0_measure18_ledSet17_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 16000) (side1_cam0_measure18_ledSet17_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 2000) (side1_cam0_measure18_ledSet17_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 256000) (side1_cam0_measure18_ledSet17_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 32000) (side1_cam0_measure18_ledSet17_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 4000) (side1_cam0_measure18_ledSet17_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 512000) (side1_cam0_measure18_ledSet17_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 64000) (side1_cam0_measure18_ledSet17_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_18 (Camera 0 LED Set ledset_17 Exp 8000) (side1_cam0_measure18_ledSet17_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 1000) (side1_cam0_measure19_ledSet18_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 128000) (side1_cam0_measure19_ledSet18_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 16000) (side1_cam0_measure19_ledSet18_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 2000) (side1_cam0_measure19_ledSet18_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 256000) (side1_cam0_measure19_ledSet18_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 32000) (side1_cam0_measure19_ledSet18_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 4000) (side1_cam0_measure19_ledSet18_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 512000) (side1_cam0_measure19_ledSet18_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 64000) (side1_cam0_measure19_ledSet18_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_19 (Camera 0 LED Set ledset_18 Exp 8000) (side1_cam0_measure19_ledSet18_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 2500) (side1_cam0_measure1_ledSet0_exp2500_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_1 (Camera 0 LED Set ledset_0 Exp 5000) (side1_cam0_measure1_ledSet0_exp5000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 1000) (side1_cam0_measure20_ledSet19_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 128000) (side1_cam0_measure20_ledSet19_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 16000) (side1_cam0_measure20_ledSet19_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 2000) (side1_cam0_measure20_ledSet19_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 256000) (side1_cam0_measure20_ledSet19_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 32000) (side1_cam0_measure20_ledSet19_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 4000) (side1_cam0_measure20_ledSet19_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 512000) (side1_cam0_measure20_ledSet19_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 64000) (side1_cam0_measure20_ledSet19_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_20 (Camera 0 LED Set ledset_19 Exp 8000) (side1_cam0_measure20_ledSet19_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 1000) (side1_cam0_measure21_ledSet20_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 128000) (side1_cam0_measure21_ledSet20_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 16000) (side1_cam0_measure21_ledSet20_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 2000) (side1_cam0_measure21_ledSet20_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 256000) (side1_cam0_measure21_ledSet20_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 32000) (side1_cam0_measure21_ledSet20_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 4000) (side1_cam0_measure21_ledSet20_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 512000) (side1_cam0_measure21_ledSet20_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 64000) (side1_cam0_measure21_ledSet20_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_21 (Camera 0 LED Set ledset_20 Exp 8000) (side1_cam0_measure21_ledSet20_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 1000) (side1_cam0_measure22_ledSet21_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 128000) (side1_cam0_measure22_ledSet21_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 16000) (side1_cam0_measure22_ledSet21_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 2000) (side1_cam0_measure22_ledSet21_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 256000) (side1_cam0_measure22_ledSet21_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 32000) (side1_cam0_measure22_ledSet21_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 4000) (side1_cam0_measure22_ledSet21_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 512000) (side1_cam0_measure22_ledSet21_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 64000) (side1_cam0_measure22_ledSet21_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_22 (Camera 0 LED Set ledset_21 Exp 8000) (side1_cam0_measure22_ledSet21_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 1000) (side1_cam0_measure23_ledSet22_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 128000) (side1_cam0_measure23_ledSet22_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 16000) (side1_cam0_measure23_ledSet22_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 2000) (side1_cam0_measure23_ledSet22_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 256000) (side1_cam0_measure23_ledSet22_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 32000) (side1_cam0_measure23_ledSet22_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 4000) (side1_cam0_measure23_ledSet22_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 512000) (side1_cam0_measure23_ledSet22_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 64000) (side1_cam0_measure23_ledSet22_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_23 (Camera 0 LED Set ledset_22 Exp 8000) (side1_cam0_measure23_ledSet22_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 1000) (side1_cam0_measure24_ledSet23_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 128000) (side1_cam0_measure24_ledSet23_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 16000) (side1_cam0_measure24_ledSet23_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 2000) (side1_cam0_measure24_ledSet23_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 256000) (side1_cam0_measure24_ledSet23_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 32000) (side1_cam0_measure24_ledSet23_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 4000) (side1_cam0_measure24_ledSet23_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 512000) (side1_cam0_measure24_ledSet23_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 64000) (side1_cam0_measure24_ledSet23_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_24 (Camera 0 LED Set ledset_23 Exp 8000) (side1_cam0_measure24_ledSet23_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 1000) (side1_cam0_measure25_ledSet24_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 128000) (side1_cam0_measure25_ledSet24_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 16000) (side1_cam0_measure25_ledSet24_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 2000) (side1_cam0_measure25_ledSet24_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 256000) (side1_cam0_measure25_ledSet24_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 32000) (side1_cam0_measure25_ledSet24_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 4000) (side1_cam0_measure25_ledSet24_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 512000) (side1_cam0_measure25_ledSet24_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 64000) (side1_cam0_measure25_ledSet24_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_25 (Camera 0 LED Set ledset_24 Exp 8000) (side1_cam0_measure25_ledSet24_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 1000) (side1_cam0_measure2_ledSet1_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 128000) (side1_cam0_measure2_ledSet1_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 16000) (side1_cam0_measure2_ledSet1_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 2000) (side1_cam0_measure2_ledSet1_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 256000) (side1_cam0_measure2_ledSet1_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 32000) (side1_cam0_measure2_ledSet1_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 4000) (side1_cam0_measure2_ledSet1_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 512000) (side1_cam0_measure2_ledSet1_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 64000) (side1_cam0_measure2_ledSet1_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_2 (Camera 0 LED Set ledset_1 Exp 8000) (side1_cam0_measure2_ledSet1_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 1000) (side1_cam0_measure3_ledSet2_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 128000) (side1_cam0_measure3_ledSet2_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 16000) (side1_cam0_measure3_ledSet2_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 2000) (side1_cam0_measure3_ledSet2_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 256000) (side1_cam0_measure3_ledSet2_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 32000) (side1_cam0_measure3_ledSet2_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 4000) (side1_cam0_measure3_ledSet2_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 512000) (side1_cam0_measure3_ledSet2_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 64000) (side1_cam0_measure3_ledSet2_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_3 (Camera 0 LED Set ledset_2 Exp 8000) (side1_cam0_measure3_ledSet2_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 1000) (side1_cam0_measure4_ledSet3_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 128000) (side1_cam0_measure4_ledSet3_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 16000) (side1_cam0_measure4_ledSet3_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 2000) (side1_cam0_measure4_ledSet3_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 256000) (side1_cam0_measure4_ledSet3_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 32000) (side1_cam0_measure4_ledSet3_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 4000) (side1_cam0_measure4_ledSet3_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 512000) (side1_cam0_measure4_ledSet3_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 64000) (side1_cam0_measure4_ledSet3_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_4 (Camera 0 LED Set ledset_3 Exp 8000) (side1_cam0_measure4_ledSet3_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 1000) (side1_cam0_measure5_ledSet4_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 128000) (side1_cam0_measure5_ledSet4_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 16000) (side1_cam0_measure5_ledSet4_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 2000) (side1_cam0_measure5_ledSet4_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 256000) (side1_cam0_measure5_ledSet4_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 32000) (side1_cam0_measure5_ledSet4_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 4000) (side1_cam0_measure5_ledSet4_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 512000) (side1_cam0_measure5_ledSet4_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 64000) (side1_cam0_measure5_ledSet4_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_5 (Camera 0 LED Set ledset_4 Exp 8000) (side1_cam0_measure5_ledSet4_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 1000) (side1_cam0_measure6_ledSet5_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 128000) (side1_cam0_measure6_ledSet5_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 16000) (side1_cam0_measure6_ledSet5_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 2000) (side1_cam0_measure6_ledSet5_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 256000) (side1_cam0_measure6_ledSet5_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 32000) (side1_cam0_measure6_ledSet5_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 4000) (side1_cam0_measure6_ledSet5_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 512000) (side1_cam0_measure6_ledSet5_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 64000) (side1_cam0_measure6_ledSet5_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_6 (Camera 0 LED Set ledset_5 Exp 8000) (side1_cam0_measure6_ledSet5_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 1000) (side1_cam0_measure7_ledSet6_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 128000) (side1_cam0_measure7_ledSet6_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 16000) (side1_cam0_measure7_ledSet6_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 2000) (side1_cam0_measure7_ledSet6_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 256000) (side1_cam0_measure7_ledSet6_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 32000) (side1_cam0_measure7_ledSet6_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 4000) (side1_cam0_measure7_ledSet6_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 512000) (side1_cam0_measure7_ledSet6_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 64000) (side1_cam0_measure7_ledSet6_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_7 (Camera 0 LED Set ledset_6 Exp 8000) (side1_cam0_measure7_ledSet6_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 1000) (side1_cam0_measure8_ledSet7_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 128000) (side1_cam0_measure8_ledSet7_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 16000) (side1_cam0_measure8_ledSet7_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 2000) (side1_cam0_measure8_ledSet7_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 256000) (side1_cam0_measure8_ledSet7_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 32000) (side1_cam0_measure8_ledSet7_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 4000) (side1_cam0_measure8_ledSet7_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 512000) (side1_cam0_measure8_ledSet7_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 64000) (side1_cam0_measure8_ledSet7_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_8 (Camera 0 LED Set ledset_7 Exp 8000) (side1_cam0_measure8_ledSet7_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 1000) (side1_cam0_measure9_ledSet8_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 128000) (side1_cam0_measure9_ledSet8_exp128000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 16000) (side1_cam0_measure9_ledSet8_exp16000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 2000) (side1_cam0_measure9_ledSet8_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 256000) (side1_cam0_measure9_ledSet8_exp256000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 32000) (side1_cam0_measure9_ledSet8_exp32000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 4000) (side1_cam0_measure9_ledSet8_exp4000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 512000) (side1_cam0_measure9_ledSet8_exp512000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 64000) (side1_cam0_measure9_ledSet8_exp64000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_9 (Camera 0 LED Set ledset_8 Exp 8000) (side1_cam0_measure9_ledSet8_exp8000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 1000) (side1_cam1_measure26_ledSet0_exp1000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp125_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 125) (side1_cam1_measure26_ledSet0_exp125_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 2000) (side1_cam1_measure26_ledSet0_exp2000_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp250_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 250) (side1_cam1_measure26_ledSet0_exp250_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/side1_cam1_measure26_ledSet0_exp500_setup_shutterTime_1_value",
        "parent": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "type": "instance",
        "text": "Shutter Time Measure Value for Measurement measure_26 (Camera 1 LED Set ledset_0 Exp 500) (side1_cam1_measure26_ledSet0_exp500_setup_shutterTime_1_value)",
        "data": {}
      },
      {
        "id": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure",
        "parent": "#",
        "type": "class",
        "text": "Measure (om:Measure) [494]",
        "data": {
          "to": {
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasNumericalValue": {
              "instancecount": 1
            },
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#M_shutter_time0": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "http://i3mainz.de/metadata/50-0503522879",
        "parent": "http://objects.mainzed.org/ont#Camera",
        "type": "instance",
        "text": "Manta G-507B (50-0503522879)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/50-0503522880",
        "parent": "http://objects.mainzed.org/ont#Camera",
        "type": "instance",
        "text": "Manta G-2040C (50-0503522880)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#Camera",
        "parent": "#",
        "type": "class",
        "text": "Camera (ns2:Camera) [2]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#cameraPosition": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#usesCamera": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#Measurement": 484
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://objects.mainzed.org/ont#Mono8",
        "parent": "http://objects.mainzed.org/ont#PixelType",
        "type": "instance",
        "text": "Mono8 (ns2:Mono8)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#BayerGR8",
        "parent": "http://objects.mainzed.org/ont#PixelType",
        "type": "instance",
        "text": "BayerGR8 (ns2:BayerGR8)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#PixelType",
        "parent": "#",
        "type": "class",
        "text": "PixelType (ns2:PixelType) [2]",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_0",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_0 (ledset_0)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_1",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_1 (ledset_1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_10",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_10 (ledset_10)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_11",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_11 (ledset_11)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_12",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_12 (ledset_12)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_13",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_13 (ledset_13)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_14",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_14 (ledset_14)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_15",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_15 (ledset_15)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_16",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_16 (ledset_16)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_17",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_17 (ledset_17)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_18",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_18 (ledset_18)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_19",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_19 (ledset_19)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_2",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_2 (ledset_2)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_20",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_20 (ledset_20)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_21",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_21 (ledset_21)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_22",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_22 (ledset_22)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_23",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_23 (ledset_23)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_24",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_24 (ledset_24)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_3",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_3 (ledset_3)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_4",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_4 (ledset_4)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_5",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_5 (ledset_5)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_6",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_6 (ledset_6)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_7",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_7 (ledset_7)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_8",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_8 (ledset_8)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/ledset_9",
        "parent": "http://objects.mainzed.org/ont#LightSourceGroup",
        "type": "instance",
        "text": "LightSource Group ledset_9 (ledset_9)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#LightSourceGroup",
        "parent": "#",
        "type": "class",
        "text": "LightSourceGroup (ns2:LightSourceGroup) [25]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#hasLightSourceGroup": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#RTIScanner": 1
            },
            "http://objects.mainzed.org/ont#usesLightSourceGroup": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#Measurement": 20
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://i3mainz.de/metadata/capturing_device_1",
        "parent": "http://objects.mainzed.org/ont#RTIScanner",
        "type": "instance",
        "text": "RTI Scanner (capturing_device_1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#RTIScanner",
        "parent": "#",
        "type": "class",
        "text": "RTIScanner (ns2:RTIScanner) [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#hasComponent": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#RTIDome": 1
            },
            "http://objects.mainzed.org/ont#hasLightSourceGroup": {
              "instancecount": 25,
              "http://objects.mainzed.org/ont#LightSourceGroup": 25
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#capturingdevice": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#Measurement": 494
            }
          }
        },
        "instancecount": 28
      }
    ]
  }
}