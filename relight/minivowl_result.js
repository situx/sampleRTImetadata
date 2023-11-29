var minivowlresult={
 "info": [
  {
   "description": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin"
  }
 ],
 "nodes": [
  {
   "name": "LightSourceGroup",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#LightSourceGroup"
  },
  {
   "name": "MeasurementProject",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#MeasurementProject"
  },
  {
   "name": "ObjectProperty",
   "type": "class",
   "uri": "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
   "name": "DatatypeProperty",
   "type": "class",
   "uri": "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
   "name": "Measurement",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#Measurement"
  },
  {
   "name": "Image",
   "type": "class",
   "uri": "http://purl.org/dc/terms/Image"
  },
  {
   "name": "LightDirection",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#LightDirection"
  },
  {
   "name": "Calibration",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#Calibration"
  },
  {
   "name": "CoordinateSystemAxis",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/CoordinateSystemAxis"
  },
  {
   "name": "MeasurementSeries",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#MeasurementSeries"
  },
  {
   "name": "Polygon",
   "type": "class",
   "uri": "http://www.opengis.net/ont/sf#Polygon"
  },
  {
   "name": "Point",
   "type": "class",
   "uri": "http://www.opengis.net/ont/sf#Point"
  },
  {
   "name": "Highlight",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#Highlight"
  },
  {
   "name": "CalibrationObject",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#CalibrationObject"
  },
  {
   "name": "Class",
   "type": "class",
   "uri": "http://www.w3.org/2002/07/owl#Class"
  },
  {
   "name": "CoordinateSystem",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/CoordinateSystem"
  },
  {
   "name": "3DCoordinateSystem",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/3DCoordinateSystem"
  }
 ],
 "links": [
  {
   "source": 6,
   "target": 7,
   "valueTo": "calibration",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#calibration"
  },
  {
   "source": 12,
   "target": 16,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 12,
   "target": 15,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 6,
   "target": 16,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 6,
   "target": 15,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 4,
   "target": 6,
   "valueTo": "hasLightDirection",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasLightDirection"
  },
  {
   "source": 5,
   "target": 6,
   "valueTo": "hasLightDirection",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasLightDirection"
  },
  {
   "source": 13,
   "target": 6,
   "valueTo": "hasLightDirection",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasLightDirection"
  },
  {
   "source": 9,
   "target": 4,
   "valueTo": "measurement",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurement"
  },
  {
   "source": 9,
   "target": 5,
   "valueTo": "measurement",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurement"
  },
  {
   "source": 13,
   "target": 12,
   "valueTo": "hasHighlight",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasHighlight"
  },
  {
   "source": 13,
   "target": 10,
   "valueTo": "hasBoundingBox",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#hasBoundingBox"
  },
  {
   "source": 7,
   "target": 13,
   "valueTo": "usesLightSourceGroup",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#usesLightSourceGroup"
  },
  {
   "source": 7,
   "target": 13,
   "valueTo": "calibrationobject",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#calibrationobject"
  },
  {
   "source": 16,
   "target": 8,
   "valueTo": "axis",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/crs/axis"
  },
  {
   "source": 15,
   "target": 8,
   "valueTo": "axis",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/crs/axis"
  },
  {
   "source": 13,
   "target": 11,
   "valueTo": "hasCentroid",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#hasCentroid"
  },
  {
   "source": 1,
   "target": 9,
   "valueTo": "measurementSeries",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurementSeries"
  }
 ]
}