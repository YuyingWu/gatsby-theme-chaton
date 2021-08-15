<h1 align="center">
  Gatsby Theme Chaton
</h1>

Gatsby Theme Chaton, a Gatsby theme for creating a blog. 

## Installing the Theme

To install it, run in the root of your site:

```
npm install --save gatsby-theme-chaton
```

## Amazing Features

* Customed Navigator
* Page Categories
* Page Tags
* Google Analytics
* Feed rss.xml

## Theme options

```js
// gatsby-config.js

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Yuying Wu's Blog`,
    author: `Yuying Wu`,
    description: `Personal blog, recording codes, life, growth.`,
    copyright: `Powered by Gatsby and gatsby-theme-chaton.`,
    siteUrl: `https://wuyuying.com`,
    aboutUrl: `/about`,
    avatar: 'https://static.wuyuying.com/avatar.jpeg',
    social: [{
      name: 'twitter',
      url: 'https://mobile.twitter.com/wuyuying1128',
    }, {
      name: 'github',
      url: 'https://github.com/YuyingWu',
    }],
    nav: [{
      title: 'Home',
      link: '/',
    }, {
      title: 'Technology',
      link: '/categories/tech/',
    }]
  },
  plugins: [
    {
      resolve: `gatsby-theme-chaton`,
      options: {
        /*
        - basePath defaults to `/`
        - contentPath defaults to `content/posts`
        - assetPath defaults to `content/assets`
        - mdx defaults to `true`
        */
        googleAnalytics: 'your-ga-track-id',
      },
    },
  ],
}
```
