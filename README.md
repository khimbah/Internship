# Internship

The purpose of this repository is to capture the fields of experties that we have covered in Khumbulani's 2016 internship at Kartoza. Each of the following catagories go into detail of what has been learned.

###Networking

<!-- Write fluff about networking in general -->
Networking is when two or more computers make a connection in order to exchange information and share resources 
networking has helped to reduce costs in the business arena. for example sharing one printer reduces the costs of buying more than one printer per person. 
<!-- Write something specific that you learned/ did -->


### Cableing 
The kartoza internal network is a gb network. We therefore need high specification ethernet cables. We selected CAT 6 cables. <!-- Write something about CAT 6, --> 

### Crimping cables <!-- better term maybe? -->

We got a critping tool ...A crimping tool is a device used to conjoin two pieces of metal by deforming one or both of them in a way that causes them to hold each other.The result of the tool's work is called a crimp. A good example of crimping is the process of affixing a connector to the end of a cable.

We got RJ45 connectors ...RJ45. An 8-pin/8-position plug or jack is commonly used to connect computers onto Ethernet-based local area networks (LAN). Two wiring schemes–T568A and T568B–are used to terminate the twisted-pair cable onto the connector interface.

Boots...these are used to protect crimp connector(cable and rj45 connection) 

Wiring...There is a procedure that must be followed in running the wiring without which we can have a good working internetwork.
using the crimping device, unshield 1 inch of the cable to expose the wires you gonna need to connect to the rj45 connector.
pull the exposed wires back to expose the --- that supports the wires, cut it(---), pull the wires(but not with full force) to make them straight. now align the wires using the following order:
the wires should be orange-white, orange, green-white, solid blue, blue-white,  solid green, brown-white, solid brown respectively. the wires must be so compact so as to fit into the rj45 connector. insert the wires and push them to hit the end wall of the rj45 connector when that is done insert the head of the rj45 connector into the crimping tool where the rj45 fits in. then press the handles tightly.
congratulations! you have made your first good end. do the same on the other end, but first put the two rj45 connector boots for each end to cover the rj45 connectors then cut the cable into the length that you desire.

### Lengths
It is very important to keep the work place neat and tidy. To cut appropriate lengths of cables helps in controlling or managing the clutter. You can even bind cables together to tidy up.


### Supplies 
we got our supplies from Fussion I.T., admin@itfusion.co.za  
another supplier is Miro, www.miro.com 


### Network components

<!-- Short intro network components -->
basically, the network components  would be the routers, the switches, hubs, bridges, gateways and workstations or personal computers. But without cables(media) networking would be impossible, unless we are building a wireless computer network. Some peripherals can also form part of the network, like printers, scanners and so on.
### Server cabinet 
The server cabinet is where we put our switches, routers, network-attached-storage and uninterruptible-power-supply.

### what is a switch?
In a telecommunications network, a switch is a device that channels incoming data from any of multiple input ports to the specific output port that will take the data toward its intended destination.
### what is a router?
A router is a device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP's network. Routers are located at gateways, the places where two or more networks connect.
### what is a network-attached-storage?
network-attached-storage also called a nas, is a file-level computer data storage server connected to a computer network providing data access to a heterogeneous group of clients. NAS is specialised for serving files either by its hardware, software, or configuratoin.

### what is a uninterruptible-power-supply?
An uninterruptible power supply (UPS) is a device that allows a computer to keep running for at least a short time when the primary power source is lost. It also provides protection from power surges.

#####References
http://searchtelecom.techtarget.com
...
##creating and using ssh keys
###what is SSH?
SSH is sometimes refered to as  Secure Socket Shell, is a network protocol that provides administrators with a secure way to access a remote computer.

last week I learned how to create and use ssh keys using the command: sudo ssh-keygen -t rsa,this command should be typed on a commandline terminal.This command generates two keys, one is a private key and the other is a public key. A private key should remain with the authorised user whereas the public key must be known to the server. 
###what is a private and a public?
It is important to understand cryptography in order to understand how the private and public key works.

crytography is a method of storing and transmitting data in a particulat form so that only those for whom it is intended can read and process it. In order for us to use this method we need a private and a public key.

A public key is a cryptographic key that can be obtained and used by anyone to encrypt messages intended for a particular recipient, such that the encrypted messages can be deciphered only by using the second key that is known only to the recipient (the private key).

A private key or secret key is an encryption/decryption key known only to the party or parties that exchange secret messages.


