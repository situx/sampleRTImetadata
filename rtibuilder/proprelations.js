var proprelations={"http://objects.mainzed.org/ont#calibration": {"from": ["http://objects.mainzed.org/ont#LightDirection", "http://objects.mainzed.org/ont#Highlight"], "to": ["http://objects.mainzed.org/ont#Calibration"]}, "http://www.w3.org/2000/01/rdf-schema#member": {"from": ["http://www.w3.org/2004/02/skos/core#Collection"], "to": ["http://purl.org/dc/terms/Image", "http://objects.mainzed.org/ont#Measurement"]}, "http://objects.mainzed.org/ont#calibrationobject": {"from": ["http://objects.mainzed.org/ont#Calibration"], "to": ["http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity", "http://objects.mainzed.org/ont#CalibrationSphere"]}, "http://www.w3.org/2000/01/rdf-schema#label": {"from": ["http://objects.mainzed.org/ont#CalibrationObjectInput", "https://w3id.org/function/ontology#Function", "http://purl.org/dc/terms/Image", "http://www.opengis.net/ont/crs/CoordinateSystemAxis", "http://objects.mainzed.org/ont#MeasurementProject", "https://w3id.org/function/ontology#Parameter", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.opengis.net/ont/sf#Polygon", "http://objects.mainzed.org/ont#LightSourceGroup", "http://www.w3.org/ns/prov#Activity", "https://w3id.org/function/ontology#Output", "http://objects.mainzed.org/ont#LightProjection", "http://objects.mainzed.org/ont#Measurement", "https://w3id.org/function/ontology#Execution", "http://objects.mainzed.org/ont#LightDirection", "http://objects.mainzed.org/ont#MeasurementSeries", "http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#Calibration", "http://objects.mainzed.org/ont#Highlight"], "to": []}, "http://www.opengis.net/ont/geosparql#asWKT": {"from": ["http://objects.mainzed.org/ont#LightDirection", "http://www.opengis.net/ont/sf#Polygon", "http://objects.mainzed.org/ont#Highlight"], "to": []}, "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {"from": ["http://www.w3.org/2004/02/skos/core#Collection", "http://www.opengis.net/ont/crs/3DCoordinateSystem", "http://objects.mainzed.org/ont#CalibrationObjectInput", "https://w3id.org/function/ontology#Function", "http://purl.org/dc/terms/Image", "http://www.opengis.net/ont/crs/CoordinateSystemAxis", "http://objects.mainzed.org/ont#MeasurementProject", "https://w3id.org/function/ontology#Parameter", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.opengis.net/ont/sf#Polygon", "http://objects.mainzed.org/ont#LightSourceGroup", "http://www.w3.org/2002/07/owl#ObjectProperty", "http://www.w3.org/ns/prov#Activity", "http://www.w3.org/2002/07/owl#DatatypeProperty", "https://w3id.org/function/ontology#Output", "http://www.w3.org/2002/07/owl#Class", "http://objects.mainzed.org/ont#LightProjection", "http://objects.mainzed.org/ont#Measurement", "https://w3id.org/function/ontology#Execution", "http://objects.mainzed.org/ont#LightDirection", "http://objects.mainzed.org/ont#MeasurementSeries", "http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#Calibration", "http://www.opengis.net/ont/crs/CoordinateSystem", "http://objects.mainzed.org/ont#Highlight"], "to": ["http://www.w3.org/2002/07/owl#Class"]}, "http://www.opengis.net/ont/geosparql#inSRS": {"from": ["http://objects.mainzed.org/ont#LightDirection", "http://www.opengis.net/ont/sf#Polygon", "http://objects.mainzed.org/ont#Highlight"], "to": ["http://www.opengis.net/ont/crs/3DCoordinateSystem", "http://www.opengis.net/ont/crs/CoordinateSystem"]}, "http://objects.mainzed.org/ont#measurement": {"from": ["http://objects.mainzed.org/ont#MeasurementSeries"], "to": ["http://purl.org/dc/terms/Image", "http://objects.mainzed.org/ont#Measurement"]}, "http://www.w3.org/2004/02/skos/core#definition": {"from": ["http://purl.org/dc/terms/Image", "http://objects.mainzed.org/ont#Measurement"], "to": []}, "http://objects.mainzed.org/ont#hasLightDirection": {"from": ["http://objects.mainzed.org/ont#LightProjection"], "to": ["http://objects.mainzed.org/ont#LightDirection"]}, "http://objects.mainzed.org/ont#usedForHighDetection": {"from": ["http://purl.org/dc/terms/Image", "http://objects.mainzed.org/ont#Measurement"], "to": []}, "http://objects.mainzed.org/ont#usedForCalibrationObjectDetection": {"from": ["http://purl.org/dc/terms/Image", "http://objects.mainzed.org/ont#Measurement"], "to": []}, "http://www.opengis.net/ont/crs/axis": {"from": ["http://www.opengis.net/ont/crs/3DCoordinateSystem", "http://www.opengis.net/ont/crs/CoordinateSystem"], "to": ["http://www.opengis.net/ont/crs/CoordinateSystemAxis"]}, "https://w3id.org/function/ontology#returns": {"from": ["https://w3id.org/function/ontology#Function"], "to": ["https://w3id.org/function/ontology#Output"]}, "http://objects.mainzed.org/ont#usesLightSourceGroup": {"from": ["http://objects.mainzed.org/ont#Calibration"], "to": ["http://objects.mainzed.org/ont#LightSourceGroup"]}, "https://w3id.org/function/ontology#expects": {"from": ["https://w3id.org/function/ontology#Function"], "to": []}, "http://www.opengis.net/ont/geosparql#BoundingBox": {"from": ["http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity", "http://objects.mainzed.org/ont#CalibrationSphere"], "to": ["http://www.opengis.net/ont/sf#Polygon"]}, "http://www.w3.org/2000/01/rdf-schema#subClassOf": {"from": [], "to": []}, "http://objects.mainzed.org/ont#radius": {"from": [], "to": []}, "https://w3id.org/function/ontology#executes": {"from": ["https://w3id.org/function/ontology#Execution", "http://www.w3.org/ns/prov#Activity"], "to": ["https://w3id.org/function/ontology#Function"]}, "https://w3id.org/function/ontology#required": {"from": ["https://w3id.org/function/ontology#Output", "https://w3id.org/function/ontology#Parameter"], "to": []}, "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {"from": ["http://www.opengis.net/ont/crs/CoordinateSystemAxis"], "to": []}, "http://www.opengis.net/ont/geosparql#hasBoundingBox": {"from": ["http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity", "http://objects.mainzed.org/ont#CalibrationObjectInput"], "to": ["http://www.opengis.net/ont/sf#Polygon"]}, "http://purl.org/dc/terms/creator": {"from": ["http://objects.mainzed.org/ont#MeasurementProject"], "to": []}, "http://objects.mainzed.org/ont#measurementSeries": {"from": ["http://objects.mainzed.org/ont#MeasurementProject"], "to": ["http://objects.mainzed.org/ont#MeasurementSeries"]}, "http://purl.org/dc/terms/created": {"from": ["http://objects.mainzed.org/ont#MeasurementProject"], "to": []}, "http://www.opengis.net/ont/geosparql#hasGeometry": {"from": ["http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity", "http://objects.mainzed.org/ont#CalibrationSphere"], "to": []}}