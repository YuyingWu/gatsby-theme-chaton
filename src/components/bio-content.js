import React, { Fragment } from "react";
import { Styled, css } from "theme-ui";
import { Link } from "gatsby"

/**
 * Shadow me to add your own bio content
 */

export default ({ author, social, description, aboutUrl = '/' }) => (
  <Fragment>
    <Styled.a as={Link} to={aboutUrl}>{author}</Styled.a> {description}.
    <br />
    你可以在这里关注我：
    {social.map(item => (
      <Styled.a
        key={`social-${item.name}`}
        href={item.url}
        target="_blank"
        css={css({
          mr: 2,
        })}
      >
        {item.name}
      </Styled.a>
    ))}
  </Fragment>
);
