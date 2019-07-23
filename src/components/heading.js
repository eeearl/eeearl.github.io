import React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"
// import styled, { css } from "react-emotion"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { StaticQuery, graphql } from "gatsby"

import Helmet from 'react-helmet'

const Wrapper = styled.header`
  height: 120px;
`

const BlogNameStyle = css`
  display: inline-block;
  color: #838383;
  font-size: 28px;
  margin-top: 8px;
`

const MenuItem = css`
  color: #E0E0E0;
  margin: 0 8px;
  
`

const Menu = styled.div`
  color: #E0E0E0;
  float: right;
  margin: 18px 0;
`

const heading = ({ blogTitle, blogPath, blogDesc, isBlogPost }) => { 
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
              canonicalUrl
              social {
                twitter
              }
            }
          }
        }
      `}
      render={data => {
        const title = blogTitle || data.site.siteMetadata.title
        const desc = blogDesc || data.site.siteMetadata.description
        const url = `${data.site.siteMetadata.canonicalUrl}/${blogPath}`

        return (
          <>
            <Helmet>
              {/* General tags */}
              <title>{`${data.site.siteMetadata.title} - ${title}`}</title>
              <link rel="canonical" href={url}></link>
              <meta name="description" content={desc} />
              {/* <meta name="image" content={image} /> */}

              {/* OpenGraph tags */}
              <meta property="og:url" content={url} />
              {isBlogPost ? <meta property="og:type" content="article" /> : null}
              <meta property="og:title" content={title} />
              <meta property="og:description" content={desc} />
              {/* <meta property="og:image" content={image} /> */}
              {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

              {/* Twitter Card tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:creator" content={data.site.siteMetadata.social.twitter} />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={desc} />
              {/* <meta name="twitter:image" content={image} /> */}
            </Helmet>
            <Wrapper className='wrapper'>
              <Link css={[BlogNameStyle]} to={`/`}>eeearl</Link>
              <Menu>
                <Link css={MenuItem} to={`/about`}>about</Link>
                {/* <Link css={MenuItem} to={`/blog`}>blog</Link> */}
              </Menu>
            </Wrapper>
          </>
      )}}
    />
  ) 
}

heading.propTypes = {
  isBlogPost: PropTypes.bool,
  blogTitle: PropTypes.string,
  blogPath: PropTypes.string,
  blogDesc: PropTypes.string
};

heading.defaultProps = {
  isBlogPost: false,
  blogTitle: '',
  blogPath: '',
  blogDesc: ''
};

export default heading