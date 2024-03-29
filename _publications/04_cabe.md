---
title: "CABE: A Cloud-Based Acoustic Beamforming Emulator for FPGA-Based Sound Source Localization"
authors: Laurent Segers, Jurgen Vandendriessche, Thibaut Vandervelden, Benjamin Johan Lapauw, Bruno da Silva, An Braeken and Abdellah Touhafi
doi: 10.3390/s19183906
doi_to: MDPI
---

Microphone arrays are gaining in popularity thanks to the availability of low-cost microphones.
Applications including sonar, binaural hearing aid devices, acoustic indoor localization techniques and speech recognition are proposed by several research groups and companies.
In most of the available implementations, the microphones utilized are assumed to offer an ideal response in a given frequency domain. 
Several toolboxes and software can be used to obtain a theoretical response of a microphone array with a given beamforming algorithm.
However, a tool facilitating the design of a microphone array taking into account the non-ideal characteristics could not be found.
Moreover, generating packages facilitating the implementation on Field Programmable Gate Arrays has, to our knowledge, not been carried out yet.
Visualizing the responses in 2D and 3D also poses an engineering challenge.
To alleviate these shortcomings, a scalable Cloud-based Acoustic Beamforming Emulator (CABE) is proposed.
The non-ideal characteristics of microphones are considered during the computations and results are validated with acoustic data captured from microphones.
It is also possible to generate hardware description language packages containing delay tables facilitating the implementation of Delay-and-Sum beamformers in embedded hardware.
Truncation error analysis can also be carried out for fixed-point signal processing.
The effects of disabling a given group of microphones within the microphone array can also be calculated.
Results and packages can be visualized with a dedicated client application.
Users can create and configure several parameters of an emulation, including sound source placement, the shape of the microphone array and the required signal processing flow.
Depending on the user configuration, 2D and 3D graphs showing the beamforming results, waterfall diagrams and performance metrics can be generated by the client application.
The emulations are also validated with captured data from existing microphone arrays.
{: .text-justify}
