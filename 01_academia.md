---
layout: page
title: Academia 🎓
permalink: /academia/
usemathjax: true
---

I'm a PhD student from the [ETRO department][etro] at the [Vrije Universiteit Brussel][vub] in Belgium.
Our research group, Smartnets, is specialized in Wireless Sensors and Actuator Networks (WSAN) protocols and applications.
I focus on the performance of protocols used in Low-Power Wireless Personal Area Networks.
{: .text-justify}

Our research group uses the [Contiki-NG][contiking] operating system to test communication protocols.
However, in 2015, the first official version of the [Rust][rust] programming language 🦀 was released.
Therefore, I implemented the [6LoWPAN][6lowpan] IPv6 stack in Rust and added it to the [smoltcp][smoltcp] crate.
{: .text-justify}

[vub]: https://www.vub.be/en
[etro]: http://www.etrovub.be/
[rust]: https://www.rust-lang.org/
[contiking]: https://github.com/contiki-ng/contiki-ng
[6lowpan]: https://www.rfc-editor.org/rfc/rfc6282
[smoltcp]: https://github.com/smoltcp-rs/smoltcp

## Publications

{% for publication in site.publications %}
  <h3><a href="http://dx.doi.org/{{ publication.doi }}">{{ publication.title }}</a></h3>
  
  <blockquote>
  {{ publication.authors }}
  </blockquote>

  <h4><i>Abstract</i></h4>
  {{ publication.content | markdownify }}

  DOI: <a href="http://dx.doi.org/{{ publication.doi }}">{{ publication.doi }}</a> to {{ publication.doi_to }}
{% endfor %}

<!------->

<!--## Master Thesis Supervision-->
