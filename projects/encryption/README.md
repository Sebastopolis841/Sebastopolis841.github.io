
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC4dj42bt9rMo6SUSBhnM+iaqyp7inKU1IGj1plvc7WBGHCMgIKSQfLjsUofSRwySkRFFZlZ4iHy9CJHMTz8I9C1SM0g9CXtPePEmsrzd6BHwo3AxoAPA8rFXP1gUd+ZwlJRuyzggWcycpYTZtOGWdoPHvMqeRotolnBb8WMfTESlPnuuDhGPEwPQSQo4CuSJAZQiwxZqTTpbXAwCP3tY3JDopHJ6ab6tVmmGbERYM8YlOZFSuEpxrdqT3YWjOJ5C9z+p1lze0D+LdMccrrNGSdvIlQ94b4cNNFEAzC0CHQLM9Q2P5UDqmouNxdc2NdSv3t6+SLztIn4XiDVP+GZDcInXR44oatG20qnd+2yAxFRBK1efv1JoqYYUaF2hdZt5Z/uy0YKkHy1GCuijJOeEnnJBdYnSR7cFX0kunJzd8dmIp1LMeIQMrn3JE/hTn/AmBZM5INxac8h+IoOMmUHvQfBDqr1USw4jAmjqFyacJVZ27+3Llyuh63CNvpXqP5pe0= 1021858@1021858-student-F3H0CM62MY

My Partner's Key: MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAtmbQusKfpwlupMtgDj3LPPp1PBquDQZF2RFTLy6EkVtaGLOPsEe6d4nyWin4M1Xicy32IsaX0pnCIwhcsQBjoMe3d0KMKWF7+YiNiSGDErs7XCguAhb/2i28ZvtHssxu907JOA/Nb/n+taKZT/spQbBC1A6W2/CkWFSyiQBxNgIBwtjK2jUlQeAOuBWsRr0nPdPLdyoN1i1bIEVt5HWxHCR2O4Ky1nwmqbSWzMpN9eHiKEwMvgzPPCupA6vPfjKEKC6a7GBTpp/CzZaEo+PT0IiQhnnTohLGn95vBry7jSW1eZt72lopjthKUuD5RrmIKBEUjSm3jfH5/oEyMXr1ZAeR2iL01TEnUVe2g/fghgPnSOBhrBIbjBXfU2ap8xVRCdUUzZR+iRdn9Oz2QMTqquj+dW5CfTduTJGk4v3EvQ94/I3oYrv85mSoQUvx4MIyP3ZCPTjBG8VkNTiIxoCB45xCORrWM4F6BWtx+5xC61Ld6YKwodLAn1KujAHQk/5hAgMBAAE=

Our initial shared key: 11

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
|Spwwz espcp oz jzf wtvp nwlds czjlw nlfdp T oz lyo T slgp l qlgzctep nlco xj qlgzctep nlco td RZWPX|Hello there do you like clash royal cause I do and I have a favorite card my favorite card is GOLEM|11|
|Bc, W rcb'h dzom qzogv fcmozs. W rc sbxcm chvsf uoasg, sgdsqwozzm cjsfqcadzwqohsr pcofr uoasg.|No, I don't play clash royale. I do enjoy other games, especially overcomplicated board games.|14|
|Ты некультурная свинья и заслуживаешь тюрьмы. Zixpe Olvxib потрясающий|Ты некультурная свинья и заслуживаешь тюрьмы. Clash Royale потрясающий|23|
|G sldmprslyrcjw yk lmr ksjrgjglesyj, ylb gd G ucpc, G umsjbl'r'tc qrsbgcb psqqgyl. Yjqm, ufw qugraf rm clejgqf hsqr rm qyw "Ajyqf Pmwyjc". Rfyr kybc lm qclqc.|I unfortunately am not multilingual, and if I were, I wouldn't've studied russian. Also, why switch to english just to say "Clash Royale". That made no sense.|24|

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:

oqfTFD

Using the ASCII table, convert these six characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

01101111 01110001 01100110 01010100 01000110 01000100

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Sebastian's PC
    Destination: Kyle's PC  
    Sequence: 1/3
    Data: 01101111 01110001
    =========
    Packet 2:

    Source: Sebastian's PC
    Destination: Kyle's PC
    Sequence: 2/3 
    Data: 01100110 01010100
    =========
    Packet 3:

    Source: Sebastian's PC
    Destination: Kyle's PC
    Sequence: 3/3
    Data: 01000110 01000100
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?
	- The difference between symetric and asymmetric encryption is the lack of a shared key. In this simulation, the asymetric encryption was the first message sent, and the symmetric encryption was the messages where we both had the same ceaser cipher for each message.
- Why is it important that this protocol uses a new key for each message?
	- It is important because if there was the same key in every message, then a hacker could just find the key once and know every message that was sent.
- Why is it important that you never share your secret key?
	- This is important becasue the private key is what you use to decode all encrypted messages going to you. If somebody finds out what it is, then they can decrypt any message going to you.
- In the transport layer, do these messages use TCP or UDP? Why?
	- These messages use TCP because it ensures that the message gets there complete and error free.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
	- **Internet Layer:** In the internet layer, the message is sent along between the different routing tables to get to the desired IP adress as quickly as possible.
	- **Link Layer:** In the link layer, the message is divided between the header and payload. The header holds the information about the source, destination and sequence about the packet, while the payload contains the actual data. The link layer also adds parity bits for error detection and correction.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?
	- The source, destination, sequence, and anything else in the header.
