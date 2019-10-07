---
publishedOn: "2019-03-31"
title: "How to contribute to the timeline"
path: "/log/how-to-contribute"
author: Jan-Patrick Weller & Marco Walz
introText: "You want to know to to contribute to our crypto-timeline? In this article you get all the information you need!"
thumbnail: "https://cdn.pixabay.com/photo/2016/11/29/07/10/business-1868015_960_720.jpg"
thumbnailSource: "Pixabay"
tags: ["Timeline", "How-To"]
---
We encourage everyone to help us maintaining the crypto-timeline. To be able to contribute content you need to have some basic [git-skills](https://guides.github.com/introduction/git-handbook/) and know how content can be written with [markdown](https://guides.github.com/features/mastering-markdown/).

This is really all you need to know. If these requirements are met you are ready to contribute by following these steps:

1. fork our repository [kk-website](https://github.com/kryptokrauts/kk-website)
1. look for existing [timeline-issues](https://github.com/kryptokrauts/kk-website/issues?q=is%3Aopen+is%3Aissue+label%3Atimeline+label%3Acontent)
   - alternatively create a new issue for the timeline-event you want to write about and label it with `content` and `timeline`
1. create a new branch from the actual `origin/master`
1. create a markdown file in the timeline folder `src/data/timeline` and make sure its name begins with the date of the timeline event (e.g. `2010-05-22-pizzas-for-10000-btc.md`)
1. write the article
   - see below in more detail how the file should be structured
1. commit your changes and provide the number of the github issue in the commit message
1. create a pull-request into the master of our repository
   - we will review the contribution and might ask for some adjustments
   - if the review is fine we will merge the pull-request and the article should show up after a short period of time

**Note:**
We are using [Gatsby](https://www.gatsbyjs.org/) to build the kryptokrauts website. If you want to preview your changes locally you need to install it by running `npm install -g gatsby-cli`. Afterwards you will be able to run `gatsby develop` to serve the website on http://localhost:8000.

**How to structure the content of the markdown-file?**

Please add a frontmatter to have some meta information attached to your new timeline entry. The frontmatter
looks like following:

```
---
publishedOn: "YYYY-MM-DD"
date: "YYYY-MM-DD"
title: "Some title you can choose"
path: "path/to/entry"
author: "Some Guy"
icon: "fontawesome icon name"
thumbnail: "url to a cool image"
thumbnailSource: "where you got the image from"
---
```

The date should contain the release date of the article. The title is the name which is displayed in the main section and the path is the URL to reach the article. The path should match the following pattern:
- `timeline/[filename]`

The icon can be any fontawesome icon name and will be displayed in the timeline. The default icon is:
- `fas fa-bell`
  
Optionally you can provide a thumbnail-image which will be rendered in the background of the timeline-event. Make sure to ***only use royalty free images*** and always provide the source where it comes from.
   
All the other content can be added below and does support all standard markdown. Images can also be included in the content section. Again, don't forget to only use royalty free images and provide the respective source. Example:
```
<div style="font-size:80%;">
    <img src="https://images.pexels.com/photos/730567/pexels-photo-730567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100" ><br /><i>Image: Pexels</i>
</div>
```

The example will be rendered as follows:

<div style="font-size:80%;">
    <img src="https://images.pexels.com/photos/730567/pexels-photo-730567.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=100" ><br /><i>Image: Pexels</i>
</div>

Have fun creating content for our crypto-timeline. If you have any questions or run into problems you can always contact us via [Twitter](https://twitter.com/kryptokrauts).

**Thanks for you contribution!**