---
layout: page
title: Software 💻
permalink: /software/
usemathjax: true
---

I have been developing in Rust since 2018, with the start of my PhD.
I mainly focus on embedded software and contributed to the following crates.

### smoltcp 

[`smoltcp`][smoltcp] is a standalone, event-driven TCP/IP stack that is designed for bare-metal, real-time systems.
Its design goals are simplicity and robustness.
Its design anti-goals include complicated compile-time computations, such as macro or type tricks, even at cost of performance degradation.

I added support for IEEE802.15.4 frame parsing, as well as support for the [6LoWPAN][6lowpan] protocol (extension headers are not yet supported).
Currently, I'm working on adding support for [RPL][rpl], the Routing Protocol for Low-Power and Lossy Networks.

[6lowpan]: https://www.rfc-editor.org/rfc/rfc6282
[smoltcp]: https://github.com/smoltcp-rs/smoltcp
[rpl]: https://datatracker.ietf.org/doc/html/rfc6550

### RPLtree

I created the [`RPLtree`][rpltree] tool, which parses PCAP files and outputs tree like strings in the terminal, which corresponds to the RPL tree.
For example: 
```
fe80::201:1:1:1
├── fe80::202:2:2:2
│   ├── fe80::205:5:5:5
│   └── fe80::206:6:6:6
│       └── fe80::20b:b:b:b
├── fe80::204:4:4:4
│   ├── fe80::20a:a:a:a
│   └── fe80::209:9:9:9
└── fe80::203:3:3:3
    ├── fe80::208:8:8:8
    └── fe80::207:7:7:7
```

[rpltree]: https://github.com/thvdveld/rpltree

### CC2538

I maintain the Peripheral Access Crate ([`cc2538-pac`][cc2538-pac]) and the Hardware Abstraction Layer ([`cc2538-hal`][cc2538-hal]) of the CC2538 chip.

[cc2538-pac]: https://github.com/thvdveld/cc2538-pac
[cc2538-hal]: https://github.com/thvdveld/cc2538-hal
