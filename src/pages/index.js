import React from "react"
import Heading from '../components/heading'
import Tailing from '../components/tailing'
import PostLink from '../components/postlink'

// import styled from "react-emotion"
import styled from '@emotion/styled'

import { graphql } from "gatsby"

import Layout from '../styles/layout'

export default ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => 
      <PostLink 
        key={edge.node.id} 
        post={edge.node} />
    )

  return (
    <Layout>
      <Heading />
      <div className="page-content">
        <div className="wrapper">
          <div>{ Posts }</div>
        </div>
      </div>
      <Tailing />
    </Layout>
  )
}

export const pagequery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          categories: {
            ne: "private"
          }
        }
      }
      sort: { 
        order: DESC, fields: [frontmatter___date] 
      }) 
      {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            path
            title
            description
          }
        }
      }
    }
  }
`