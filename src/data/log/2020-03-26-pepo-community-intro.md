---
publishedOn: "2020-03-28"
title: "Join our Pepo community!"
path: "/log/pepo-community-intro"
author: Marco Walz
introText: "Pepo is a new social app targeting the crypto community. Learn more about Pepo and join our community!"
thumbnail: "/img/thumbnails/pepo.png"
thumbnailSource: ""
tags: ["Pepo", "OST", "community"]
---
<hr/><hr/><hr/>

***Update (06.08.2020)***  
Unfortunately the Pepo team announced to shut down the application on 31.07.2020 and the team of OST shifts its focus to the development of a fully decentralised protocol. We hope to see a relaunch of this great application in the future.

<hr/><hr/><hr/>

In november 2019 [OST.com released a new social app](https://medium.com/the-pepo-app/introducing-pepo-the-new-social-app-connecting-the-crypto-community-34181149f84a) called [**Pepo**](https://join.pepo.com/CRSVEF). The app is (currently) specifically targeting the ***crypto community*** and provides the ability to create ***30 seconds videos***. You can somehow compare it to Twitter but instead of writing short messages and answer to those with short messages you create short videos and answer with short videos.

<img src="https://miro.medium.com/max/1316/1*2yFHFkCUn_5Ms5arTQkzdA.png">

## Rewards
The very cool part here is that thanks to [OST technology](https://ost.com/) you can ***reward videos*** you like with ***Pepo tokens*** which are being [minted by staking OST tokens](https://help.ost.com/support/solutions/articles/35000117973-what-is-stake-and-mint-) on the OST platform. Thanks to the [Mobile Wallet SDK](https://dev.ost.com/platform/docs/wallet/introduction/) the tokens in the app are stored in a ***non-custodial*** wallet.

## kryptokrauts community
We believe that [**Pepo**](https://join.pepo.com/CRSVEF) is one of the coolest und ***most user-friendly*** crypto apps that currently exist and decided to create a [**kryptokrauts community**](https://pepo.com/communities/kryptokrauts) on Pepo.

If you like our work and want to get involved we encourage you to [join the community]((https://pepo.com/communities/kryptokrauts))!

## Pepo webhooks
When [**Pepo**](https://join.pepo.com/CRSVEF) announced that it [provides webhooks](https://www.notion.so/Pepo-Webhooks-6d1681c40d0d4699888a3dd09efb93a4) and that we can subscribe to videos in our Pepo community by providing a webhook endpoint Marco started developing it. As result we now have following components:
- [webhooks](https://github.com/kryptokrauts/webhooks/tree/v6/pepo)
    - library written in Go
    - allows everyone to easily setup a Pepo webhook endpoint using Go
    - we created a [pull-request](https://github.com/go-playground/webhooks/pull/102) to integrate that into the official library
- [kk-webhook-endpoints](https://github.com/kryptokrauts/kk-webhook-endpoints)
    - endpoint implementation which receives video updates from Pepo and performs following actions:
        - store the event data in a MongoDB
        - send a message to our [Discord](https://discord.gg/ZZTQgQb) channel pepo-updates
- [kk-pepo-data-api](https://github.com/kryptokrauts/kk-pepo-data-api)
    - provides an API to get all Pepo videos of the kryptokrauts community
        - the data is fetched from the MongoDB where all events are stored
    - Swagger-UI:
        - https://api.kryptokrauts.com/pepo/api/index.html

This is really cool because now every time somebody of our community uploads a new video or contributes Pepo tokens to someones video we receive an event and our implementation sends a message into our [**Discord**](https://discord.gg/ZZTQgQb) channel:

<img src="https://pbs.twimg.com/media/EUERFr3WAAEEW-I?format=png">

Using our [**kk-pepo-data-api**](https://api.kryptokrauts.com/pepo/api/index.html) we can now show videos of our Pepo community on our website =)

<img src="https://pbs.twimg.com/media/EUMisxYXQAAHHgq?format=jpg&name=large">

## Pepo live streaming
The most recent feature which was introduced 2 days ago is live streaming. Pepo integrated Zoom and provides each community to host live streaming. Currently it's not possible to tip the host or participants some Pepo tokens. But that will hopefully and probably be introduced in the near future.

## Join Pepo
So what are you waiting for? We'd love to see you joining our community:
- [**Join Pepo**](https://join.pepo.com/CRSVEF)

## Support us
- Visit our kraut[**SUPPORT**](/support) page to find various ways to honor our work :-)
