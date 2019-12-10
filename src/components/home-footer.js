import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"

const Footer = ({
  socialLinks,
  siteMetadata: {
    copyright,
    author,
  },
}) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <span dangerouslySetInnerHTML={{ __html: copyright }} />, authored by {author}.
    <br />
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
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
)
export default Footer
