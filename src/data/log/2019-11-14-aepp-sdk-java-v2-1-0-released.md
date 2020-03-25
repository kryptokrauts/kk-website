---
publishedOn: "2019-11-14"
title: "aepp-sdk-java v2.1.0 released"
path: "/log/aepp-sdk-java-2-1-0-released"
author: Marco Walz
introText: "Small fixes and enhancements."
thumbnail: "/img/thumbnails/javasdk.png"
tags: ["æternity", "SDK", "Java", "Kotlin", "Scala"]
---
The release [v2.1.0](https://github.com/kryptokrauts/aepp-sdk-java/releases/tag/v2.1.0) ships some fixes and enhancements. Additionally we renamed some attributes and model-classes. If you already used [v2.0.0](https://github.com/kryptokrauts/aepp-sdk-java/releases/tag/v2.0.0) it might be needed to fix these changes.

## Refactoring
- [#86](https://github.com/kryptokrauts/aepp-sdk-java/issues/86) add "payable" attribute to AccountResult-model

## Fixes
- [#85](https://github.com/kryptokrauts/aepp-sdk-java/issues/85) AeternalService: fix case-sensitive comparison of domains
- [#88](https://github.com/kryptokrauts/aepp-sdk-java/issues/88) replace Optional.orElse with Optional.orElseGet in the AccountServiceImpl

## Enhancements
- [#84](https://github.com/kryptokrauts/aepp-sdk-java/issues/84) add missing ÆNS related AeternalService functionalities
   - we added the possibility to query for active names
   and search for a name (which allows to receive e.g. the owner of a name)
- [#87](https://github.com/kryptokrauts/aepp-sdk-java/issues/87) add support to receive byteCode for given contractId


## Any problems?
If you encounter problems using the SDK please [create a ticket](https://github.com/kryptokrauts/aepp-sdk-java/issues/new) on Github and we will try to help you as soon as possible.

If you have any general questions about the SDK please visit the [official forum](https://forum.aeternity.com/c/aepplications/sdk) and ask there.

## Support us
- Visit our kraut[**SUPPORT**](/support) page to find various ways to honor our work :-)
