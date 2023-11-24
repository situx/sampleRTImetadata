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
        "id": "http://i3mainz.de/metadata/PixelCoordinateSystem",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystem",
        "type": "instance",
        "text": "PixelCoordinateSystem",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/CoordinateSystem",
        "parent": "#",
        "type": "class",
        "text": "CoordinateSystem (geocrs:CoordinateSystem) [1]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/crs/axis": {
              "instancecount": 2,
              "http://www.opengis.net/ont/crs/CoordinateSystemAxis": 2
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://i3mainz.de/metadata/project1",
        "parent": "http://objects.mainzed.org/ont#MeasurementProject",
        "type": "instance",
        "text": "Measurement Project project1 (project1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementProject",
        "parent": "#",
        "type": "class",
        "text": "MeasurementProject (ns1:MeasurementProject) [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#measurementSeries": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#MeasurementSeries": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 3
      },
      {
        "id": "http://i3mainz.de/metadata/project1_sphere1",
        "parent": "http://objects.mainzed.org/ont#CalibrationObject",
        "type": "instance",
        "text": "project1 Calibration Sphere 1 (project1_sphere1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#CalibrationObject",
        "parent": "#",
        "type": "class",
        "text": "CalibrationObject (ns1:CalibrationObject) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 2
      },
      {
        "id": "http://i3mainz.de/metadata/1.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "1.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/10.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "10.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/11.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "11.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/12.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "12.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/13.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "13.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/14.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "14.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/15.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "15.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/16.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "16.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/17.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "17.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/18.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "18.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/19.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "19.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/2.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "2.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/20.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "20.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/21.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "21.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/22.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "22.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/23.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "23.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/24.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "24.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/25.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "25.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/26.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "26.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/27.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "27.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/28.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "28.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/29.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "29.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/3.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "3.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/30.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "30.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/31.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "31.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/32.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "32.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/33.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "33.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/34.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "34.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/35.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "35.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/36.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "36.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/37.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "37.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/38.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "38.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/39.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "39.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/4.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "4.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/40.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "40.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/41.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "41.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/42.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "42.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/43.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "43.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/44.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "44.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/45.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "45.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/46.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "46.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/47.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "47.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/48.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "48.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/49.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "49.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/5.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "5.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/50.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "50.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/51.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "51.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/52.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "52.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/53.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "53.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/54.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "54.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/55.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "55.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/56.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "56.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/57.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "57.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/58.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "58.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/59.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "59.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/6.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "6.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/60.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "60.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/7.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "7.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/8.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "8.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/9.JPG_suniv0_",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "geoinstance",
        "text": "9.JPG",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#Measurement",
        "parent": "#",
        "type": "geoclass",
        "text": "Measurement (ns1:Measurement) [60]",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/1.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "1.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/10.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "10.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/11.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "11.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/12.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "12.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/13.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "13.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/14.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "14.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/15.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "15.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/16.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "16.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/17.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "17.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/18.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "18.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/19.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "19.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/2.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "2.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/20.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "20.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/21.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "21.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/22.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "22.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/23.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "23.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/24.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "24.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/25.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "25.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/26.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "26.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/27.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "27.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/28.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "28.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/29.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "29.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/3.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "3.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/30.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "30.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/31.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "31.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/32.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "32.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/33.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "33.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/34.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "34.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/35.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "35.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/36.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "36.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/37.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "37.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/38.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "38.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/39.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "39.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/4.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "4.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/40.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "40.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/41.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "41.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/42.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "42.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/43.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "43.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/44.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "44.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/45.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "45.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/46.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "46.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/47.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "47.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/48.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "48.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/49.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "49.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/5.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "5.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/50.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "50.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/51.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "51.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/52.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "52.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/53.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "53.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/54.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "54.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/55.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "55.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/56.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "56.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/57.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "57.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/58.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "58.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/59.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "59.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/6.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "6.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/60.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "60.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/7.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "7.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/8.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "8.JPG",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/9.JPG_suniv1_",
        "parent": "http://purl.org/dc/terms/Image",
        "type": "geoinstance",
        "text": "9.JPG",
        "data": {}
      },
      {
        "id": "http://purl.org/dc/terms/Image",
        "parent": "#",
        "type": "geoclass",
        "text": "Image (terms:Image) [60]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#hasLightDirection": {
              "instancecount": 1,
              "http://objects.mainzed.org/ont#LightDirection": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#measurement": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#MeasurementSeries": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "http://i3mainz.de/metadata/1.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 1.JPG (1.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/10.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 10.JPG (10.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/11.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 11.JPG (11.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/12.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 12.JPG (12.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/13.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 13.JPG (13.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/14.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 14.JPG (14.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/15.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 15.JPG (15.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/16.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 16.JPG (16.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/17.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 17.JPG (17.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/18.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 18.JPG (18.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/19.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 19.JPG (19.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/2.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 2.JPG (2.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/20.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 20.JPG (20.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/21.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 21.JPG (21.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/22.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 22.JPG (22.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/23.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 23.JPG (23.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/24.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 24.JPG (24.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/25.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 25.JPG (25.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/26.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 26.JPG (26.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/27.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 27.JPG (27.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/28.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 28.JPG (28.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/29.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 29.JPG (29.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/3.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 3.JPG (3.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/30.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 30.JPG (30.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/31.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 31.JPG (31.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/32.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 32.JPG (32.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/33.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 33.JPG (33.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/34.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 34.JPG (34.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/35.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 35.JPG (35.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/36.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 36.JPG (36.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/37.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 37.JPG (37.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/38.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 38.JPG (38.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/39.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 39.JPG (39.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/4.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 4.JPG (4.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/40.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 40.JPG (40.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/41.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 41.JPG (41.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/42.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 42.JPG (42.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/43.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 43.JPG (43.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/44.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 44.JPG (44.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/45.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 45.JPG (45.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/46.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 46.JPG (46.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/47.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 47.JPG (47.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/48.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 48.JPG (48.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/49.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 49.JPG (49.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/5.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 5.JPG (5.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/50.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 50.JPG (50.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/51.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 51.JPG (51.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/52.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 52.JPG (52.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/53.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 53.JPG (53.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/54.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 54.JPG (54.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/55.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 55.JPG (55.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/56.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 56.JPG (56.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/57.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 57.JPG (57.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/58.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 58.JPG (58.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/59.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 59.JPG (59.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/6.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 6.JPG (6.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/60.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 60.JPG (60.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/7.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 7.JPG (7.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/8.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 8.JPG (8.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/9.JPG_ld",
        "parent": "http://objects.mainzed.org/ont#LightDirection",
        "type": "geoinstance",
        "text": "Light direction vector 9.JPG (9.JPG_ld)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#LightDirection",
        "parent": "#",
        "type": "geoclass",
        "text": "LightDirection (ns1:LightDirection) [60]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#calibration": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#asWKT": {
              "instancecount": 1
            },
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 1,
              "http://www.opengis.net/ont/crs/3DCoordinateSystem": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#hasLightDirection": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#Measurement": 1,
              "http://purl.org/dc/terms/Image": 1
            }
          }
        },
        "instancecount": 5
      },
      {
        "id": "http://i3mainz.de/metadata/DomeCoordinateSystem_axis1",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Dome Coordinate System X Axis (DomeCoordinateSystem_axis1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/DomeCoordinateSystem_axis2",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Dome Coordinate System Y Axis (DomeCoordinateSystem_axis2)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/DomeCoordinateSystem_axis3",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Dome Coordinate System Z Axis (DomeCoordinateSystem_axis3)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/PixelCoordinateSystem_axis1",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Pixel Coordinate System X Axis (PixelCoordinateSystem_axis1)",
        "data": {}
      },
      {
        "id": "http://i3mainz.de/metadata/PixelCoordinateSystem_axis2",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "type": "instance",
        "text": "Pixel Coordinate System Y Axis (PixelCoordinateSystem_axis2)",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/CoordinateSystemAxis",
        "parent": "#",
        "type": "class",
        "text": "CoordinateSystemAxis (geocrs:CoordinateSystemAxis) [5]",
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
            "http://www.opengis.net/ont/crs/axis": {
              "instancecount": 0,
              "http://www.opengis.net/ont/crs/3DCoordinateSystem": 1
            }
          }
        },
        "instancecount": 2
      },
      {
        "id": "http://i3mainz.de/metadata/project1_ms",
        "parent": "http://objects.mainzed.org/ont#MeasurementSeries",
        "type": "instance",
        "text": "MeasurementSeries for Measurement Project project1 (project1_ms)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementSeries",
        "parent": "#",
        "type": "class",
        "text": "MeasurementSeries (ns1:MeasurementSeries) [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#measurement": {
              "instancecount": 60,
              "http://objects.mainzed.org/ont#Measurement": 60,
              "http://purl.org/dc/terms/Image": 60
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
        "instancecount": 62
      },
      {
        "id": "http://i3mainz.de/metadata/DomeCoordinateSystem",
        "parent": "http://www.opengis.net/ont/crs/3DCoordinateSystem",
        "type": "instance",
        "text": "DomeCoordinateSystem",
        "data": {}
      },
      {
        "id": "http://www.opengis.net/ont/crs/3DCoordinateSystem",
        "parent": "http://www.opengis.net/ont/crs/CoordinateSystem",
        "type": "class",
        "text": "3DCoordinateSystem (geocrs:3DCoordinateSystem) [1]",
        "data": {
          "to": {
            "http://www.opengis.net/ont/crs/axis": {
              "instancecount": 3,
              "http://www.opengis.net/ont/crs/CoordinateSystemAxis": 3
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 1
            }
          },
          "from": {
            "http://www.opengis.net/ont/geosparql#inSRS": {
              "instancecount": 0,
              "http://objects.mainzed.org/ont#LightDirection": 60
            }
          }
        },
        "instancecount": 4
      }
    ]
  }
}