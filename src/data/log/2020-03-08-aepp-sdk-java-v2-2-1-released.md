---
publishedOn: "2020-03-08"
title: "aepp-sdk-java v2.2.1 released"
path: "/log/aepp-sdk-java-2-2-1-released"
author: Marco Walz
introText: "We provide a more robust SDK and got support from the æternity crypto foundation!"
thumbnail: "/img/thumbnails/javasdk.png"
tags: ["æternity", "SDK", "Java", "Kotlin", "Scala"]
---
We are proud to announce the release [**v2.2.1**](https://github.com/kryptokrauts/aepp-sdk-java/releases/tag/v2.2.1) of the ***aepp-sdk-java***. With the support of the [**æternity crypto foundation**](https://www.aeternity-foundation.org/) as well as the active support within the forum and devchat we were able to improve the SDK and enhance its functionalities to interact more securely with the æternity blockchain.

The aepp-sdk-java empowers ***Java***, ***Kotlin*** and ***Scala*** developers to interact with the æternity blockchain.

We worked hard on improving ***stability***, ***robustness*** and ***comfort*** of usage while keeping maintainability and flexibility.

The SDK realizes a ***generic approach*** to provide support for every kind of transaction types based on strongly typed models:
- thus a developer just need to create a model for a certain transaction type and the mapping, byte transformation and interaction is executed transparently

## Features & transactions types
- **Transfer tokens**
    - SpendTransaction
- **ÆNS interaction**
    - NameClaimTransaction
    - NamePreclaimTransaction
    - NameUpdateTransaction
    - NameRevokeTransaction
- **Oracle interaction**
    - OracleRegisterTransaction
    - OracleExtendTransaction
    - OracleQueryTransaction
    - OracleRespondTransaction
- **Contract interaction**
    - ContractCreateTransaction
    - ContractCallTransaction
    - Compiling of contracts
    - Encoding and decoding of data and results
- **Aeternal interaction**
    - Communication with the **middleware** to retrieve information about auctions

Although we already prepared TX types to support **State Channels** these can **NOT** be handled using the SDK.

All methods provided by the SDK can be exectued either **blocking** or **asynchronous** depending on use case and programming style. 
The SDK provides methods to retrieve information about current and mined transactions and blocks as well as information concerning accounts.

Furthermore the SDK provides useful **utilites** to cover typical use cases
- generate and restore of KeyPairs
- support creation and recovery of HD-wallets
- generate and restore of Keystores
- automatic fee calculation for all transaction types supported by the SDK
- unit conversion tool
- various util libraries to encode, decode and sign 

The SDK can easily be configured to support ***devnet***, ***uat*** or ***mainnet*** and other key parameters.

## contraect-maven-plugin
Furthermore, with the release [**v1.0.0**](https://github.com/kryptokrauts/contraect-maven-plugin/releases/tag/v1.0.0) of the ***contraect-maven-plugin*** we provide a new tool similar to the ***web3j-codegen*** for Ethereum which makes it a piece of cake to deploy and interact with Sophia smart contracts on the æternity blockchain.
- [**READ MORE**](/log/contraect-maven-plugin-v1-0-0-released) about the contraect-maven-plugin

## Example applications
- [**aepp-showcase-android**](https://github.com/kryptokrauts/aepp-showcase-android)
    - there are some ***limitations*** and general information you need to know when developing an android application using the SDK
    - you can help us improving the current state and ***join the discussion*** here:
        - https://github.com/kryptokrauts/aepp-sdk-java/issues/50
        - https://forum.aeternity.com/t/android-sdk-for-aeternity/4367
- [**aens-name-claimer**](https://github.com/kryptokrauts/aens-name-claimer)
    - we used this application to perform the [**first claim**](/log/first-claim-ever-of-an-aens-name) of an ÆNS name **ever** on the æternity blockchain!

## Documentation
Detailed technical information, including samples can be found in our [**documentation**](https://kryptokrauts.gitbook.io/aepp-sdk-java).

## License
The SDK is available under the [**ISC License**](https://github.com/kryptokrauts/aepp-sdk-java/blob/master/LICENSE) and the source can be found on [**GitHub**](https://github.com/kryptokrauts/aepp-sdk-java). 

## Contribute
If you like to support us, contributions are welcome. Therefore please refer to our [**contribution guide**](https://kryptokrauts.gitbook.io/aepp-sdk-java/contribute/how-to-contribute).

## Support us
- Visit our kraut[**SUPPORT**](/support) page to find various ways to honor our work :-)
