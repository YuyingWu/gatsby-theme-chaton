import React, { Component, Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Styled, css } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/home-footer";

const Tags = ({ location, pageContext, data }) => {
  const { allBlogPost = {}, site } = data;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1
        css={css({
          fontSize: 3
        })}
      >
        Tags ({allBlogPost.totalCount})
      </Styled.h1>
      <main>
        <ul>
          {allBlogPost.group.map(node => {
            const { totalCount, fieldValue: title } = node;
            return (
              <li key={title}>
                <Styled.a as={Link} to={`/tags/${title}`} key={`nav-${title}`}>
                  {title} ({totalCount})
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
  {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost {
      group(field: tags, limit: 2000) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`;
