import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Styled, css } from "theme-ui";

const Nav = () => {
  const { site } = useStaticQuery(navQuery);
  const nav = site.siteMetadata.nav;

  return (
    <nav
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        display: "flex",
        mb: 3,
        px: 3,
        justifyContent: "space-between"
      })}
    >
      {nav.map(item => (
        <Styled.a as={Link} to={item.link} key={`nav-${item.title}`}>
          {item.title}
        </Styled.a>
      ))}
    </nav>
  );
};

export default Nav;

const navQuery = graphql`
  query NavQuery {
    site {
      siteMetadata {
        title
        description
        author
        nav {
          title
          link
        }
      }
    }
  }
`;
