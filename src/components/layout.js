import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 2,
          py: 3,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)
