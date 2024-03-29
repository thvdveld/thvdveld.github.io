---
layout: single
classes: wide
title: Academia 🎓
permalink: /academia/
mathjax: true
---

I'm a PhD student from the [ETRO department][etro] at the [Vrije Universiteit Brussel][vub] in Belgium.
Our research group, Smartnets, is specialized in Wireless Sensors and Actuator Networks (WSAN) protocols and applications.
I focus on the performance of protocols used in Low-Power Wireless Personal Area Networks.
{: .text-justify}

Our research group uses the [Contiki-NG][contiking] operating system to test communication protocols.
However, in 2015, the first official version of the [Rust][rust] <i class="fa-brands fa-rust"></i> programming language  was released.
Therefore, I implemented the [6LoWPAN][6lowpan] IPv6 stack in Rust and added it to the [smoltcp][smoltcp] crate.
{: .text-justify}

[vub]: https://www.vub.be/en
[etro]: http://www.etrovub.be/
[rust]: https://www.rust-lang.org/
[contiking]: https://github.com/contiki-ng/contiki-ng
[6lowpan]: https://www.rfc-editor.org/rfc/rfc6282
[smoltcp]: https://github.com/smoltcp-rs/smoltcp

## Current projects

### RustIEC

Currently participating in the RustIEC VLAIO TETRA project.
The goal of the project is to teach Flanders' companies to be proficient in the Rust programming language.
More information about the project can be found [here](https://en.rustiec.be).

### NLnet: add support for RPL in smoltcp

In this project I'm adding the Routing Protocol for Low-power and lossy networks (RPL)
to the [smoltcp] library.
More information about the project can be found [here](https://nlnet.nl/project/Smoltcp/).

## Publications

{% for publication in site.publications %}
  <h3><a href="http://dx.doi.org/{{ publication.doi }}">{{ publication.title }}</a></h3>
  
  <div class="notice">
  {{ publication.authors }}
  </div>

  <h4><i>Abstract</i></h4>
  {{ publication.content | markdownify }}

  DOI: <a href="http://dx.doi.org/{{ publication.doi }}">{{ publication.doi }}</a> to {{ publication.doi_to }}
{% endfor %}
