import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { Styled, css } from "theme-ui";

const Categories = ({ categories = [] }) => (
  <>
    {categories.length ? (
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3
        })}
      >
        <span style={{ marginRight: "10px" }}>Categories:</span>
        {categories.map((tag, index) => (
          <span key={`tag-${index}`} style={{ marginRight: "10px" }}>
            <Styled.a
              as={Link}
              css={{
                textDecoration: `none`
              }}
              to={`/categories/${kebabCase(tag)}/`}
            >
              {tag}
            </Styled.a>
          </span>
        ))}
      </Styled.p>
    ) : null}
  </>
);

export default Categories;
