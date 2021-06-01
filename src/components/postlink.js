import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  height: 80px;
  max-height: 80px;

  transition: all 0.5s;
  :hover {
    opacity: 0.5;
  }
`

const TitleStyle = styled(Link)`
  color: #d3d3d3;
  font-size: 0.88em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`

const DateStyle = styled.p`
  color: #C0C0C0;
  display: inline-block;
  font-size: 0.8em;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
`

const DescStyle = styled.p`
  color: #585858;
  margin: 0 0 10px 14px;
  font-size: 0.78em;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const PostLink = ({ post }) => (
  <Wrapper>
    <TitleStyle to={post.frontmatter.path}>
      {post.frontmatter.title}
    </TitleStyle>

    <DateStyle>{post.frontmatter.date}</DateStyle>
    <DescStyle>{post.frontmatter.description}</DescStyle>
  </Wrapper>
)

export default PostLink