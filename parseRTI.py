import xml.etree.ElementTree as ET
from rdflib import Graph
from rdflib import URIRef, Literal
import json

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
    #print(root.children())
    for neighbor in root.iter('Header'):
        print(neighbor.attrib)
    # iterate news items
    for item in root:
        print(item.tag)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}Header":
            print("Header")
            projectname=None
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
                resgraph.add((URIRef(namespace+measureid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"MeasurementProject")))
                resgraph.add((URIRef(namespace+measureid),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement Project "+str(projectname))))
                if description!=None and description!="":
                    resgraph.add((URIRef(namespace+measureid),URIRef("http://www.w3.org/2000/01/rdf-schema#comment"),Literal(str(description))))
                if author!=None and author!="":
                    resgraph.add((URIRef(namespace+measureid),URIRef("http://purl.org/dc/terms/creator"),Literal(str(author))))
                if creationdate!=None and creationdate!="":
                    resgraph.add((URIRef(namespace+measureid),URIRef("http://purl.org/dc/terms/created"),Literal(str(creationdate))))
                print(hitem)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}fileSec":
            print("fileSec")
            for hitem in item:
                if str(hitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}fileGrp":
                    print("fileGroup")
                    for gitem in hitem:
                        print("file")
                        if str(gitem.tag)=="{http://alba.di.uminho.pt/XMLCarrier}file":
                            print(gitem)
                print(hitem)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}Processes":
            print("Processes")
            for hitem in item:
                pid="Process ID: "+str(hitem.get("ID"))
                compid="Process ID: "+str(hitem.get("COMPID"))
                seq="SEQ: "+str(hitem.get("SEQ"))
                status="STATUS: "+str(hitem.get("STATUS"))
                typee="TYPE: "+str(hitem.get("TYPE"))
                
        print(item)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}dataSec":
            print("dataSec")
            for dataitem in item:
                print(dataitem)
                for param in dataitem:
                    name="Process ID: "+str(param.get("ID"))
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
                            print("Vendor: "+str(vendor.text))
                            thevendor=vendor.text
                        for idd in citem.iter("id"):
                            print("ID: "+str(idd.text))
                            camid=idd.text
                        for index in citem.iter("index"):
                            print("Index: "+str(index.text))
                            indexx=index.text
                        for pos in citem.iter("position"):
                            print("Position: "+str(pos.text))
                            position=pos.text
                        for heightt in citem.iter("height"):
                            print("Height: "+str(heightt.text))
                            height=heightt.text
                        for widthh in citem.iter("width"):
                            print("Width: "+str(widthh.text))
                            width=widthh.text
                    rescam={"id":camid,"vendor":thevendor}
                    resjson["systemdata"]["cameras"].append(rescam)
                    resgraph.add((URIRef(namespace+camid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Camera")))
                    resgraph.add((URIRef(namespace+camid),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal(thevendor)))   
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
                            print("Coin Side: "+str(coinsidee.text))
                            coinside=coinsidee.text
                        for mid in imitem.iter("measure-id"):
                            print("Measure ID: "+str(mid.text))
                            measureid="measure_"+mid.text
                        for ledsetidd in imitem.iter("led-set-id"):
                            print("LED Set ID: "+str(ledsetidd.text))
                            ledsetid="ledset_"+ledsetidd.text
                        for cindex in imitem.iter("camera-index"):
                            print("Camera Index: "+str(cindex.text)) 
                            cameraindex="camera_"+cindex.text
                        for extime in imitem.iter("exposure-time"):
                            print("Exposure Time: "+str(extime.text))
                            exposureTime=extime.text
                        for namee in imitem.iter("name"):
                            print("Name: "+str(namee.text))
                            name=namee.text                            
                        for formatt in imitem.iter("format"):
                            print("Format: "+str(formatt.text)) 
                            name=namee.text  
                        for axisDistancePositionn in imitem.iter("axisDistancePosition"):
                            print("Axis Distance Position: "+str(axisDistancePositionn.text))
                            axisDistancePosition=axisDistancePositionn.text
                        for axisFocusPositionn in imitem.iter("axisFocusPosition"):
                            print("Axis Focus Position: "+str(axisFocusPositionn.text))
                            axisFocusPosition=axisFocusPositionn.text                         
                        resgraph.add((URIRef(namespace+measureid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Measurement")))
                        resgraph.add((URIRef(namespace+measureid),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement "+str(measureid))))
                        resgraph.add((URIRef(namespace+measureid),URIRef("http://www.w3.org/2000/01/rdf-schema#comment"),Literal(str(name))))
                        resgraph.add((URIRef(namespace+measureid),URIRef(ontnamespace+"setup"),URIRef(namespace+measureid+"_setup")))
                        resgraph.add((URIRef(namespace+measureid+"_setup"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Measurement Setup for Measurement "+str(measureid))))
                        resgraph.add((URIRef(namespace+measureid+"_setup"),URIRef("http://www.w3.org/2003/12/exif/exposureTime"),URIRef(namespace+measureid+"_setup_shutterTime_1")))
                        resgraph.add((URIRef(namespace+measureid+"_setup_shutterTime_1"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasValue"),URIRef(namespace+measureid+"_setup_shutterTime_1_value")))
                        resgraph.add((URIRef(namespace+measureid+"_setup_shutterTime_1_value"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/Measure")))
                        resgraph.add((URIRef(namespace+measureid+"_setup_shutterTime_1_value"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Shutter Time Measure for Measurement "+str(measureid))))
                        resgraph.add((URIRef(namespace+measureid+"_setup_shutterTime_1_value"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasNumericalValue"),Literal(str(exposureTime))))
                        resgraph.add((URIRef(namespace+measureid+"_setup_shutterTime_1_value"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/hasUnit"),URIRef("http://www.ontology-of-units-of-measure.org/resource/om-2/seconds-Time")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"RTIScanner")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("RTI Scanner")))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef(ontnamespace+"hasComponent"),URIRef(namespace+"capturing_device_1_dome")))
                        resgraph.add((URIRef(namespace+"capturing_device_1_dome"),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"RTIDome")))
                        resgraph.add((URIRef(namespace+"capturing_device_1_dome"),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("RTI Dome of RTI Scanner")))
                        resgraph.add((URIRef(namespace+measureid),URIRef(ontnamespace+"capturingdevice"),URIRef(namespace+"capturing_device_1")))
                        resgraph.add((URIRef(namespace+str(cameraindex)),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"Camera")))
                        resgraph.add((URIRef(namespace+str(cameraindex)),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("Camera "+str(cameraindex))))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef(ontnamespace+"hasCamera"),URIRef(namespace+str(cameraindex))))
                        resgraph.add((URIRef(namespace+measureid),URIRef(ontnamespace+"usesCamera"),URIRef(namespace+str(cameraindex))))
                        resgraph.add((URIRef(namespace+ledsetid),URIRef("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),URIRef(ontnamespace+"LightSourceGroup")))
                        resgraph.add((URIRef(namespace+ledsetid),URIRef("http://www.w3.org/2000/01/rdf-schema#label"),Literal("LightSource Group "+str(ledsetid))))
                        resgraph.add((URIRef(namespace+"capturing_device_1"),URIRef(ontnamespace+"hasLightSourceGroup"),URIRef(namespace+ledsetid)))
                        resgraph.add((URIRef(namespace+measureid),URIRef(ontnamespace+"usesLightSourceGroup"),URIRef(namespace+ledsetid)))
    resgraph.serialize("resgraph_oscar.ttl")
    with open("resgraph_oscar.json", "w") as outfile:
        outfile.write(json.dumps(resjson))
    
g=Graph()
parseRTIBuilderXML("Fisch.xml",g)
parseRTIOSCARXML("digitalizationResult.xml",g)