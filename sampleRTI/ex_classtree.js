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
        "id": "https://situx.github.io/sampleRTImetadata/RTIScanner",
        "parent": "http://objects.mainzed.org/ont#RTIScanner",
        "type": "instance",
        "text": "Sample RTI Scanner (:RTIScanner)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#RTIScanner",
        "parent": "http://objects.mainzed.org/ont#Tool",
        "type": "class",
        "text": "RTIScanner [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#component": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://objects.mainzed.org/ont#LightSource": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 4
      },
      {
        "id": "http://objects.mainzed.org/ont#Tool",
        "parent": "#",
        "type": "class",
        "text": "Tool",
        "data": {}
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/SampleRTIDome",
        "parent": "http://objects.mainzed.org/ont#RTIDome",
        "type": "instance",
        "text": "Sample RTI Dome (:SampleRTIDome)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#RTIDome",
        "parent": "http://objects.mainzed.org/ont#Tool",
        "type": "class",
        "text": "RTIDome [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "id": "https://situx.github.io/sampleRTImetadata/RTIDomeCalibration",
        "parent": "http://objects.mainzed.org/ont#Calibration",
        "type": "instance",
        "text": "RTI Dome Calibration (:RTIDomeCalibration)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#Calibration",
        "parent": "#",
        "type": "class",
        "text": "Calibration [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#calibrationobject": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/alibrationobject1",
        "parent": "https://situx.github.io/sampleRTImetadata/CalibrationObject",
        "type": "instance",
        "text": "Calibration Object for the RTI Dome (:alibrationobject1)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/CalibrationObject",
        "parent": "#",
        "type": "class",
        "text": "CalibrationObject (:CalibrationObject) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "id": "https://situx.github.io/sampleRTImetadata/ls1",
        "parent": "http://objects.mainzed.org/ont#LightSource",
        "type": "instance",
        "text": "Light Source 1: Azimuth 0\u00b0 (:ls1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#LightSource",
        "parent": "http://objects.mainzed.org/ont#Tool",
        "type": "class",
        "text": "LightSource [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#component": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://objects.mainzed.org/ont#RTIScanner": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/mp1",
        "parent": "http://object.mainzed.org/ont#MeasurementProject",
        "type": "instance",
        "text": "Measurement Project 1 (Scanning of an object using RTI) (:mp1)",
        "data": {}
      },
      {
        "id": "http://object.mainzed.org/ont#MeasurementProject",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "MeasurementProject [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#measurementSeries": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://objects.mainzed.org/ont#MeasurementSeries": 1
            },
            "http://objects.mainzed.org/ont#numberofmeasurements": {
              "instancecount": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            },
            "https://situx.github.io/sampleRTImetadata/recordingtechnology": {
              "instancecount": 1
            }
          },
          "from": {}
        },
        "instancecount": 6
      },
      {
        "id": "http://www.w3.org/ns/prov#Entity",
        "parent": "#",
        "type": "class",
        "text": "Entity (prov:Entity)",
        "data": {}
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/mp1_ms1",
        "parent": "http://objects.mainzed.org/ont#MeasurementSeries",
        "type": "instance",
        "text": "Measurement Series 1 (:mp1_ms1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementSeries",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "MeasurementSeries [1]",
        "data": {
          "to": {
            "http://objects.mainzed.org/ont#measurement": {
              "instancecount": 1,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://objects.mainzed.org/ont#Measurement": 1
            },
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#measurementSeries": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://object.mainzed.org/ont#MeasurementProject": 1
            }
          }
        },
        "instancecount": 4
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/mp1_ms1_measurement1",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "instance",
        "text": "Measurement 1 (Photo1) (:mp1_ms1_measurement1)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#Measurement",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "Measurement [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
            },
            "http://www.w3.org/2000/01/rdf-schema#label": {
              "instancecount": 1
            }
          },
          "from": {
            "http://objects.mainzed.org/ont#measurement": {
              "instancecount": 0,
              "http://www.w3.org/2002/07/owl#NamedIndividual": 1,
              "http://objects.mainzed.org/ont#MeasurementSeries": 1
            }
          }
        },
        "instancecount": 3
      },
      {
        "id": "https://situx.github.io/sampleRTImetadata/rti_scanning_person",
        "parent": "http://xmlns.com/foaf/0.1/Person",
        "type": "instance",
        "text": "RTI Scanning Person (:rti_scanning_person)",
        "data": {}
      },
      {
        "id": "http://xmlns.com/foaf/0.1/Person",
        "parent": "http://www.w3.org/ns/prov#Agent",
        "type": "class",
        "text": "Person (foaf:Person) [1]",
        "data": {
          "to": {
            "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
              "instancecount": 2,
              "http://www.w3.org/2002/07/owl#Class": 1
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
        "id": "http://www.w3.org/ns/prov#Agent",
        "parent": "#",
        "type": "class",
        "text": "Agent (prov:Agent)",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#CalibrationObject",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "CalibrationObject",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#CalibrationSetup",
        "parent": "#",
        "type": "class",
        "text": "CalibrationSetup",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#MeasurementSetup",
        "parent": "http://www.w3.org/ns/prov#Entity",
        "type": "class",
        "text": "MeasurementSetup",
        "data": {}
      },
      {
        "id": "http://objects.mainzed.org/ont#SensorMeasures",
        "parent": "http://objects.mainzed.org/ont#Measurement",
        "type": "class",
        "text": "SensorMeasures",
        "data": {}
      }
    ]
  }
}