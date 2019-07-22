import React from "react"
import Heading from '../components/heading'
import Tailing from '../components/tailing'
import PostLink from '../components/postlink'

// import styled from "react-emotion"
import styled from '@emotion/styled'

import { graphql } from "gatsby"

import '../styles/layout'

const WelcomeText = styled.p`
  text-align: center;
  display: block;
`
const IntroduceText = styled.div`
  margin: 10px 0;
  text-align: right;
`
export default () => {
  return (
    <React.Fragment>
      <Heading />
      <div className="page-content">
        <div className="wrapper">
          <IntroduceText>
            <p>안녕하세요 </p>
            <p>Good to see you </p>
            <p>よろしくお願います </p>
            {/* <p>Loves cat, cutting edge techs, and code</p>
            <p>ありがとうございます、よろしくお願いします。</p> */}
          </IntroduceText>
        </div>
      </div>
      <Tailing />
    </React.Fragment>
  )
}