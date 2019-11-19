<h1 align="center">
  Gatsby Theme Chaton
</h1>

Gatsby Theme Chaton, a Gatsby theme for creating a blog. 

## Installing the Theme

To install it, run in the root of your site:

```
npm install --save gatsby-theme-chaton
```

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
        basePath: `/blog`,
        contentPath: `content/blogPosts`,
        assetPath: `content/blogAssets`,
        mdx: false,
      },
    },
  ],
}
```

🎉🎉🎉 gatsby-theme-chaton, is inspired by and forked from [gatsby-theme-blog](https://github.com/gatsbyjs/gatsby-starter-blog-theme). 
