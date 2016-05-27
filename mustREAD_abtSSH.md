
For any protocol, you could come up with a definition of "all data" that would necessarily imply that something isn't sent encrypted.

For example, during the initialization and key exchange, the algorithm selection is public. Your average cryptographer will give you little more than a raised eyebrow if you complain about that fact though, since obviously it can't be encrypted as you haven't selected an algorithm yet.

Obviously something has to be sent unencrypted if for no other purpose than to set up encryption. But once the connection is secure, everything is secure. Once you have an encrypted channel, nothing from that point on is sent outside that channel. Furthermore, the protocol is extremely cautious to avoid sending any sensitive data before encryption is available. No username, no password, no identification of any sort, no indication of purpose, or any of that.

What little there is to decode is readily decode-able using common free tools such as wireshark. Fire up a packet capture, start an SSH session, and examine the exchange yourself. You'll see immediately what can be seen and what can't. Wireshark does a great job at decoding the protocol to allow you to view the internals of how it works.... to the extent that it's visible to someone watching the network traffic.

The typical flow looks like this:

    SSH version/software identification
    Key exchange init (algorithm selection)
    Diffie-Helman key exchange (uses SSH host key to prevent MITM)
    Everything after this is encrypted
    User authentication (including user key-based authentication)
    SSH Session now activate


