---
publishedOn: "2019-10-31"
title: "aepp-sdk-java v2.0.0 released"
path: "/log/aepp-sdk-java-2-0-0-released"
author: Michel Meier & Marco Walz
introText: "This release is compatible with the Lima hardfork and introduces support for ÆNS auctions."
thumbnail: "/img/thumbnails/javasdk.png"
tags: ["æternity", "SDK", "Java", "Lima", "ÆNS"]
---
Since the [release of v1.2.0](/log/aepp-sdk-java-1-2-0-released) in July this year you haven't heard much from us. We took our time to develop and introduce a lot of features. We are looking forward to everything that will happen in the near future.

The [release v2.0.0](https://github.com/kryptokrauts/aepp-sdk-java/releases/tag/v2.0.0) does not only contain necessary adjustments for the Lima hardfork. We've done a major refactoring and want to make it as easy as possible for developers to access the æternity ecosystem.

## Refactoring
The aim of the refactoring was to simplify and improve the comfort of using the SDK on the one hand, but also to improve maintainabilty, flexibility and stability for developing future releases of the SDK. For this purposes, it was necessary to separate the internal data structures used into models and logic and wrap them into the builder pattern. Now it is possible to create and post transactions with two commands, the necessary steps are done behind the scenes. Furthermore, the goal was to make the SDK robust against changes of the interface to the node. For this purpose, a separate model layer was inserted, which encapsulates the data input and output and extends it by further functions such as validation. This refactoring establishes a reliable and robust basis for future releases.

## ÆNS
The Lima hardfork will prune all existing `.test` domains and introduce an auction mechanism to claim domains with the new `.chain` TLD.

### Auctions
It is now necessary to pay a `nameFee` when claiming a domain. The minium required initial `nameFee` and the timeout before a domain is finally claimed is [determined by the length](https://github.com/aeternity/protocol/blob/aens-auctions/AENS.md#protocol-fees-and-protection-times) of a domain. The `nameFee` for the claim of a domain with an existing auction must be increased by **5%** at minimum.

**Tracking auctions through aeternal middleware**  
In order to monitor the status of active auctions, we have introduced a new service that enables ÆNS relevant queries via aeternal (middleware).

### Pointers
In the past we only supported adding pointers for regular addresses starting with `ak_` and now we support adding pointers for all supported types of addresses:
- accounts (`ak_`)
- channels (`ch_`)
- contracts (`ct_`)
- oracles (`ok_`)

Here we also hide complexity for developers so that they don't need to know about the pointer key which must be provided for each type of address. The developer can just add the different types of addresses in the `List` of pointers in the `NameUpdateTransactionModel` class. The SDK will add the pointer keys in the background and check whether the provided addresses are valid.

### kryptokrauts made history!
We managed to be the first to claim a domain in the new and updated [ÆNS](https://github.com/aeternity/protocol/blob/master/AENS.md).

[Click here](/log/first-claim-ever-of-an-aens-domain) to read the full story. And of course we used our [aepp-sdk-java](https://github.com/kryptokrauts/aepp-sdk-java) to claim the domain :-)

## What's next?
Due to limited time we cannot publish new features as quickly as we want to. But you don't have to wait much time to get a new feature. Developers interested in **smart contract** development will love it!  
We will soon release a **maven-plugin** that allows you to generate java classes from the source code of your **smart contracts** written in [**Sophia**](https://github.com/aeternity/protocol/blob/master/contracts/sophia.md).

So stay tuned and [follow us](https://twitter.com/kryptokrauts) on Twitter!

Besides that another high priority is to provide the ability to receive chain-updates through polling and websockets.

## Any problems?
If you encounter problems using the SDK please [create a ticket](https://github.com/kryptokrauts/aepp-sdk-java/issues/new) on Github and we will try to help you as soon as possible.

If you have any general questions about the SDK please visit the [official forum](https://forum.aeternity.com/c/aepplications/sdk) and ask there.

## Support us
Do you like our work? We would be happy about a small donation:
- æternity:
  - [ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV](https://explorer.aepps.com/#/account/ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV)
- via [ArkaneNetwork](https://arkane.network/):
  - kryptokrauts@protonmail.com

Don't forget [download Brave](https://brave.com/kry019) and send us tips from rewards you earned by watching advertisements :-)