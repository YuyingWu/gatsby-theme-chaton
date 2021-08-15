/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

/** @jsx jsx */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Styled, css, Flex, jsx } from "theme-ui";
import BioContent from "./bio-content";

const Bio = () => {
  const data = useStaticQuery(bioQuery);
  const {
    site: {
      siteMetadata: { author, social, description, aboutUrl, avatar }
    },
  } = data;

  return (
    <Flex
      css={css({ alignItems: `center` })}
      sx={{
        // applies width 100% to all viewport widths,
        // width 50% above the first breakpoint,
        // and 25% above the next breakpoint
        // width: ['100%', '50%', '25%'],
        fontSize: [1, 2, 2] // picks up value from `theme.fontSizes[4]`
      }}
    >
      {avatar ? (
        <img
          src={avatar}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            height: 48,
            minWidth: 48,
            borderRadius: '#99999',
            background: 'orange',
            borderRadius: '50%',
            lineHeight: '48px',
            fontSize: '12px',
            textAlign: 'center',
          })}
          role="presentation"
        >Avatar</div>
      )}
      <Styled.div>
        <BioContent
          author={author}
          social={social}
          description={description}
          aboutUrl={aboutUrl}
        />
      </Styled.div>
    </Flex>
  );
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        avatar
        description
        aboutUrl
        social {
          name
          url
        }
      }
    }
  }
`;

export default Bio;
