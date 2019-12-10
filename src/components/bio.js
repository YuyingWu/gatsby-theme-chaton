/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Styled, css, Flex } from "theme-ui"
import BioContent from "./bio-content"
import Styles from './Bio.module.css';

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author, siteUrl, social, description },
    },
    avatar,
  } = data

  return (
    <Flex css={css({ alignItems: `center` })} className={Styles.container}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            minWidth: 48,
            borderRadius: 99999,
          })}
          role="presentation"
        />
      )}
      <Styled.div>
        <BioContent author={author} siteUrl={siteUrl} social={social} description={description} />
      </Styled.div>
    </Flex>
  )
}

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        social {
          name
          url
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
