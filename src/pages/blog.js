import React from "react"
import Heading from '../components/heading'
import Tailing from '../components/tailing'
import PostLink from '../components/postlink'

import { graphql } from "gatsby"

import '../styles/layout'

export default ({
  data: {
    allMarkdownRemark: { edges },
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
    <React.Fragment>
      <Heading />
      <div className="page-content">
        <div className="wrapper">
          <div>{Posts}</div>  
        </div>
      </div>
      <Tailing />
    </React.Fragment>
  )
}
  
export const pagequery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`