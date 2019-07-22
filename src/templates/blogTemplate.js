import React from "react"
import Heading from '../components/heading'
import Tailing from '../components/tailing'

import { graphql } from "gatsby"
// import styled from "react-emotion"
import styled from '@emotion/styled'

import '../styles/layout'

const TitleWrapper = styled('h1')`
  padding: 0 0 30px 0 !important;
  line-height: normal;
  border-bottom: none !important;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, path, description } = frontmatter
  return (
    <React.Fragment>
      <Heading blogTitle={title} blogPath={path} blogDesc={description} isBlogPost/>
      <div className="post-content">
        <div className="wrapper">
          <span>{frontmatter.date}</span>
          <TitleWrapper>{frontmatter.title}</TitleWrapper>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Tailing />
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY MMM DD")
        path
        title
      }
    }
  }
`