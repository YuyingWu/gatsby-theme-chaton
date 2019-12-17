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
