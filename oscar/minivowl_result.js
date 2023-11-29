var minivowlresult={
 "info": [
  {
   "description": "Created with pyowl2vowl (version 0.1) as part of the SPARQLing Unicorn QGIS Plugin"
  }
 ],
 "nodes": [
  {
   "name": "MeasurementProject",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#MeasurementProject"
  },
  {
   "name": "Measurement",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#Measurement"
  },
  {
   "name": "DatatypeProperty",
   "type": "class",
   "uri": "http://www.w3.org/2002/07/owl#DatatypeProperty"
  },
  {
   "name": "ObjectProperty",
   "type": "class",
   "uri": "http://www.w3.org/2002/07/owl#ObjectProperty"
  },
  {
   "name": "RTIDome",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#RTIDome"
  },
  {
   "name": "MeasurementSeries",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#MeasurementSeries"
  },
  {
   "name": "MeasurementSetup",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#MeasurementSetup"
  },
  {
   "name": "M_shutter_time0",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#M_shutter_time0"
  },
  {
   "name": "Measure",
   "type": "class",
   "uri": "http://www.ontology-of-units-of-measure.org/resource/om-2/Measure"
  },
  {
   "name": "Camera",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#Camera"
  },
  {
   "name": "PixelType",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#PixelType"
  },
  {
   "name": "LightSourceGroup",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#LightSourceGroup"
  },
  {
   "name": "RTIScanner",
   "type": "class",
   "uri": "http://objects.mainzed.org/ont#RTIScanner"
  }
 ],
 "links": [
  {
   "source": 6,
   "target": 7,
   "valueTo": "exposureTime",
   "propertyTo": "class",
   "uriTo": "http://www.w3.org/2003/12/exif/exposureTime"
  },
  {
   "source": 1,
   "target": 6,
   "valueTo": "setup",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#setup"
  },
  {
   "source": 1,
   "target": 9,
   "valueTo": "usesCamera",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#usesCamera"
  },
  {
   "source": 1,
   "target": 11,
   "valueTo": "usesLightSourceGroup",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#usesLightSourceGroup"
  },
  {
   "source": 1,
   "target": 10,
   "valueTo": "pixelType",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#pixelType"
  },
  {
   "source": 1,
   "target": 12,
   "valueTo": "capturingdevice",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#capturingdevice"
  },
  {
   "source": 7,
   "target": 8,
   "valueTo": "hasValue",
   "propertyTo": "class",
   "uriTo": "http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue"
  },
  {
   "source": 12,
   "target": 11,
   "valueTo": "hasLightSourceGroup",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasLightSourceGroup"
  },
  {
   "source": 0,
   "target": 5,
   "valueTo": "measurementSeries",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#measurementSeries"
  },
  {
   "source": 12,
   "target": 4,
   "valueTo": "hasComponent",
   "propertyTo": "class",
   "uriTo": "http://objects.mainzed.org/ont#hasComponent"
  }
 ]
}