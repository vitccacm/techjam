# Day X : An Introduction to the Web Security

## Table of contents

1. An introduction to networking 
2. Cross site scripting
3. SQL Injection
4. Miscellaneous security configuration vulnerabilities

## 1. An introduction to networking

## 1.1 What is Networking

Networking refers to connecting computing devices to exchange resources and information. It enables communication between these devices, allowing them to send and receive data using various transmission mediums like wired or wireless connections. Networking is the backbone of the internet and plays a crucial role in modern technology.

## 1.2 Importance of Networking

Networking is important for various reasons, both in professional and personal settings. Understanding the importance of networking helps individuals and organizations make the most of their connected systems.

- **Data Sharing:** Networking enables efficient data sharing and collaboration among users and devices.
- **Resource Access:** It provides access to shared resources such as servers and/or other devices.
- **Internet Connectivity:** Networking is the foundation for internet access, which allows global communication.
- **Security:** Networking includes security measures to protect the data and devices.

## 1.3 Types of Networks

There are different types of networks designed to serve various purposes accordingly. Understanding the different network types helps in selecting the right network architecture for specific needs.

Common types of networks:
- **Local Area Network (LAN):** A LAN connects devices within a limited area, like an office or a home. It provides high-speed data transfer and is typically used for internal communication.
- **Wide Area Network (WAN):** A WAN covers a larger area and connects multiple LANs. The internet, for example, is a global WAN. WANs use various technologies to transmit data over longer distances.
- **Wireless Networks:** Wireless networks use radio waves or infrared signals to connect devices without physical cables. Wi-Fi is a common example used in homes and businesses.
- **Cloud Networks:** Cloud networks rely on internet connectivity to access remote services and resources hosted in data centers.

## 2. Networking Layers

### 2.1 The OSI Model
The OSI Model provides a conceptual framework for understanding how different networking functions are organized. It consists of seven layers, each responsible for specific tasks in the communication process.

### 2.2 Layer 1: Physical Layer
The Physical Layer is the lowest layer of the OSI Model, it deals with the physical connection between devices. This layer ensures that data is transmitted as electrical, optical, or radio signals over the physical medium, in the form of bits. At the physical layer, one might find "physical" resources such as network hubs, cabling, repeaters, network adapters or modems.

### 2.3 Layer 2: Data Link Layer
The Data Link Layer is responsible for node-to-node communication and error detection. It divides data into frames and manages access to the physical medium. Ethernet and Wi-Fi are common technologies associated with this layer.

### 2.4 Layer 3: Network Layer
The Network Layer is responsible for receiving frames from the data link layer, and delivering them to their intended destinations among based on the addresses contained inside the frame. It sends data in packets.
The network layer finds the destination by using logical addresses, such as IP (internet protocol). Routers are essential devices at this layer, as they physically guide information between different networks to get it where it needs to go.

### 2.5 Layer 4: Transport Layer
The Transport Layer ensures end-to-end communication and data reliability. It handles flow control, error correction, and data segmentation, i.e splits data into "segments". Protocols like TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate here.

### 2.6 Layer 5: Session Layer
The Session Layer manages and establishes sessions or connections between applications. It controls dialog, synchronization, and termination. This layer ensures data integrity during the entire session.

### 2.7 Layer 6: Presentation Layer
The Presentation Layer is responsible for data translation, encryption, and compression. It ensures that data is presented in a format that applications can understand and work with.

### 2.8 Layer 7: Application Layer
The Application Layer is the topmost layer and interacts directly with user applications. It provides services like email, file transfer, and web browsing. Protocols such as HTTP, FTP, and SMTP are part of this layer.

### Protocol Data Unit ( PDU ): 

In networking, a protocol data unit (PDU) is the basic unit of exchange between entities that communicate using a specified networking protocol.
- **Application Layer:** message
- **Presentation Layer:** message
- **Session Layer:** message
- **Transport Layer:** segments
- **Network Layer:** packets
- **Data Link Layer:** frames
- **Physical Layer:** bits

## 3. Networking Protocols

Networking protocols are a set of rules and conventions that govern data communication and interaction between devices on a network for efficient and secure data transfer.

### 3.1 Common Networking Protocols

- **TCP (Transmission Control Protocol):** Ensures reliable, ordered, and error-checked delivery of data between devices.
  
- **UDP (User Datagram Protocol):** Provides fast data transmission but with no guarantees on reliability.
  
- **IP (Internet Protocol):** Manages the addressing and routing of data packets in a network.
  
- **HTTP (Hypertext Transfer Protocol):** Used for web page retrieval.
  
- **HTTPS (Hypertext Transfer Protocol Secure):** A secure version of HTTP, often used for online transactions.
  
- **ARP (Address Resolution Protocol):** It is used for mapping a network address (e.g. an IPv4 address) to a physical address like an Ethernet address (also named a MAC address).
  
- **DNS (Domain Name System):** DNS is like the internet's phone book, translating domain names into IP addresses that computers use to identify each other.
  
- **DHCP (Dynamic Host Configuration Protocol):** DHCP automates the process of assigning IP addresses to devices on a network, making network configuration more efficient.
  
- **FTP (File Transfer Protocol):** FTP is a standard protocol for transferring files between computers over a network.
  
- **SMTP (Simple Mail Transfer Protocol) and POP3 (Post Office Protocol 3):** SMTP handles the sending of emails, while POP3 is used for retrieving emails from a server.

## 4. Cross site scripting

Cross-Site Scripting, often abbreviated as XSS, is a security vulnerability in web applications. 
It occurs when a web application allows untrusted data to be included in a web page, which is then executed as code by the victim's browser. 
This malicious code can steal sensitive information, manipulate page content, or even perform actions on behalf of the user without their consent.

### 4.1 Types of XSS

There are several types of XSS attacks, including:

- **Stored XSS:** Malicious scripts are permanently saved on a target server and presented to users when they visit a specific page.

- **Reflected XSS:** Malicious scripts are embedded in URLs and only impact users who click on the manipulated link.

- **DOM-based XSS:** The attack takes place in the Document Object Model (DOM) of a web page, often manipulated by client-side scripts.

- **Blind XSS:** Attackers inject malicious scripts, but they don't directly witness the results. They rely on another user or the application's response to discover the impact.

### 4.2 Working of XSS

XSS vulnerabilities typically exploit the trust that a user's browser places in a web application. Here's how an XSS attack works:

1. An attacker injects malicious code (usually a JavaScript code) into a web application.

2. The web application stores this code in its response.

3. When a victim visits the compromised page, their browser executes the injected code.

4. The attacker gains access to the victim's session cookies, steals sensitive information, or performs malicious activities.

### 4.3 How to prevent 

Preventing XSS attacks is crucial for the security of web applications. Key mitigation strategies include:

- **Input Validation:** Validate user input to ensure that it doesn't contain malicious code.

- **Output Encoding:** Encode user-generated content when rendering it in web pages to prevent script execution.

- **HTTP Security Headers:** Implement security headers like Content Security Policy (CSP) to restrict the sources of executable scripts.

- **Secure Development Practices:** Follow secure coding practices to minimize vulnerabilities from the outset.

## 5. SQL Injection

SQL Injection is a widespread and critical security vulnerability that affects database-driven web applications. It occurs when an attacker manipulates user input to execute arbitrary SQL queries on a web application's database. When successful, this can lead to unauthorized access, data theft, and even data manipulation within the database.

### 5.1 How SQL Injection Works

SQL Injection attacks take advantage of poor input validation and improper handling of user-generated data by a web application. Here's how SQL Injection works:

1. First, an attacker spots a weak point in a web application, typically in an input field like a login form or search box.
2. The attacker inserts harmful SQL code into this vulnerable field.
3. The web application incorporates the attacker's input directly into its SQL queries without proper checks or safeguards.
4. Consequently, the database executes the attacker's SQL code, which can lead to the exposure of sensitive data or changes to the database's contents.

### 5.2 Types of SQL Injection

There are several types of SQL Injection attacks, including:

- **Classic SQL Injection:** The attacker directly inserts malicious SQL statements into user input fields.

- **Blind SQL Injection:** Attackers infer the results of SQL queries by observing differences in application responses.

- **Time-Based Blind SQL Injection:** Attackers delay the application responses to extract information.

- **Second-Order SQL Injection:** Attackers manipulate data that is stored in the application's database and later used in SQL queries.

### 5.3 How to prevent

Preventing SQL Injection is essential for safeguarding web applications and sensitive data. Key prevention measures include:

- **Parameterized Statements:** Use prepared statements to separate user input from SQL code.
 
- **Input Validation:** Validate user input to reject malicious data.
 
- **Least Privilege Principle:** Ensure that database users used by the application have limited permissions, reducing the risk of a potential attack.
 
- **Web Application Firewalls (WAFs):** Implement WAFs to detect and block SQL Injection attempts.

## 6. Web Security and Vulnerabilities

Web security is a critical aspect of ensuring the safety and integrity of websites and web applications. It involves implementing various measures and best practices to protect web assets from a wide range of threats and vulnerabilities.

Web security is an ongoing process, as threats continually evolve. It requires a proactive approach, constant monitoring, and a commitment to staying informed about emerging security risks. Neglecting web security can lead to data breaches, reputational damage, financial losses, and legal consequences. Therefore, organizations and individuals should prioritize web security as an integral part of their online presence.





