import React from "react"
import Heading from '../components/heading'
import Tailing from '../components/tailing'
import PostLink from '../components/postlink'

import styled from 'styled-components'

import { graphql } from "gatsby"

import Layout from '../styles/portfolioLayout'
import MenuNav from '../components/portfolio/menuNav'

const MenuSide = styled.div`
  width: 50%;
`

const Header = styled.div`
  width: 220px;
  bottom: 0;
  top: 0;
  text-align: right;
  z-index: 9;

  position: fixed;
`

const ContentSide = styled.div`
  width: 75%;

  margin-left: 25%;
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
    <Layout>
      <div id="main-content">
        <div className="container">
          <div className="row">
            <MenuSide>
              <Header>
                <MenuNav />
              </Header>
            </MenuSide>
            <ContentSide>{ Posts }</ContentSide>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pagequery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }) {
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