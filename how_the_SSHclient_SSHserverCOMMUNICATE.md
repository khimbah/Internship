HP OpenVMS Systems Documentation
Content starts here 	
How the SSH Client and Server Communicate
  	  	
 

During SSH client and server configuration, two configuration files are installed: a client configuration file, which is read by an SSH client process when the SSH command is invoked; and the server configuration file, which is read by an SSH server process when a connection request arrives from an SSH client. All configuration files are ASCII text files and have either STREAM_LF format (for example, if copied directly from a UNIX system), or variable-length format (if created with the TCPIP$CONFIG.COM command procedure or with a text editor). Appendix B shows the SSH client and server configuration files.

After you install and configure the SSH software on all client and server hosts:

    Specify the authentication methods on the clients and server.

    Create and distribute key files.

    Start the SSH client and server.

When TCP/IP Services is started on an SSH server host, the auxiliary server creates a listening socket for SSH. The SSH server is now ready to accept a remote connection request. When you execute an SSH command on a remote client host, the SSH client is initiated. The client reads the configuration file and initiates a TCP connection to a server host using the specified destination port. On an SSH server host, the auxiliary server creates a copy of the server process, which reads the server's configuration file.

To establish a secure connection:

    The SSH client and server exchange information about supported protocol versions. This enables different implementations to overcome incompatibilities.

    The SSH server initiates a host public key exchange with the client to prove its identity. Each server host has a public and private key pair, which is created during the SSH server configuration. This pair uniquely identifies the server host. The first time an SSH client connects to a server, SSH prompts the user to accept a copy of the server's public host key with the following message:

    Host key not found from the list of known hosts.
    Are you sure you want to continue connecting (yes/no)

    (Note that the user response is case sensitive. Enter the response in lowercase letters.)

    If the user response is yes, SSH copies the server's public host key to the SSH client host. The client host uses this public host key to authenticate the SSH server on subsequent connections.

    If, during subsequent connection attempts, the SSH client detects that the SSH server's host key differs from the one stored on the client, the following message is displayed:

    WARNING: HOST IDENTIFICATION HAS CHANGED!

    The message continues with text that warns of a possible "man-in-the-middle" attack. This message does not necessary mean that data has been compromised. The host key may have been legitimately changed. The user should copy the server's new key or contact the system manager.

    The SSH client and server negotiate session parameters by exchanging information about supported parameters, including authentication methods, hash functions, and data compression methods.

    The SSH client and server develop a shared (symmetric) session key to encrypt data using a key exchange method. When both the client and server know the secret data encryption key, a secure connection is established and the client and server can exchange data securely. The session key expires either when the session ends or when the session timer expires and a rekey operation is done.

    After the SSH client and server authenticate each other, the session is ready to authenticate the user by applying one or more of the authentication methods.

    The SSH server checks the user's identity. The user must have a valid user account and home directory on the server. If the server fails to authenticate the user, the server refuses the connection.

    After SSH authenticates the user's identity, the actual secure data transfer between client and server occurs.

    The SSH server runs in a loop, accepting messages from the client, performing required actions, and returning reply messages to the client.

    When the user closes the connection, the server process terminates. The auxiliary server continues to listen for new SSH connection requests.



SSH Authentication
  	  	


Port Forwarding  

 
End of content




