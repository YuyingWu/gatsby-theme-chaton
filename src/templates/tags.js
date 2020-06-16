import React from "react";
import { Link, graphql } from "gatsby";
import { Styled, css } from "theme-ui";

import Layout from "../components/layout";
// import SEO from "../components/seo";
import Footer from "../components/home-footer";

const Tags = ({ location, pageContext, data }) => {
  const { tag } = pageContext;
  const { allBlogPost, site } = data;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1
        css={css({
          fontSize: 3
        })}
      >
        <Styled.a as={Link} to="/tags">
          Tags&nbsp;
        </Styled.a>
        - {tag} ({allBlogPost.totalCount})
      </Styled.h1>
      <main>
        <ul>
          {allBlogPost.edges.map(({ node }) => {
            const { slug, title } = node;
            return (
              <li key={slug}>
                <Styled.a as={Link} to={slug} key={`nav-${title}`}>
                  {title}
                </Styled.a>
              </li>
            );
          })}
        </ul>
      </main>

      <Footer />
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(
      filter: { tags: { in: [$tag] } }
      sort: { fields: date, order: DESC }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
