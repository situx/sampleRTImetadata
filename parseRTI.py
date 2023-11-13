import xml.etree.ElementTree as ET
from rdflib import Graph
from rdflib import URIRef, Literal
import json
import re

namespace="http://i3mainz.de/metadata/"
ontnamespace="http://objects.mainzed.org/ont#"

def processRTIBuilderXMLMetadata():
    print("metadata")

def processRTIBuilderXMLImageMetadata():
    print("imagemetadata")

def parseRTIBuilderXML(xmlfile,resgraph):
  
    # create element tree object
    tree = ET.parse(xmlfile)
  
    # get root element
    root = tree.getroot()
  
    # create empty list for news items
    newsitems = []
    resjson={}
    print(root)
    resgraph.add((URIRef(ontnamespace+"usedForCalibrationObjectDetection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef(ontnamespace+"usedForHighDetection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef("http://www.w3.org/2000/01/rdf-schema#member"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))  
    resgraph.add((URIRef(ontnamespace+"calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"calibrationobject"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))    
    resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#asWKT"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))      
    resgraph.add((URIRef("https://w3id.org/function/ontology#required"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef(ontnamespace+"radius"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
    resgraph.add((URIRef("https://w3id.org/function/ontology#executes"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("https://w3id.org/function/ontology#expects"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef("https://w3id.org/function/ontology#returns"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"hasHighlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
    resgraph.add((URIRef(ontnamespace+"hasLightDirection"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
   
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
                resgraph.add((URIRef(namespace+projectname),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightProjection")))
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
                            for coord in coordarr:
                                if len(coord)>0:
                                    wktstr+=coord.replace("x:","").replace("y:","")+", "
                            wktstr=wktstr[0:-2]+"))"
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/ns/prov#Activity")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationObjectInput")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Input for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)),URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent")))                      
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/sf#Polygon")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Input Extent for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)+"_input"+str(areacounter)+"_extent"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal(wktstr,datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
                            areacounter+=1
                elif dataitem.tag=="{http://alba.di.uminho.pt/XMLCarrier}Data" and dataitem.attrib["NAME"]=="BallDetectionOutput":
                    print("Ball Detection Output")
                    uuid=dataitem.get("UUID")
                    print("UUID: "+str(uuid))
                    areacounter=1
                    for param in dataitem:
                        if param.tag=="{http://alba.di.uminho.pt/XMLCarrier}area":
                            coords=param.attrib["COORDS"]
                            coordarr=coords.split(";")
                            wktstr="POLYGON(("
                            for coord in coordarr:
                                if len(coord)>0:
                                    wktstr+=coord.replace("x:","").replace("y:","")+", "
                            wktstr=wktstr[0:-2]+"))"
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/ns/prov#Activity")))
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationObjectOutput")))
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Output for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)),URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef(namespace+str(uuid)+"_"+str(areacounter)+"_extent")))                      
                            resgraph.add((URIRef(namespace+str(uuid)+"_"+str(areacounter)+"_extent"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.opengis.net/ont/sf#Polygon")))
                            resgraph.add((URIRef(namespace+str(uuid)+"_"+str(areacounter)+"_extent"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Output Extent for Calibration Object "+str(areacounter))))
                            resgraph.add((URIRef(namespace+str(uuid)+"_"+str(areacounter)+"_extent"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal(wktstr,datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
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
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationObject")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Sphere "+str(hitem.attrib["Order"]),lang="en")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"CalibrationSphere")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])),URIRef("http://www.opengis.net/ont/geosparql#hasGeometry"),URIRef(namespace+str(hitem.attrib["ID"]+"_position"))))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration Object Sphere "+str(hitem.attrib["Order"])+" Geometry")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT("+str(hitem.attrib["x"])+" "+str(hitem.attrib["y"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral")))
                        resgraph.add((URIRef(namespace+str(hitem.attrib["ID"])+"_position"),URIRef(ontnamespace+"radius"),Literal(str(hitem.attrib["r"]),datatype="http://www.w3.org/2001/XMLSchema#double")))
                elif str(dataitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}HighLights":
                    highlightsphereid=dataitem.attrib["SphereID"]
                    print("HighlightSphereID: "+str(highlightsphereid))
                    for hitem in dataitem:
                        print("Highlight: "+str(hitem.attrib))
                        resgraph.add((URIRef("http://www.opengis.net/ont/geosparql#asWKT"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#DatatypeProperty")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Highlight")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"ReferencePoint")))
                        resgraph.add((URIRef(ontnamespace+"Highlight"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#Class")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef(ontnamespace+"calibration"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Highlight Point Measurement "+str(highlightsphereid)+" Calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef(ontnamespace+"calibrationobject"),URIRef(namespace+str(highlightsphereid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration setup for highlight point measurement "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Image highlight point "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid),lang="en")))
                        if "x" in hitem.attrib and "y" in hitem.attrib:
                            resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_highlight"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT("+str(hitem.attrib["x"])+" "+str(hitem.attrib["y"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
                        resgraph.add((URIRef(namespace+projectname),URIRef(ontnamespace+"hasHighlight"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld")))
                elif str(dataitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}LightDirections":
                    highlightsphereid=dataitem.attrib["SphereID"]
                    for hitem in dataitem:
                        print("Highlight: "+str(hitem.attrib))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightDirection")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Light direction vector "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid),lang="en")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef(ontnamespace+"calibration"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration"),URIRef(ontnamespace+"calibrationobject"),URIRef(namespace+str(highlightsphereid))))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Calibration")))
                        resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld_calibration"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Calibration setup for light direction vector "+str(hitem.attrib["ImageID"])+" using sphere "+str(highlightsphereid))))
                        if "x" in hitem.attrib and "y" in hitem.attrib and "z" in hitem.attrib:
                            resgraph.add((URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld"),URIRef("http://www.opengis.net/ont/geosparql#asWKT"),Literal("POINT Z("+str(hitem.attrib["x"])+" "+str(hitem.attrib["y"])+" "+str(hitem.attrib["z"])+")",datatype="http://www.opengis.net/ont/geosparql#wktLiteral"))) 
                        resgraph.add((URIRef(namespace+projectname),URIRef(ontnamespace+"hasLightDirection"),URIRef(namespace+str(highlightsphereid)+"_"+str(hitem.attrib["ImageID"])+"_ld")))
        # empty news dictionary
    resgraph.serialize("resgraph_rtibuilder.ttl")
    with open("resgraph_rtibuilder.json", "w") as outfile:
        outfile.write(json.dumps(resjson))

def parseRTIOSCARXML(xmlfile,resgraph):
     # create element tree object
    tree = ET.parse(xmlfile)
  
    # get root element
    root = tree.getroot()
  
    # create empty list for news items
    newsitems = []
    camindexToURI=[]
    mpid=namespace+xmlfile
    resgraph.add((URIRef(mpid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementProject")))  
    resgraph.add((URIRef(ontnamespace+"exposureTime"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.w3.org/2002/07/owl#ObjectProperty")))
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
                        resgraph.add((URIRef(mpid),URIRef(ontnamespace+"measurement"),URIRef(ontnamespace+"Measurement")))
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
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1_value"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/Measure")))
                        resgraph.add((URIRef(measureuri+"_setup_shutterTime_1_value"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Shutter Time Measure for Measurement "+str(measureid)+" (Camera "+str(cameraindex)+" LED Set "+str(ledsetid)+" Exp "+str(exposureTime)+")",lang="en")))
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
    resgraph.serialize("resgraph_oscar.ttl")
    with open("resgraph_oscar.json", "w") as outfile:
        outfile.write(json.dumps(resjson))
    
g=Graph()
parseRTIBuilderXML("Fisch.xml",g)
g2=Graph()
parseRTIOSCARXML("digitalizationResult.xml",g2)