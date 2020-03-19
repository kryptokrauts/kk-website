---
publishedOn: "2020-03-19"
title: "Boosting the aeternity development chain"
path: "/log/contraect-maven-plugin-v1-0-0-released"
author: Michel Meier
introText: "With the contræct maven plugin we empower smart contract development"
thumbnail: "/img/thumbnails/guide.png"
thumbnailSource: ""
tags: ["æternity", "smart-contracts", "Java"]
---

One crucial point to achieve business adoption of æternity is the ease of use and integration of smart contracts. With the ***contræct maven plugin*** we want to bridge this gap and allow the interaction with smart contracts based on well established languages based on the JVM like Java, Kotlin and Scala. Due to it's maven nature, the plugin can be seemlessly integrated into the build process. Based on an æternity contract, the plugin analyses the contract source and provides a convienient way to interact with the blockchain, for example deploying on the chain or call a contracts function using the [**aepp-sdk-java**](https://github.com/kryptokrauts/aepp-sdk-java). Using strongly typed input and output parameters for contract calls renders the need for encoding and decoding and helps reducing errors.

## How it works
Technically, the plugin generates a Java class for every contract using the [**JavaPoet Library**](https://github.com/square/javapoet) which forms the basis for the interaction with a contract. The generated class contains
- methods to deploy the contract or reuse an already existing contract
- all contract's callable function entrypoints (stateful, stateless, payable)
- the contract's state types
- all default datatypes like address and hash
- all declared custom types, necessary for function entrypoints

The plugin uses the æternity compiler to create an analyzable JSON format which is subsequently parsed for the respective data types and functions. Though, the input and output parameters of function are mapped from the sophia datatypes to the corresponding Java datatypes, which can be arbitrary nested. Given that all necessary datatypes are declared within one Java class, the generated contract can be used standalone as is. All necessary dependencies are shipped through the maven dependency declaration.
To interact with the chain, contract entrypoint functions are executed using the [**aepp-sdk-java**](https://github.com/kryptokrauts/aepp-sdk-java). The target node (local, devnet, mainnet) can easily configured - further details can be found in the [**contræct-maven-plugin documentation**](https://app.gitbook.com/@kryptokrauts/s/contraect-maven-plugin/).

The source code of the ***contræct maven plugin*** is available on [github](https://github.com/kryptokrauts/contraect-maven-plugin).

## Any problems?
If you encounter problems using the plugin please [**create a ticket**](https://github.com/kryptokrauts/contraect-maven-plugin/issues/new) on Github and we will try to help you as soon as possible.

If you have any general questions about the plugin, please visit our [**discord channel**](https://discord.gg/jww4Sc) or the [**official forum**](https://forum.aeternity.com/c/aepplications/cmp).

## Support us
Do you like our work? We would be happy about a small donation:
- æternity:
  - ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV
- via [ArkaneNetwork](https://arkane.network/):
  - kryptokrauts@protonmail.com

Don't forget to [download Brave](https://brave.com/kry019) and send us tips from rewards you earned by watching advertisements :-)