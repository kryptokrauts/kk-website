---
publishedOn: "2020-03-19"
title: "Boosting the aeternity development chain"
path: "/log/contraect-maven-plugin-v1-0-0-released"
author: Michel Meier
introText: "With the contraect-maven-plugin we empower Sophia smart contract development."
thumbnail: "/img/thumbnails/contraect_maven_plugin.png"
thumbnailSource: ""
tags: ["æternity", "Sophia", "smart contract", "Java", "Kotlin", "Scala"]
---

One crucial point to achieve business adoption of æternity is the ease of use and integration of smart contracts. With the [**contraect-maven-plugin**](https://github.com/kryptokrauts/contraect-maven-plugin) we want to bridge this gap and allow the interaction with smart contracts by leveraging well established languages based on the JVM like Java, Kotlin and Scala.

Due to it's maven nature, the plugin can be seemlessly integrated into the build process. Based on a ***Sophia*** smart contract, the plugin analyses the contract source and provides a convienient way to interact with the blockchain, for example deploying on the chain or call a contracts function using the [**aepp-sdk-java**](https://github.com/kryptokrauts/aepp-sdk-java). Using strongly typed input and output parameters for contract calls renders the need for encoding and decoding and helps reducing errors.

## How it works
Technically, the plugin generates a Java class for every contract using the [**JavaPoet Library**](https://github.com/square/javapoet) which forms the basis for the interaction with a contract. The generated class contains
- methods to deploy the contract or reuse an already existing contract
- all contract's callable function entrypoints (stateful, stateless, payable)
- the contract's state types
- all default datatypes like address and hash
- all declared custom types, necessary for function entrypoints

The plugin uses the æternity compiler to create an analyzable JSON format which is subsequently parsed for the respective data types and functions. Though, the input and output parameters of function are mapped from the Sophia datatypes to the corresponding Java datatypes, which can be arbitrary nested. Given that all necessary datatypes are declared within one Java class, the generated contract can be used standalone as is. All necessary dependencies are shipped through the maven dependency declaration.

To interact with the chain, contract entrypoint functions are executed using the [**aepp-sdk-java**](https://github.com/kryptokrauts/aepp-sdk-java). The target node (local, devnet, mainnet) can easily configured - further details can be found in the contraect-maven-plugin [**documentation**](https://app.gitbook.com/@kryptokrauts/s/contraect-maven-plugin/).

***Note***:
- the necessary fee required to execute a transaction is automatically calculated by the aepp-sdk-java

The source code of the ***contraect-maven-plugin*** is available on [GitHub](https://github.com/kryptokrauts/contraect-maven-plugin).

## Showcase
In case you would like to test working with the contraect-maven-plugin we created ***contraect-showcase-maven***:
- in [**this repository**](https://github.com/kryptokrauts/contraect-showcase-maven/tree/master/src/test/java/com/kryptokrauts) you can find different examples how to test ***Sophia*** smart contracts using the plugin and the SDK.

## Any problems?
If you encounter problems using the plugin please [**create a ticket**](https://github.com/kryptokrauts/contraect-maven-plugin/issues/new) on Github and we will try to help you as soon as possible.

If you have any general questions about the plugin, please visit our [**discord channel**](https://discord.gg/jww4Sc) or the [**official forum**](https://forum.aeternity.com/c/aepplications/cmp).

## Support us
- Visit our kraut[**SUPPORT**](/support) page to find various ways to honor our work :-)
