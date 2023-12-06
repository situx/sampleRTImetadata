var proprelations={"http://objects.mainzed.org/ont#calibration": {"from": ["http://objects.mainzed.org/ont#Highlight", "http://objects.mainzed.org/ont#LightDirection"], "to": ["http://objects.mainzed.org/ont#Calibration"]}, "http://www.w3.org/2000/01/rdf-schema#label": {"from": ["http://objects.mainzed.org/ont#CalibrationSphere", "https://w3id.org/function/ontology#Execution", "http://purl.org/dc/terms/Image", "https://w3id.org/function/ontology#Output", "http://objects.mainzed.org/ont#MeasurementProject", "http://objects.mainzed.org/ont#CalibrationObjectInput", "http://www.opengis.net/ont/crs/CoordinateSystemAxis", "http://objects.mainzed.org/ont#Calibration", "http://objects.mainzed.org/ont#LightProjection", "http://objects.mainzed.org/ont#Highlight", "http://objects.mainzed.org/ont#LightDirection", "https://w3id.org/function/ontology#Function", "http://objects.mainzed.org/ont#Measurement", "http://www.w3.org/ns/prov#Activity", "http://www.opengis.net/ont/sf#Polygon", "https://w3id.org/function/ontology#Parameter", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://objects.mainzed.org/ont#LightSourceGroup", "http://objects.mainzed.org/ont#MeasurementSeries"], "to": []}, "http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {"from": ["http://objects.mainzed.org/ont#CalibrationSphere", "https://w3id.org/function/ontology#Execution", "http://purl.org/dc/terms/Image", "https://w3id.org/function/ontology#Output", "http://objects.mainzed.org/ont#MeasurementProject", "http://www.opengis.net/ont/crs/CoordinateSystem", "http://www.w3.org/2002/07/owl#ObjectProperty", "http://objects.mainzed.org/ont#CalibrationObjectInput", "http://www.opengis.net/ont/crs/CoordinateSystemAxis", "http://www.w3.org/2002/07/owl#Class", "http://objects.mainzed.org/ont#Calibration", "http://objects.mainzed.org/ont#LightProjection", "http://objects.mainzed.org/ont#Highlight", "http://objects.mainzed.org/ont#LightDirection", "https://w3id.org/function/ontology#Function", "http://www.w3.org/2004/02/skos/core#Collection", "http://objects.mainzed.org/ont#Measurement", "http://www.w3.org/ns/prov#Activity", "http://www.opengis.net/ont/sf#Polygon", "http://www.opengis.net/ont/crs/3DCoordinateSystem", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "https://w3id.org/function/ontology#Parameter", "http://objects.mainzed.org/ont#LightSourceGroup", "http://www.w3.org/2002/07/owl#DatatypeProperty", "http://objects.mainzed.org/ont#MeasurementSeries"], "to": ["http://www.w3.org/2002/07/owl#Class"]}, "http://www.opengis.net/ont/geosparql#inSRS": {"from": ["http://objects.mainzed.org/ont#Highlight", "http://objects.mainzed.org/ont#LightDirection", "http://www.opengis.net/ont/sf#Polygon"], "to": ["http://www.opengis.net/ont/crs/3DCoordinateSystem", "http://www.opengis.net/ont/crs/CoordinateSystem"]}, "http://objects.mainzed.org/ont#usesLightSourceGroup": {"from": ["http://objects.mainzed.org/ont#Calibration"], "to": ["http://objects.mainzed.org/ont#LightSourceGroup"]}, "http://objects.mainzed.org/ont#calibrationobject": {"from": ["http://objects.mainzed.org/ont#Calibration"], "to": ["http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity"]}, "http://www.w3.org/2004/02/skos/core#definition": {"from": ["http://objects.mainzed.org/ont#Measurement", "http://purl.org/dc/terms/Image"], "to": []}, "http://objects.mainzed.org/ont#hasLightDirection": {"from": ["http://objects.mainzed.org/ont#LightProjection"], "to": ["http://objects.mainzed.org/ont#LightDirection"]}, "http://www.opengis.net/ont/geosparql#asWKT": {"from": ["http://objects.mainzed.org/ont#Highlight", "http://objects.mainzed.org/ont#LightDirection", "http://www.opengis.net/ont/sf#Polygon"], "to": []}, "https://w3id.org/function/ontology#required": {"from": ["https://w3id.org/function/ontology#Parameter", "https://w3id.org/function/ontology#Output"], "to": []}, "http://www.w3.org/2000/01/rdf-schema#member": {"from": ["http://www.w3.org/2004/02/skos/core#Collection"], "to": ["http://objects.mainzed.org/ont#Measurement", "http://purl.org/dc/terms/Image"]}, "https://w3id.org/function/ontology#returns": {"from": ["https://w3id.org/function/ontology#Function"], "to": ["https://w3id.org/function/ontology#Output"]}, "http://objects.mainzed.org/ont#measurement": {"from": ["http://objects.mainzed.org/ont#MeasurementSeries"], "to": ["http://objects.mainzed.org/ont#Measurement", "http://purl.org/dc/terms/Image"]}, "http://objects.mainzed.org/ont#usedForCalibrationObjectDetection": {"from": ["http://objects.mainzed.org/ont#Measurement", "http://purl.org/dc/terms/Image"], "to": []}, "http://objects.mainzed.org/ont#usedForHighDetection": {"from": ["http://objects.mainzed.org/ont#Measurement", "http://purl.org/dc/terms/Image"], "to": []}, "http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit": {"from": ["http://www.opengis.net/ont/crs/CoordinateSystemAxis"], "to": []}, "http://www.opengis.net/ont/crs/axis": {"from": ["http://www.opengis.net/ont/crs/3DCoordinateSystem", "http://www.opengis.net/ont/crs/CoordinateSystem"], "to": ["http://www.opengis.net/ont/crs/CoordinateSystemAxis"]}, "http://purl.org/dc/terms/created": {"from": ["http://objects.mainzed.org/ont#MeasurementProject"], "to": []}, "https://w3id.org/function/ontology#executes": {"from": ["http://www.w3.org/ns/prov#Activity", "https://w3id.org/function/ontology#Execution"], "to": ["https://w3id.org/function/ontology#Function"]}, "http://www.w3.org/2000/01/rdf-schema#subClassOf": {"from": [], "to": []}, "https://w3id.org/function/ontology#expects": {"from": ["https://w3id.org/function/ontology#Function"], "to": []}, "http://www.opengis.net/ont/geosparql#hasBoundingBox": {"from": ["http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://objects.mainzed.org/ont#CalibrationObjectInput", "http://www.w3.org/ns/prov#Activity"], "to": ["http://www.opengis.net/ont/sf#Polygon"]}, "http://objects.mainzed.org/ont#radius": {"from": [], "to": []}, "http://www.opengis.net/ont/geosparql#hasGeometry": {"from": ["http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity"], "to": []}, "http://objects.mainzed.org/ont#measurementSeries": {"from": ["http://objects.mainzed.org/ont#MeasurementProject"], "to": ["http://objects.mainzed.org/ont#MeasurementSeries"]}, "http://www.opengis.net/ont/geosparql#BoundingBox": {"from": ["http://objects.mainzed.org/ont#CalibrationSphere", "http://objects.mainzed.org/ont#CalibrationObjectOutput", "http://www.w3.org/ns/prov#Activity"], "to": ["http://www.opengis.net/ont/sf#Polygon"]}, "http://purl.org/dc/terms/creator": {"from": ["http://objects.mainzed.org/ont#MeasurementProject"], "to": []}}