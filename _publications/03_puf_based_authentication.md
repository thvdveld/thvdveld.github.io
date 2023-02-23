---
title: Lightweight PUF based authentication scheme for fog architecture
authors: Ruben De Smet, Thibaut Vandervelden, Kris Steenhaut and An Braeken
doi: 10.1007/s11276-020-02491-0 
doi_to: Springer
---

Fog computing improves efficiency and reduces the amount of bandwidth to the cloud.
In many use cases, the internet of things (IoT) devices do not know the fog nodes in advance. 
Moreover, as the fog nodes are often placed in open publicly available places, they can be easily captured. 
Therefore, it should be ensured that even if the key material is leaked from the fog devices, 
the previously generated session keys and the identity of the devices can be kept secret, 
i.e. satisfying anonymity, unlinkability, perfect forward secrecy and resistance against stolen devices attack.
Such demands require a multi-factor authentication scheme, which is typically done by providing input of the user with password or biometric data.
However, in real use case scenarios, IoT devices should be able to automatically start the process without requiring such manual interaction and also fog devices need to autonomously operate.
Therefore, this paper proposes a physical unclonable function (PUF) based mutual authentication scheme, 
being the first security scheme for a fog architecture, capable of providing simultaneously all these suggested security features. 
In addition, we also show the resistance against other types of attacks like synchronization and known session specific temporary information attack. 
Moreover, the scheme only relies on symmetric key based operations and thus results in very good performance, compared to the other fog based security systems proposed in literature.
{: .text-justify}
