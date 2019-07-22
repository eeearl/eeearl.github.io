import React from "react"
// import styled from "react-emotion"
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  height: 120px;
`

const BlogName = styled.div`
  display: block;
  color: #838383;
  font-size: 1em;
  margin-top: 8px;
  text-align: right;
`

export default () => { 
  return (
    <Wrapper className='wrapper'>
      <BlogName>eeearl.com</BlogName>
    </Wrapper>) 
}