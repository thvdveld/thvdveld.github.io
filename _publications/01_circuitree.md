---
title: "Circuitree: A Datalog Reasoner in Zero-Knowledge (2022)"
authors: Tom Godden, Ruben De Smet, Christophe Debruyne, Thibaut Vandervelden, Kris Steenhaut, and An Braeken
doi: 10.1109/ACCESS.2022.3153366
doi_to: IEEE Access
---

Driven by the increased consciousness in data ownership and privacy, zero-knowledge proofs (ZKPs) have become a popular tool to convince a third party of the truthfulness of a statement without disclosing any further information.
As ZKPs are rather complex to design, frameworks that transform high-level languages into ZKPs have been proposed.
We propose Circuitree, a Datalog reasoner in zero-knowledge.
Datalog is a high-level declarative logic language that is generally used for querying.
Furthermore, as a logic language, it can also be used to solve logic problems.
An application using Circuitree can efficiently generate ZKPs, based on Datalog rules and encrypted data, to prove that a certain conclusion follows from a Datalog ruleset and encrypted input data.
Compared to existing frameworks, which generally use their own limited imperative languages, Circuitree uses an existing high-level declarative language.
We point out several applications for Circuitree, including EU Digital COVID Certificates and privacy-preserving access control for peer-to-peer (p2p) networks.
Circuitree’s performance is evaluated for access control in a p2p network.
First results show that our approach allows for fast proofs and proof verification for this application.
{: .text-justify}
