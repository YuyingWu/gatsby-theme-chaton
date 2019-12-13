module.exports = options => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
          feeds: [
            {
              serialize: ({ query: { site, allBlogPost } }) => {
                return allBlogPost.edges.map(edge => {
                  return Object.assign({}, {
                    description: edge.node.excerpt,
                    date: edge.node.date,
                    url: site.siteMetadata.siteUrl + edge.node.slug,
                    guid: site.siteMetadata.siteUrl + edge.node.slug,
                    title: edge.node.title,
                    // custom_elements: [{ "content:encoded": edge.node.html }],
                  })
                })
              },
              query: `
              {
                allBlogPost(sort: {fields: date, order: DESC}) {
                  edges {
                    node {
                      excerpt
                      slug
                      title
                      date(formatString: "YYYY-MM-DD hh:mm:ss")
                    }
                  }
                }
              }
              `,
              output: "/rss.xml",
              title: "RSS Feed",
            },
          ],
        },
      },
    ],
  }
}
