import xml.etree.ElementTree as ET
from rdflib import Graph
from rdflib import URIRef, Literal
import argparse
import json
import os
import re
from PIL import Image, ExifTags

namespace="http://i3mainz.de/metadata/"
ontnamespace="http://objects.mainzed.org/ont#"

def parseRelightJSON(jsonfile,resgraph,folder=""):
    with open(jsonfile, 'r',encoding="utf-8") as f:
        rjson = json.load(f)
    projectname=jsonfile.replace("relight","")
    if "folder" in rjson and folder=="":
        folder=rjson["folder"]
    if folder==".":
        folder=""
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystem")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"PixelCoordinateSystem_axis1")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Pixel Coordinate System X Axis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis1"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/pixel")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"PixelCoordinateSystem_axis2")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis2"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis2"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Pixel Coordinate System Y Axis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis2"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/pixel")))
    resgraph.add((URIRef("http://www.opengis.net/ont/crs/3DCoordinateSystem"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystem")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/3DCoordinateSystem")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"DomeCoordinateSystem_axis1")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Dome Coordinate System X Axis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"DomeCoordinateSystem_axis2")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis2"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis2"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Dome Coordinate System Y Axis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"DomeCoordinateSystem_axis3")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis3"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis3"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Dome Coordinate System Z Axis")))
    resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementProject")))
    resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement Project "+str(projectname),lang="en")))
    resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef(ontnamespace+"measurementSeries"),URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"))) 
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"hasLightDirection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#asWKT"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementSeries")))  
    resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("MeasurementSeries for Measurement Project "+str(projectname),lang="en")))
    resjson={}
    if "images" in rjson:
        imagecounter=1
        for image in rjson["images"]:
            if "filename" in image:
                print("IMAGE: "+str(image))
                imageid=image["filename"]
                print("ThePath: "+str(folder)+str(image["filename"]))
                if os.path.isfile(folder+image["filename"]):
                    print(folder+image["filename"])
                    resgraph=processEXIFImageMetadata(folder+image["filename"],namespace+projectname.replace(" ","_")+"_"+str(imageid),resgraph)
            else:
                imageid="image_"+str(imagecounter)
                imagecounter+=1
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_ms"),URIRef(ontnamespace+"measurement"),URIRef(namespace+str(imageid))))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Measurement")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://purl.org/dc/terms/Image"))) 
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)),URIRef(ontnamespace+"hasLightDirection"),URIRef(namespace+str(imageid)+"_ld")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightDirection")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Light direction vector "+str(imageid),lang="en")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld"),URIRef(ontnamespace+"calibration"),URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld_calibration")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld_calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Calibration")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration of light direction vector "+str(imageid),lang="en")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld"),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"DomeCoordinateSystem")))
            if "direction" in image:
                if "x" in image["direction"] and "y" in image["direction"] and "z" in image["direction"]:
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_"+str(imageid)+"_ld"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT Z("+str(image["direction"]["x"])+" "+str(image["direction"]["y"])+" "+str(image["direction"]["z"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
    if "spheres" in rjson:
        spherecounter=1
        for sphere in rjson["spheres"]:
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationObject")))
            resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal(str(projectname)+" Calibration Sphere "+str(spherecounter))))
            resgraph.add((URIRef(namespace+str(imageid)+"_ld_calibration"),URIRef(ontnamespace+"calibrationobject"),URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter))))
            if "border" in sphere:
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)),URIRef("http://www.opengis.net/ont/geosparql#hasBoundingBox"),URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_bbox")))
                wkt="POLYGON(("
                for point in sphere["border"]:
                    print(point)
                    wkt+=str(point[0])+" "+str(point[1])+", "
                wkt+=str(sphere["border"][0])+" "+str(sphere["border"][1])+"))"             
                resgraph.add((URIRef("http://www.opengis.net/ont/sf#Polygon"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef("http://www.opengis.net/ont/geosparql#Geometry")))
                resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#Geometry"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#Class")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_bbox"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/sf#Polygon")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_bbox"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal(str(projectname)+" Calibration Sphere "+str(spherecounter)+" Bounding Box")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_bbox"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal(wkt,datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
            if "center" in sphere:
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)),URIRef("http://www.opengis.net/ont/geosparql#hasCentroid"),URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_centroid")))
                resgraph.add((URIRef("http://www.opengis.net/ont/sf#Point"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef("http://www.opengis.net/ont/geosparql#Geometry")))
                resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#Geometry"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#Class")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_centroid"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/sf#Point")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_centroid"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal(str(projectname)+" Calibration Sphere "+str(spherecounter)+" Centroid")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_centroid"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT("+str(sphere["center"][0])+" "+str(sphere["center"][1])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
            if "radius" in sphere:
                resgraph.add((URIRef(namespace+str(imageid)+"_sphere"+str(spherecounter)),URIRef("http://www.opengis.net/ont/geosparql#hasMetricPerimeter"),Literal(str(sphere["radius"]),datatype="http://www.w3.org/2001/XMLSchema#double")))
            if "directions" in sphere:
                ldcounter=0
                for dire in sphere["directions"]:
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)),URIRef(ontnamespace+"hasLightDirection"),URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_ld"+str(ldcounter))))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_ld"+str(ldcounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightDirection")))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_ld"+str(ldcounter)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Light direction vector "+str(ldcounter)+" for calbration object sphere "+str(spherecounter),lang="en")))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_ld"+str(ldcounter)),URIRef(ontnamespace+"calibration"),URIRef(namespace+str(str(imageid)+"_ld_calibration"))))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_ld"+str(ldcounter)),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"DomeCoordinateSystem")))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_ld"+str(ldcounter)),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT Z("+str(dire[0])+" "+str(dire[1])+" "+str(dire[2])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
                    ldcounter+=1
            if "lights" in sphere:
                lightcounter=0
                resgraph.add((URIRef(namespace+str(imageid)+"_ld_calibration"),URIRef(ontnamespace+"usesLightSourceGroup"),URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter))))
                for highlight in sphere["lights"]:
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)),URIRef(ontnamespace+"hasHighlight"),URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_highlight"+str(lightcounter))))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_highlight"+str(lightcounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Highlight")))
                    resgraph.add((URIRef(ontnamespace+"Highlight"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef(ontnamespace+"ReferencePoint")))  
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_highlight"+str(lightcounter)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Image highlight point "+str(lightcounter)+" using sphere "+str(spherecounter),lang="en")))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_highlight"+str(lightcounter)),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"PixelCoordinateSystem")))
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")+"_sphere"+str(spherecounter)+"_highlight"+str(lightcounter)),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT("+str(highlight[0])+" "+str(highlight[1])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
                    #resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef(ontnamespace+"hasHighlight"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight")))
                    resgraph.add((URIRef(namespace+"ledset_"+str(lightcounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightSourceGroup")))
                    resgraph.add((URIRef(namespace+"ledset_"+str(lightcounter)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("LightSource Group "+str(lightcounter),lang="en")))
                    lightcounter+=1                         
            spherecounter+=1
    return resgraph
    #resgraph.serialize("resgraph_relight.ttl")
    #with open("resgraph_relight.json", "w") as outfile:
    #    outfile.write(json.dumps(resjson))

def processRTIBuilderXMLMetadata():
    print("metadata")

def processEXIFImageMetadata(imagepath,imageuri,resgraph):
    img = Image.open(imagepath)
    img_exif = img.getexif()
    print(type(img_exif))
    if img_exif==None:
        return resgraph
    for key, val in img_exif.items():
        if key in ExifTags.TAGS:
            resgraph.add((URIRef(imageuri),URIRef("http://www.w3.org/2003/12/exif/ns#"+str(ExifTags.TAGS[key])),Literal(val)))
            print(f'{ExifTags.TAGS[key]}:{val}')
        else:
            resgraph.add((URIRef(imageuri),URIRef(ontnamespace+str(key)),Literal(val)))
    return resgraph
   

def parseRTIBuilderXML(xmlfile,resgraph,folder=""):
  
    # create element tree object
    tree = ET.parse(xmlfile)
  
    # get root element
    root = tree.getroot()
  
    # create empty list for news items
    newsitems = []
    resjson={"projects":[{"measurement_series":[{"measurements":[]}]}]}
    print(root)
    resgraph.add((URIRef(ontnamespace+"usedForCalibrationObjectDetection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef(ontnamespace+"usedForHighDetection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef("http://www.w3.org/2000/01/rdf-schema#member"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))  
    resgraph.add((URIRef(ontnamespace+"calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"calibrationobject"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))    
    resgraph.add((URIRef(ontnamespace+"usesLightSourceGroup"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#asWKT"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))      
    resgraph.add((URIRef("https://w3id.org/function/ontology#required"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef(ontnamespace+"radius"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef("https://w3id.org/function/ontology#executes"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("https://w3id.org/function/ontology#expects"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("https://w3id.org/function/ontology#returns"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"hasHighlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"hasLightDirection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystem")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"PixelCoordinateSystem_axis1")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Pixel Coordinate System X Axis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis1"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/pixel")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"PixelCoordinateSystem_axis2")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis2"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis2"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Pixel Coordinate System Y Axis")))
    resgraph.add((URIRef(namespace+"PixelCoordinateSystem_axis2"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/pixel")))
    resgraph.add((URIRef("http://www.opengis.net/ont/crs/3DCoordinateSystem"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystem")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/3DCoordinateSystem")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"DomeCoordinateSystem_axis1")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Dome Coordinate System X Axis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"DomeCoordinateSystem_axis2")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis2"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis2"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Dome Coordinate System Y Axis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem"),URIRef("http://www.opengis.net/ont/crs/axis"),URIRef(namespace+"DomeCoordinateSystem_axis3")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis3"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/crs/CoordinateSystemAxis")))
    resgraph.add((URIRef(namespace+"DomeCoordinateSystem_axis3"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Dome Coordinate System Z Axis")))
    #print(root.children())
    for neighbor in root.iter('Header'):
        print(neighbor.attrib)
    projectname=xmlfile[xmlfile.rfind("/")+1:]
    # iterate news items
    for item in root:
        print(item.tag)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}Header":
            print("Header")
            description=None
            author=None
            creationdate=None
            lastmodificationdate=None
            userinfo=None
            host=None
            timestamp=None
            for citem in item:
                for projectnamee in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}ProjectName"):                        
                    print("Projectname: "+str(projectnamee.text))
                    projectname=projectnamee.text
                for desc in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}Description"):                        
                    print("Description: "+str(desc.text))
                    description=desc.text
                for aut in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}Author"):                        
                    print("Author: "+str(aut.text))
                    author=aut.text
                for cdate in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}CreationDate"):                        
                    print("Creation Date: "+str(cdate.text))
                    creationdate=cdate.text
                for lmoddate in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}LastModificationDate"):                        
                    print("Last Modification Date: "+str(lmoddate.text))
                    lastmodificationdate=lmoddate.text
                for uinfo in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}UserInfo"):                        
                    print("User Info: "+str(uinfo.text))
                    userinfo=uinfo.text
                for hst in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}Host"):                        
                    print("Host: "+str(hst.text))
                    host=hst.text
                for tstmp in citem.iter("{http://alba.di.uminho.pt/XMLCarrier}Timestamp"):                        
                    print("Timestamp: "+str(tstmp.text))
                    timestamp=tstmp.text
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementProject")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement Project "+str(projectname),lang="en")))
                resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef(ontnamespace+"measurementSeries"),URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"))) 
                resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementSeries")))  
                resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("MeasurementSeries for Measurement Project "+str(projectname),lang="en")))  
                resgraph.add((URIRef(ontnamespace+"exposureTime"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
                resgraph.add((URIRef(ontnamespace+"measurementSeries"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
                if description!=None and description!="":
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://www.w3.org/2000/01/rdf-schema#comment"),Literal(str(description),lang="en")))
                if author!=None and author!="":
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://purl.org/dc/terms/creator"),Literal(str(author))))
                if creationdate!=None and creationdate!="":
                    resgraph.add((URIRef(namespace+projectname.replace(" ","_")),URIRef("http://purl.org/dc/terms/created"),Literal(str(creationdate),datatype="http://www.w3.org/2001/XMLSchema#dateTime")))
                print(citem)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}fileSec":
            print("fileSec")
            for hitem in item:
                if str(hitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}fileGrp":
                    print("fileGroup")
                    fileGroupUse=hitem.attrib["USE"]
                    print("Use: "+str(fileGroupUse))
                    for gitem in hitem:
                        print("file")
                        if str(gitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}file" or str(gitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}fptr":
                            if fileGroupUse=="Original image files":
                                location=None
                                for locat in gitem.iter("{http://alba.di.uminho.pt/XMLCarrier}FLocat"):                        
                                    print("File location: "+str(locat.attrib["{http://www.w3.org/1999/xlink}href"]))
                                    location=locat.attrib["{http://www.w3.org/1999/xlink}href"]
                                print("GITEM ID: "+str(gitem.attrib["ID"]))
                                resgraph.add((URIRef(namespace+str(gitem.attrib["ID"])),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://purl.org/dc/terms/Image")))
                                resgraph.add((URIRef(namespace+str(gitem.attrib["ID"])),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Measurement")))
                                resgraph.add((URIRef(namespace+str(gitem.attrib["ID"])),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement "+str(gitem.attrib["ID"]),lang="en")))
                                resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef(ontnamespace+"measurement"),URIRef(namespace+str(gitem.attrib["ID"]))))
                                if location!=None:
                                    resgraph.add((URIRef(namespace+str(gitem.attrib["ID"])),URIRef("http://www.w3.org/2004/02/skos/core#definition"),Literal(location)))
                                print(gitem)
                            elif fileGroupUse=="Images for BallDetection":
                                print("Images for ball detection")
                                print("Ball Detect: "+str(gitem.text))
                                resgraph.add((URIRef(namespace+str(gitem.text)),URIRef(ontnamespace+"usedForCalibrationObjectDetection"),Literal("true",datatype="http://www.w3.org/2001/XMLSchema#boolean")))
                                resgraph.add((URIRef(namespace+str("CalibrationImages")),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2004/02/skos/core#Collection")))
                                resgraph.add((URIRef(namespace+str("CalibrationImages")),URIRef("http://www.w3.org/2000/01/rdf-schema#member"),URIRef(namespace+str(gitem.text))))
                            elif fileGroupUse=="Stage1 and Stage2 images":
                                print("Stage1 and Stage2 images")
                            elif fileGroupUse=="Images for HighDetection":
                                print("Images for HighDetection")
                                resgraph.add((URIRef(namespace+str("HighDetectionImages")),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2004/02/skos/core#Collection")))
                                resgraph.add((URIRef(namespace+str("HighDetectionImages")),URIRef("http://www.w3.org/2000/01/rdf-schema#member"),URIRef(namespace+str(gitem.text))))
                                resgraph.add((URIRef(namespace+str(gitem.text)),URIRef(ontnamespace+"usedForHighDetection"),Literal("true",datatype="http://www.w3.org/2001/XMLSchema#boolean")))
                            elif fileGroupUse=="Blend Image":
                                print("Blend Image")                              
                print(hitem)
                resgraph.add((URIRef(namespace+projectname+"_result"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightProjection")))
                resgraph.add((URIRef(namespace+projectname+"_result"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Light Projection Result")))
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}Processes":
            print("Processes")
            for hitem in item:
                pid="Process ID: "+str(hitem.get("ID"))
                compid="Process ID: "+str(hitem.get("COMPID"))
                seq="SEQ: "+str(hitem.get("SEQ"))
                status="STATUS: "+str(hitem.get("STATUS"))
                typee="TYPE: "+str(hitem.get("TYPE"))
                resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("https://w3id.org/function/ontology#Function")))
                resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Function "+str(hitem.attrib["ID"])))) 
                resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_exec"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/ns/prov#Activity")))
                resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_exec"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("https://w3id.org/function/ontology#Execution")))
                resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_exec"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Function execution of function "+str(hitem.attrib["ID"]))))   
                resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_exec"),URIRef("https://w3id.org/function/ontology#executes"),URIRef(namespace+str(hitem.attrib["ID"]))))          
                for param in hitem.iter("{http://alba.di.uminho.pt/XMLCarrier}Input"):                        
                    location=locat.attrib["{http://www.w3.org/1999/xlink}href"]
                    paramname=None
                    paramstatus=None
                    paramid=None
                    for ref in param.iter("{http://alba.di.uminho.pt/XMLCarrier}ref"):
                        paramname="Name: "+str(ref.get("NAME"))
                        paramstatus="Status: "+str(ref.get("STATUS"))
                        paramid=ref.text
                    parid=namespace+str(hitem.attrib["ID"])+"_input1"
                    if paramid!=None:
                        parid=namespace+str(parid)
                    resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("https://w3id.org/function/ontology#expects"),URIRef(parid))) 
                    resgraph.add((URIRef(namespace+str(parid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("https://w3id.org/function/ontology#Parameter")))
                    resgraph.add((URIRef(namespace+str(parid)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Input parameter 1 of function execution for function "+str(hitem.attrib["ID"]))))
                    resgraph.add((URIRef(namespace+str(parid)),URIRef("https://w3id.org/function/ontology#required"),Literal("true",datatype="http://www.w3.org/2001/XMLSchema#boolean")))
                    if paramname!=None:
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_input1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Parameter: "+str(paramname))))
                for param in hitem.iter("{http://alba.di.uminho.pt/XMLCarrier}Output"):                        
                    location=locat.attrib["{http://www.w3.org/1999/xlink}href"]
                    resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("https://w3id.org/function/ontology#returns"),URIRef(namespace+str(hitem.attrib["ID"])+"_output1")))
                    resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_output1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("https://w3id.org/function/ontology#Output")))
                    resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_output1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Output of funtion execution for function "+str(hitem.attrib["ID"]))))
                    resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_output1"),URIRef("https://w3id.org/function/ontology#required"),Literal("true",datatype="http://www.w3.org/2001/XMLSchema#boolean")))
                    if paramname!=None:
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_output1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Output: "+str(paramname))))

        print(item)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}dataSec":
            print("dataSec")
            for dataitem in item:
                print(dataitem)
                name=None
                if dataitem.tag=="{http://alba.di.uminho.pt/XMLCarrier}Data" and dataitem.attrib["NAME"]=="BallDetectionInput":
                    print("Ball Detection Input")
                    uuid=dataitem.get("UUID")
                    print("UUID: "+str(uuid))
                    areacounter=1
                    for param in dataitem:
                        print("Param tag: "+str(param.tag))
                        if param.tag=="{http://alba.di.uminho.pt/XMLCarrier}area":
                            coords=param.attrib["COORDS"]
                            coordarr=coords.split(";")
                            wktstr="POLYGON(("
                            first=True
                            firststr=None
                            for coord in coordarr:
                                if len(coord)>0:
                                    wktstr+=coord.replace("x:","").replace("y:","")+", "
                                    if first:
                                        firststr=coord.replace("x:","").replace("y:","")
                                        first=False
                            wktstr=wktstr+firststr+"))"
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/ns/prov#Activity")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationObjectInput")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Input for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.opengis.net/ont/geosparql#hasBoundingBox"),URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent")))                      
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/sf#Polygon")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Input Extent for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal(wktstr,datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"PixelCoordinateSystem")))
                            areacounter+=1
                elif dataitem.tag=="{http://alba.di.uminho.pt/XMLCarrier}Data" and dataitem.attrib["NAME"]=="BallDetectionOutput":
                    print("Ball Detection Output")
                    uuid=dataitem.get("UUID")
                    print("UUID: "+str(uuid))
                    areacounter=1
                    for param in dataitem:
                        if param.tag=="{http://alba.di.uminho.pt/XMLCarrier}area":
                            uuid=param.get("UUID")
                            print("UUID: "+str(uuid))
                            coords=param.attrib["COORDS"]
                            coordarr=coords.split(";")
                            wktstr="POLYGON(("
                            first=True
                            firststr=None
                            for coord in coordarr:
                                if len(coord)>0:
                                    wktstr+=coord.replace("x:","").replace("y:","")+", "
                                if first:
                                    firststr=coord.replace("x:","").replace("y:","")
                                    first=False
                            wktstr=wktstr+firststr+"))"
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/ns/prov#Activity")))
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationObjectOutput")))
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Output for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.opengis.net/ont/geosparql#BoundingBox"),URIRef(namespace+str(uuid)+"_extent")))                      
                            resgraph.add((URIRef(namespace+str(uuid)+"_extent"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/sf#Polygon")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_extent"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Output Extent for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)+"_extent"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal(wktstr,datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_extent"),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"PixelCoordinateSystem")))
                            areacounter+=1
                elif dataitem.tag=="{http://alba.di.uminho.pt/XMLCarrier}Data" and dataitem.attrib["NAME"]=="":
                    uuid=dataitem.get("UUID")
                    print("Coordinate outputs "+str(uuid))
                    datajson={}
                    for param in dataitem:
                        print("Param tag: "+str(param.tag))
                        if param.tag=="{http://alba.di.uminho.pt/XMLCarrier}param":
                            name=str(param.attrib["NAME"])
                            print("Param Name: "+str(param.attrib["NAME"]))
                            res=re.findall(r'\d+', name)
                            print("Extracted number: "+str(res))
                            if len(res)>0:
                                if res[0] not in datajson:
                                    datajson[res[0]]={}
                                datajson[res[0]][name]=param.text
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/ns/prov#Activity")))
                            resgraph.add((URIRef("http://www.w3.org/ns/prov#Activity"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#Class")))
                    print(datajson)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}computedData":
            print("computedData")
            for dataitem in item:
                print("Computed Data "+str(dataitem))
                if str(dataitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}Spheres":
                    for hitem in dataitem:
                        print("Sphere: "+str(hitem.attrib["ID"]))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationSphere")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Sphere "+str(hitem.attrib["Order"]),lang="en")))
                        resgraph.add((URIRef(ontnamespace+"CalibrationSphere"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef(ontnamespace+"CalibrationObject")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef(namespace+str(hitem.attrib["ID"]+"_position"))))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.opengis.net/ont/geosparql#hasBoundingBox"),URIRef(namespace+str(hitem.attrib["ID"]+"_extent"))))                    
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Sphere "+str(hitem.attrib["Order"])+" Geometry")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"PixelCoordinateSystem")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT("+str(hitem.attrib["x"])+" "+str(hitem.attrib["y"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef(ontnamespace+"radius"),Literal(str(hitem.attrib["r"]),datatype="http://www.w3.org/2001/XMLSchema#double")))
                elif str(dataitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}HighLights":
                    highlightsphereid=dataitem.attrib["SphereID"]
                    print("HighlightSphereID: "+str(highlightsphereid))
                    ledsetid=1
                    for hitem in dataitem:
                        print("Highlight: "+str(hitem.attrib))
                        resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#asWKT"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
                        #resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Highlight")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Highlight")))
                        resgraph.add((URIRef(ontnamespace+"Highlight"),URIRef("http://www.w3.org/2000/01/rdf-schema#subClassOf"),URIRef(ontnamespace+"ReferencePoint")))  
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef(ontnamespace+"calibration"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Highlight Point Measurement "+str(highlightsphereid)+" Calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef(ontnamespace+"calibrationobject"),URIRef(namespace+str(highlightsphereid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration setup for highlight point measurement "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef(ontnamespace+"usesLightSourceGroup"),URIRef(namespace+"ledset_"+str(ledsetid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Image highlight point "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid),lang="en")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"PixelCoordinateSystem")))
                        if "x" in hitem.attrib and "y" in hitem.attrib:
                            resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT("+str(hitem.attrib["x"])+" "+str(hitem.attrib["y"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
                        #resgraph.add((URIRef(str(namespace+projectname.replace(" ","_"))+"_ms"),URIRef(ontnamespace+"hasHighlight"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight")))
                        resgraph.add((URIRef(namespace+"ledset_"+str(ledsetid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightSourceGroup")))
                        resgraph.add((URIRef(namespace+"ledset_"+str(ledsetid)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("LightSource Group "+str(ledsetid),lang="en")))
                        ledsetid+=1
                elif str(dataitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}LightDirections":
                    highlightsphereid=dataitem.attrib["SphereID"]
                    for hitem in dataitem:
                        print("Highlight: "+str(hitem.attrib))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightDirection")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Light direction vector "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid),lang="en")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef(ontnamespace+"calibration"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.opengis.net/ont/geosparql#inSRS"),URIRef(namespace+"DomeCoordinateSystem")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration"),URIRef(ontnamespace+"calibrationobject"),URIRef(namespace+str(highlightsphereid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration setup for light direction vector "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid))))
                        if "x" in hitem.attrib and "y" in hitem.attrib and "z" in hitem.attrib:
                            resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT Z("+str(hitem.attrib["x"])+" "+str(hitem.attrib["y"])+" "+str(hitem.attrib["z"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
                        resgraph.add((URIRef(namespace+projectname+"_result"),URIRef(ontnamespace+"hasLightDirection"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld")))
    return resgraph
    #resgraph.serialize("resgraph_rtibuilder.ttl")
    #with open("resgraph_rtibuilder.json", "w") as outfile:
    #    outfile.write(json.dumps(resjson))

def parseRTIOSCARXML(xmlfile,resgraph,folder=""):
     # create element tree object
    tree = ET.parse(xmlfile)
  
    # get root element
    root = tree.getroot()
  
    # create empty list for news items
    newsitems = []
    camindexToURI=[]
    mpid=namespace+xmlfile
    resgraph.add((URIRef(mpid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementProject")))  
    resgraph.add((URIRef(mpid),URIRef(ontnamespace+"measurementSeries"),URIRef(str(mpid)+"_ms"))) 
    resgraph.add((URIRef(str(mpid)+"_ms"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementSeries")))  
    resgraph.add((URIRef(str(mpid)+"_ms"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("MeasurementSeries for Measurement Project "+str(mpid))))  
    resgraph.add((URIRef(ontnamespace+"exposureTime"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"measurementSeries"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"setup"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"usesCamera"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"usesLightSourceGroup"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"capturingdevice"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"pixelType"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"axisDistancePosition"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef(ontnamespace+"axisFocusPosition"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef("http://purl.org/dc/terms/created"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))    
    print(root)
    resjson={"systemdata":{}}
    for item in root:
    
        if str(item.tag)=="system-data":
            print("System data")
            for hitem in item:
                if str(hitem.tag)=="cameras":
                    resjson["systemdata"]["cameras"]=[]
                    thevendor=None
                    camid=None
                    indexx=None
                    position=None
                    height=None
                    width=None
                    for citem in hitem:
                        for vendor in citem.iter("vendor"):                        
                            #print("Vendor: "+str(vendor.text))
                            thevendor=vendor.text
                        for idd in citem.iter("id"):
                            #print("ID: "+str(idd.text))
                            camid=idd.text
                        for index in citem.iter("index"):
                            #print("Index: "+str(index.text))
                            indexx=index.text
                        for pos in citem.iter("position"):
                            #print("Position: "+str(pos.text))
                            position=pos.text
                        for heightt in citem.iter("height"):
                            #print("Height: "+str(heightt.text))
                            height=heightt.text
                        for widthh in citem.iter("width"):
                            #print("Width: "+str(widthh.text))
                            width=widthh.text
                        rescam={"id":camid,"vendor":thevendor}
                        resjson["systemdata"]["cameras"].append(rescam)
                        camindexToURI.append(str(namespace)+str(camid))
                        resgraph.add((URIRef(namespace+camid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Camera")))
                        resgraph.add((URIRef(namespace+camid),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal(thevendor,lang="en")))   
                        resgraph.add((URIRef(namespace+camid),URIRef(ontnamespace+"cameraPosition"),Literal(position)))                       
                if str(hitem.tag)=="measurement-sequences":
                    for ms in citem.iter("measurement-sequence"):
                        print("Vendor: "+str(ms.text))                    
        if str(item.tag)=="scan-data":
            print("Scan data")
            for hitem in item:
                print("",end="")
                if str(hitem.tag)=="images":
                    coinside=None
                    measureid=None
                    ledsetid=None
                    cameraindex=None
                    exposureTime=None
                    name=None
                    formatt=None
                    axisDistancePosition=None
                    axisFocusPosition=None
                    for imitem in hitem:
                        for coinsidee in imitem.iter("coin-side"):
                            #print("Coin Side: "+str(coinsidee.text))
                            coinside=coinsidee.text
                        for mid in imitem.iter("measure-id"):
                            #print("Measure ID: "+str(mid.text))
                            measureid="measure_"+mid.text
                        for ledsetidd in imitem.iter("led-set-id"):
                            #print("LED Set ID: "+str(ledsetidd.text))
                            ledsetid="ledset_"+ledsetidd.text
                        for cindex in imitem.iter("camera-index"):
                            #print("Camera Index: "+str(cindex.text)) 
                            cameraindex=cindex.text
                        for extime in imitem.iter("exposure-time"):
                            #print("Exposure Time: "+str(extime.text))
                            exposureTime=extime.text
                        for namee in imitem.iter("name"):
                            #print("Name: "+str(namee.text))
                            name=namee.text                            
                        for formatt in imitem.iter("format"):
                            #print("Format: "+str(formatt.text)) 
                            pixeltype=formatt.text  
                        for axisDistancePositionn in imitem.iter("axisDistancePosition"):
                            #print("Axis Distance Position: "+str(axisDistancePositionn.text))
                            axisDistancePosition=axisDistancePositionn.text
                        for axisFocusPositionn in imitem.iter("axisFocusPosition"):
                            #print("Axis Focus Position: "+str(axisFocusPositionn.text))
                            axisFocusPosition=axisFocusPositionn.text 
                        measureuri=namespace+name.replace(".tif","")
                        resgraph.add((URIRef(measureuri),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Measurement")))
                        resgraph.add((URIRef(str(mpid)+"_ms"),URIRef(ontnamespace+"measurement"),URIRef(ontnamespace+"Measurement")))
                        if "time-stamp" in imitem.attrib:
                            resgraph.add((URIRef(measureuri),URIRef("http://purl.org/dc/terms/created"),Literal(imitem.attrib["time-stamp"],datatype="http://www.w3.org/2001/XMLSchema#dateTime")))                            
                        resgraph.add((URIRef(measureuri),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement "+str(measureid)+" (Camera "+str(cameraindex)+" LED Set "+str(ledsetid)+" Exp "+str(exposureTime)+")",lang="en")))
                        resgraph.add((URIRef(measureuri),URIRef("http://www.w3.org/2000/01/rdf-schema#comment"),Literal(str(name),lang="en")))
                        resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"axisDistancePosition"),Literal(str(axisDistancePosition),datatype="http://www.w3.org/2001/XMLSchema#double")))
                        resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"axisFocusPosition"),Literal(str(axisFocusPosition),datatype="http://www.w3.org/2001/XMLSchema#double")))
                        resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"pixelType"),URIRef(ontnamespace+pixeltype)))
                        resgraph.add((URIRef(ontnamespace+pixeltype),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"PixelType")))
                        resgraph.add((URIRef(ontnamespace+pixeltype),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal(pixeltype)))
                        resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"setup"),URIRef(measureuri+"_setup")))
                        resgraph.add((URIRef(measureuri+"_setup"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementSetup")))
                        resgraph.add((URIRef(measureuri+"_setup"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement Setup for Measurement "+str(measureid)+" (Camera "+str(cameraindex)+" LED Set "+str(ledsetid)+" Exp "+str(exposureTime)+")",lang="en")))
                        resgraph.add((URIRef(measureuri+"_setup"),URIRef("http://www.w3.org/2003/12/exif/exposureTime"),URIRef(measureuri+"_setup_shutterTime_1")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue"),URIRef(measureuri+"_setup_shutterTime_1_value")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"M_shutter_time0")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Shutter Time Measure for Measurement "+str(measureid)+" (Camera "+str(cameraindex)+" LED Set "+str(ledsetid)+" Exp "+str(exposureTime)+")")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1_value"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/Measure")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1_value"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Shutter Time Measure Value for Measurement "+str(measureid)+" (Camera "+str(cameraindex)+" LED Set "+str(ledsetid)+" Exp "+str(exposureTime)+")",lang="en")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1_value"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasNumericalValue"),Literal(str(exposureTime),datatype="http://www.w3.org/2001/XMLSchema#integer")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1_value"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/seconds-Time")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"RTIScanner")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("RTI Scanner",lang="en")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef(ontnamespace+"hasComponent"),URIRef(namespace+"capturing_device_1_dome")))
                        resgraph.add((URIRef(namespace+"capturing_device_1_dome"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"RTIDome")))
                        resgraph.add((URIRef(namespace+"capturing_device_1_dome"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("RTI Dome of RTI Scanner",lang="en")))
                        resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"capturingdevice"),URIRef(namespace+"capturing_device_1")))
                        if int(cameraindex)<len(camindexToURI):
                            resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"usesCamera"),URIRef(str(camindexToURI[int(cameraindex)]))))
                        else:
                            resgraph.add((URIRef(namespace+str(cameraindex)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Camera "+str(cameraindex),lang="en")))                            
                            resgraph.add((URIRef(namespace+str(cameraindex)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Camera")))
                            resgraph.add((URIRef(namespace+str(cameraindex)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Camera "+str(cameraindex),lang="en")))
                            resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef(ontnamespace+"hasCamera"),URIRef(namespace+str(cameraindex))))
                        resgraph.add((URIRef(namespace+ledsetid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightSourceGroup")))
                        resgraph.add((URIRef(namespace+ledsetid),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("LightSource Group "+str(ledsetid),lang="en")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef(ontnamespace+"hasLightSourceGroup"),URIRef(namespace+ledsetid)))
                        resgraph.add((URIRef(measureuri),URIRef(ontnamespace+"usesLightSourceGroup"),URIRef(namespace+ledsetid)))
    return resgraph

parser=argparse.ArgumentParser()
parser.add_argument("-i","--input",nargs='*',help="the input file(s) to parse",action="store",required=True)
parser.add_argument("-o","--output",help="the output path(s)",action="store",default="",required=False)
parser.add_argument("-f","--format",help="the format to parse: oscar, rtibuilder oder relight",action="store",required=True)
parser.add_argument("-if","--imagefolder",help="the folder in which images are stored",action="store",default="",required=False)
args, unknown=parser.parse_known_args()
print(args)
print("The following arguments were not recognized: "+str(unknown))    
g=Graph()
theformat=args.format
print(theformat)
for inp in args.input: 
    if theformat=="rtibuilder":
        g=parseRTIBuilderXML(inp,g,args.imagefolder)
        g.serialize(inp+"_rtibuilder.ttl")
    elif theformat=="oscar":
        g=parseRTIOSCARXML(inp,g,args.imagefolder)
        g.serialize(inp+"_oscar.ttl")
    elif theformat=="relight":
        g=parseRelightJSON(inp,g,args.imagefolder)
        g.serialize(inp+"_relight.ttl")
