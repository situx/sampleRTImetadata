var minivowlresult={
 "info": [
  {
   "description": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin"
  }
 ],
 "nodes": [
  {
   "name": "CoordinateSystem",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/CoordinateSystem"
  },
  {
   "name": "MeasurementProject",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#MeasurementProject"
  },
  {
   "name": "CalibrationObject",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#CalibrationObject"
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
   "name": "3DCoordinateSystem",
   "type": "class",
   "uri": "http://www.opengis.net/ont/crs/3DCoordinateSystem"
  }
 ],
 "links": [
  {
   "source": 7,
   "target": 4,
   "valueTo": "measurement",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurement"
  },
  {
   "source": 7,
   "target": 3,
   "valueTo": "measurement",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurement"
  },
  {
   "source": 4,
   "target": 5,
   "valueTo": "hasLightDirection",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasLightDirection"
  },
  {
   "source": 3,
   "target": 5,
   "valueTo": "hasLightDirection",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasLightDirection"
  },
  {
   "source": 5,
   "target": 8,
   "valueTo": "inSRS",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/geosparql#inSRS"
  },
  {
   "source": 0,
   "target": 6,
   "valueTo": "axis",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/crs/axis"
  },
  {
   "source": 8,
   "target": 6,
   "valueTo": "axis",
   "propertyTo": "class",
   "uriTo": "http://www.opengis.net/ont/crs/axis"
  },
  {
   "source": 1,
   "target": 7,
   "valueTo": "measurementSeries",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurementSeries"
  }
 ]
}