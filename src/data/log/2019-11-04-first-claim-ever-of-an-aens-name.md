---
publishedOn: "2019-11-04"
title: "kryptokrauts made history!"
path: "/log/first-claim-ever-of-an-aens-name"
author: Marco Walz
introText: "kryptokrauts.chain was the first name ever claimed on the æternity blockchain."
thumbnail: "/img/thumbnails/aeternity_naming_system.png"
thumbnailSource: ""
tags: ["æternity", "Lima", "ÆNS"]
---
On the 30th of October the [Lima hardfork](https://twitter.com/aeternity/status/1189565830473883650) of æternity was performed successfully and introduced an [ÆNS](https://github.com/aeternity/protocol/blob/master/AENS.md) update with the new top level domain `.chain` and an auction mechanism.

We managed to make the [first claim ever](https://aeternal.io/transactions/th_pxVHa3C9QmbfmSZQJ3m4uuzNeQLaPbwZxqetxS7zVdh1DWo35) on the æternity blockchain which of course triggered the first auction ever.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">1 day later but 11 years earlier 🕶️ <a href="https://twitter.com/hashtag/SatoshiNakamoto?src=hash&amp;ref_src=twsrc%5Etfw">#SatoshiNakamoto</a> 🕶️ published the <a href="https://twitter.com/hashtag/bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#bitcoin</a> whitepaper and made history!<br><br>yesterday <a href="https://twitter.com/hashtag/kryptokrauts?src=hash&amp;ref_src=twsrc%5Etfw">#kryptokrauts</a> made history and performed the very first claim for an ÆNS <a href="https://twitter.com/hashtag/domain?src=hash&amp;ref_src=twsrc%5Etfw">#domain</a> on <a href="https://twitter.com/aeternity?ref_src=twsrc%5Etfw">@aeternity</a> which triggered the first <a href="https://twitter.com/hashtag/auction?src=hash&amp;ref_src=twsrc%5Etfw">#auction</a> after the Lima <a href="https://twitter.com/hashtag/hardfork?src=hash&amp;ref_src=twsrc%5Etfw">#hardfork</a> 🥳🥳🥳 <a href="https://t.co/goWrpJT0kr">https://t.co/goWrpJT0kr</a></p>&mdash; kryptokrauts (@kryptokrauts) <a href="https://twitter.com/kryptokrauts/status/1190030457255190529?ref_src=twsrc%5Etfw">October 31, 2019</a></blockquote>

## How did we achieve this?
As we are actively developing the [aepp-sdk-java](https://github.com/kryptokrauts/aepp-sdk-java) we expected this feature to be very important for the Lima [hardfork](/lexicon#hard-fork) and put in a lot of effort in our spare time to have it ready in time.

### aens-name-claimer
We used the [aepp-sdk-java](https://github.com/kryptokrauts/aepp-sdk-java) and built a spring-application called [aens-name-claimer](https://github.com/kryptokrauts/aens-name-claimer). It contains the logic to perform pre-claims (if necessary) and claims for names provided through `application.properties`.

By accessing the middleware ([aeternal.io](https://aeternal.io)) the app checks whether we are still the highest bidder or have been outbidden in the meantime. If we were outbidden the app can be configured to claim the name again. It is also possible to provide a maximum amount of AE to spend for each name so that there won't be made any claim after this value was reached.

In our case the private key used to perform transactions is secured by a wallet file. When starting the application it is needed to pass the password for the wallet file through the VM option `walletPassword` and the path to the wallet file needs to be configured in the `application.properties`.

### Historical log for the claim of kryptokrauts.chain
```
2019-10-30 21:15:22.501  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : performing preclaim and claim for kryptokrauts.chain
2019-10-30 21:15:22.834  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : NamePreclaimTx-model: NamePreclaimTransactionModel(accountId=ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV, name=kryptokrauts.chain, s
alt=13738264157424662553, nonce=1, ttl=0)
2019-10-30 21:15:22.855  INFO 32619 --- [scheduling-1] c.k.a.s.s.t.type.AbstractTransaction     : Using calculation model com.kryptokrauts.aeternity.sdk.service.transaction.fee.impl.BaseFeeCalculationModel the following fee was calculated 
16640000000000
2019-10-30 21:15:23.083  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : NamePreclaimTx-hash: th_2Q6P3AyNL4FBnZyHNFbfaUuvpu9245mjtRRhUHxmWQw19p7Mp5
2019-10-30 21:15:23.083  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:15:28.324  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:15:33.794  INFO 32619 --- [scheduling-1] .k.a.s.s.t.t.m.NameClaimTransactionModel : nameFee not provided. using the initial required fee for the length of the given name.
2019-10-30 21:15:33.795  INFO 32619 --- [scheduling-1] .k.a.s.s.t.t.m.NameClaimTransactionModel : initial name fee for the name 'kryptokrauts.chain' is: 2865700000000000000
2019-10-30 21:15:33.799  INFO 32619 --- [scheduling-1] c.k.a.s.s.t.type.AbstractTransaction     : Using calculation model com.kryptokrauts.aeternity.sdk.service.transaction.fee.impl.BaseFeeCalculationModel the following fee was calculated 
16700000000000
2019-10-30 21:15:34.025  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : NameClaimTx-hash: th_pxVHa3C9QmbfmSZQJ3m4uuzNeQLaPbwZxqetxS7zVdh1DWo35
2019-10-30 21:15:34.025  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:15:39.272  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:15:44.470  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:15:49.683  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:15:54.895  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:00.110  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:05.325  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:10.565  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:15.778  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:20.986  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:26.186  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:31.463  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:36.674  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:41.875  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:47.071  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:52.268  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:16:57.484  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : waiting for tx to be mined ...
2019-10-30 21:17:02.697  INFO 32619 --- [scheduling-1] com.kryptokrauts.task.AensClaimer        : successfully claimed: kryptokrauts.chain
```

### Drama around kryptokrauts.chain
**Outbidden**  
Shortly before we would have been the owner of `kryptokrauts.chain` we [were outbidden](https://aeternal.io/transactions/th_kNBQdCtdtYGKnUMGs6Bam7Vq93Mx6dwo6oTLhsdznXEZoFgMK). Of course we [claimed the name again](https://aeternal.io/transactions/th_2aKbv2DSfa42UarE4WF7yQw9NVJ9LsPA38MdiuZks73pVLGwAh) but we needed to wait another 480 blocks (~24 hours) to finally own the name.

**Updating the name**  
When we finally owned the name we wanted to set a pointer to our account. Unfortunately we assumed that setting the `nameTtl=0` would cause the protocol to automatically set the max possible `TTL` (`current blockHeight + 50000)` for the name.  
This wasn't the case and so the [NameUpdateTx](https://aeternal.io/transactions/th_259B1j2hHmg9BbcKyMbTKCB1KXqiddrHTYKBiUwJk8J5hRTSzq) caused the name to be revoked.

```
2019-11-01 21:09:29.881  INFO 6998 --- [scheduling-1] com.kryptokrauts.task.AensClaimer  : kryptokrauts.chain: name already claimed: NameIdResult(id=nm_2HMHaB4d5H85b7m1PhU734Ebcfsyf7LwHwTdpUmYAyMgbYV6Lr, ttl=212210, pointerAddresse
s=[])
2019-11-01 21:09:30.161  INFO 6998 --- [scheduling-1] com.kryptokrauts.task.AensClaimer  : NameUpdateTx-model: NameUpdateTransactionModel(accountId=ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV, nonce=105, nameId=nm_2HMHaB4d5H
85b7m1PhU734Ebcfsyf7LwHwTdpUmYAyMgbYV6Lr, ttl=0, nameTtl=0, clientTtl=0, pointerAddresses=[ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV])
2019-11-01 21:09:30.182  INFO 6998 --- [scheduling-1] c.k.a.s.s.t.type.AbstractTransaction     : Using calculation model com.kryptokrauts.aeternity.sdk.service.transaction.fee.impl.BaseFeeCalculationModel the following fee was calculated 1
7700000000000
2019-11-01 21:09:30.466  INFO 6998 --- [scheduling-1] com.kryptokrauts.task.AensClaimer  : NameUpdateTx-hash: th_259B1j2hHmg9BbcKyMbTKCB1KXqiddrHTYKBiUwJk8J5hRTSzq
2019-11-01 21:09:30.467  INFO 6998 --- [scheduling-1] com.kryptokrauts.task.AensClaimer  : waiting for tx to be mined ...
2019-11-01 21:09:35.772  INFO 6998 --- [scheduling-1] com.kryptokrauts.task.AensClaimer  : waiting for tx to be mined ...
2019-11-01 21:09:41.330  INFO 6998 --- [scheduling-1] com.kryptokrauts.task.AensClaimer  : kryptokrauts.chain: updated: NameIdResult(id=nm_2HMHaB4d5H85b7m1PhU734Ebcfsyf7LwHwTdpUmYAyMgbYV6Lr, ttl=162223, pointerAddresses=[ak_5z1fmzTKR
1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV])
```

**Claiming the name again**  
After the name was revoked due to our erroneous NameUpdateTx we now need to claim it again and we already tried to do so. But the recurrent claim wasn't mined and we first [thought there is a bug in the protocol](https://forum.aeternity.com/t/bug-when-claiming-a-domain-for-the-2nd-time/5162).  
It turnes out that we haven't read the protocol documentation before asking the question in the forum.  
When a name is revoked it enters the [revoked state](https://github.com/aeternity/protocol/blob/aens-auctions/AENS.md#revoke) and will be available again after another 2016 blocks.  
Now we need to wait until block 164239 to be able to claim `kryptokrauts.chain` again.

## Where will the nameFee go?
The `nameFee` of all claimed names will be collected and locked in the account *ak_11111111111111111111111111111111273Yts*.

## Support us
Do you like our work? We would be happy about a small donation:
- æternity:
  - ak_5z1fmzTKR1GA1P7qiLDCC1s3V7AK2RRpNbXqUhfHQbUeg7mmV
- via [ArkaneNetwork](https://arkane.network/):
  - kryptokrauts@protonmail.com

Don't forget to [download Brave](https://brave.com/kry019) and send us tips from rewards you earned by watching advertisements :-)
