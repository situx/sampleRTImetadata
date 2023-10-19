import xml.etree.ElementTree as ET
from rdflib import Graph

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
  
    print(root)
    #print(root.children())
    for neighbor in root.iter('Header'):
        print(neighbor.attrib)
    # iterate news items
    for item in root:
        print(item.tag)
        if str(item.tag)=="{http://alba.di.uminho.pt/XMLCarrier}Header":
            print("Header")
            for hitem in item:
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
                    print(param)
        # empty news dictionary
      
    # return news items list
    return newsitems

def parseRTIOSCARXML(xmlfile,resgraph):
     # create element tree object
    tree = ET.parse(xmlfile)
  
    # get root element
    root = tree.getroot()
  
    # create empty list for news items
    newsitems = []
  
    print(root)
    
    for item in root:
    
        if str(item.tag)=="system-data":
            print("System data")
            for hitem in item:
                if str(hitem.tag)=="cameras":
                    for citem in hitem:
                        for vendor in citem.iter("vendor"):
                            print("Vendor: "+str(vendor.text))
                        for idd in citem.iter("id"):
                            print("ID: "+str(idd.text)) 
                        for index in citem.iter("index"):
                            print("Index: "+str(index.text)) 
                        for pos in citem.iter("position"):
                            print("Position: "+str(pos.text))    
                        for height in citem.iter("height"):
                            print("Height: "+str(height.text))
                        for width in citem.iter("width"):
                            print("Width: "+str(width.text))   
                if str(hitem.tag)=="measurement-sequences":
                    for ms in citem.iter("measurement-sequence"):
                        print("Vendor: "+str(ms.text))                    
        if str(item.tag)=="scan-data":
            print("Scan data")
            for hitem in item:
                print("",end="")
                if str(hitem.tag)=="images":
                    for imitem in hitem:
                        for coinside in imitem.iter("coin-side"):
                            print("Coin Side: "+str(coinside.text))
                        for mid in imitem.iter("measure-id"):
                            print("Measure ID: "+str(mid.text))
                        for ledsetid in imitem.iter("led-set-id"):
                            print("LED Set ID: "+str(ledsetid.text))
                        for cindex in imitem.iter("camera-index"):
                            print("Camera Index: "+str(cindex.text)) 
                        for extime in imitem.iter("exposure-time"):
                            print("Exposure Time: "+str(extime.text)) 
                        for name in imitem.iter("name"):
                            print("Name: "+str(name.text)) 
                        for formatt in imitem.iter("format"):
                            print("Format: "+str(formatt.text)) 
                        for axisDistancePosition in imitem.iter("axisDistancePosition"):
                            print("Axis Distance Position: "+str(axisDistancePosition.text))
                        for axisFocusPosition in imitem.iter("axisFocusPosition"):
                            print("Axis Focus Position: "+str(axisFocusPosition.text))                             
    
g=Graph()
parseRTIBuilderXML("Fisch.xml",g)
#parseRTIOSCARXML("digitalizationResult.xml",g)