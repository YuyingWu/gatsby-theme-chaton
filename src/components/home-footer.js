import React, { Fragment } from "react";
import { useStaticQuery } from 'gatsby';
import { Styled, css } from "theme-ui";

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            copyright
            social {
              name
              url
            }
          }
        }
      }
    `
  );
  const { author, copyright, social } = site.siteMetadata;

  return (
    <footer
      css={css({
        mt: 4,
        pt: 3
      })}
    >
      <span dangerouslySetInnerHTML={{ __html: copyright }} />, authored by{" "}
      {author}.
      <br />
      {social.map((platform, i, arr) => (
        <Fragment key={platform.url}>
          <Styled.a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.name}
          </Styled.a>
          {arr.length - 1 !== i && (
            <Fragment>
              {` `}&bull;{` `}
            </Fragment>
          )}
        </Fragment>
      ))}
    </footer>
  );
};

export default Footer;
