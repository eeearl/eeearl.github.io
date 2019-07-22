import React from "react"
import { Link } from "gatsby"
// import styled, { css } from 'react-emotion'
import styled from '@emotion/styled'
import { css } from 'emotion'

const Wrapper = styled.div`
    height: '80px';
    maxHeight: '80px';
`

const TitleStyle = css`
  color: #d3d3d3;
  font-size: 0.88em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`

const DateStyle = css`
  color: #C0C0C0;
  display: inline-block;
  float: right;
  font-size: 0.8em;
`

const DescStyle = css`
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
    <Link to={post.frontmatter.path} className={TitleStyle}>
      {post.frontmatter.title}
    </Link>

    <p className={DateStyle}>{post.frontmatter.date}</p>
    <p className={DescStyle}>{post.frontmatter.description}</p>
  </Wrapper>
)

export default PostLink