import React, { Component, Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Styled, css } from "theme-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Footer from "../components/home-footer";

const Categories = ({ location, pageContext, data }) => {
  const { allMdx = {}, site } = data;

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1
        css={css({
          fontSize: 3
        })}
      >
        Categories ({allMdx.totalCount})
      </Styled.h1>
      <main>
        <ul>
          {allMdx.group.map(node => {
            const { totalCount, fieldValue: title } = node;
            return (
              <li key={title}>
                <Styled.a as={Link} to={`/categories/${title}`} key={`nav-${title}`}>
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

export default Categories;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
