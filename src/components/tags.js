import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { Styled, css } from "theme-ui";

const tags = ({ tags }) => (
  <>
    {tags.length ? (
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3
        })}
      >
        <span style={{ marginRight: "10px" }}>Tags:</span>
        {tags.map((tag, index) => (
          <span style={{ marginRight: "10px" }} key={`tag-${index}`}>
            <Styled.a
              as={Link}
              css={{
                textDecoration: `none`
              }}
              to={`/tags/${kebabCase(tag)}/`}
            >
              {tag}
            </Styled.a>
          </span>
        ))}
      </Styled.p>
    ) : null}
  </>
);

export default tags;
