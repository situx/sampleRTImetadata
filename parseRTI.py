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
                print(hitem)
        print(item)
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
                print(hitem)
                
        if str(item.tag)=="scan-data":
            print("Scan data")
            for hitem in item:
                print(hitem)
                if str(hitem.tag)=="images":
                    for imitem in hitem:
                        print(imitem)
    
g=Graph()
#parseRTIBuilderXML("Fisch.xml",g)
parseRTIOSCARXML("digitalizationResult.xml",g)