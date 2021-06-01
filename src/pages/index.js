import React from "react"
import styled from 'styled-components'

import Heading from '../components/heading'
import Tailing from '../components/tailing'
import PostLink from '../components/postlink'

import { graphql } from "gatsby"
import BaseStyle from '../styles/base'
import Global from '../styles/layout'

const size = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const Container = styled.div`
  width: ${size.tablet};
  margin: 0 auto;

  @media ${size.laptop} {
    max-width: 800px;

  }

  @media ${size.mobile} 
    width: ${size.mobile};{
    max-width: 100%;
    padding: 0 20px;
  }
`

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
    <Container>
      <BaseStyle />
      <Global />
      <Heading />
      <div className="page-content">
        <div className="wrapper">
          <div>{ Posts }</div>
        </div>
      </div>
      <Tailing />
    </Container>
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