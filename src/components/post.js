import React from "react"
import { Styled, css } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import { useStaticQuery, graphql } from "gatsby"
import PostFooter from "../components/post-footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from '../components/tags'
// import Categories from '../components/categories'

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  // const data = useStaticQuery(query, {
  //   variables: {
  //     slug: post.slug
  //   }
  // });
  // const mdxData = data.allMdx.edges.filter(blog => {
  //   const { node: { childMdxBlogPost : {
  //     slug,
  //   } } } = blog;
  //   return slug === post.slug;
  // });
  let tags = post.tags || [];
  // let categories = [];

  // if (mdxData.length) {
  //   const { frontmatter = {} } = mdxData[0].node;
  //   const { tags: frontmatterTags = [], categories: frontmatterCategories = [] } = frontmatter;

  //   if (frontmatterTags.length) {
  //     tags = [...frontmatterTags];
  //   }

  //   if (frontmatterCategories.length) {
  //     categories = [...frontmatterCategories];
  //   }
  // }
  
  return (
    <Layout location={location} title={title}>
      <SEO title={post.title} description={post.excerpt} />
  
      <main>
        <Styled.h1 css={css({
            fontSize: 3,
          })}>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          {post.date}
        </Styled.p>

        <Tags tags={tags}/>

        {/* <Categories categories={categories} /> */}

        <MDXRenderer>{post.body}</MDXRenderer>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post

// export const query = graphql`
// query($slug: String) {
//   allMdx(filter: {childMdxBlogPost: {slug: {eq: $slug}}}) {
//     edges {
//       node {
//         childMdxBlogPost {
//           slug
//         }
//         frontmatter {
//           categories
//           tags
//         }
//       }
//     }
//   }
// }
// `