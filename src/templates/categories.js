import React, { Component, Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Styled, css } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/home-footer";

const Categories = ({ location, pageContext, data }) => {
  const { tag } = pageContext;
  const { allMdx = {}, site } = data;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1
        css={css({
          fontSize: 3
        })}
      >
        Category - {tag} ({allMdx.totalCount})
      </Styled.h1>
      <main>
        <ul>
          {allMdx.nodes.map(node => {
            const { slug, title } = node.childMdxBlogPost;
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

export default Categories;

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 2000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      nodes {
        childMdxBlogPost {
          title
          slug
        }
      }
    }
  }
`;
