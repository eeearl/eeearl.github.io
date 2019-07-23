import React from "react"
import Heading from '../components/heading'
import Tailing from '../components/tailing'

// import styled from "react-emotion"
import styled from '@emotion/styled'

const IntroduceText = styled('p')`
  margin: 10px 0;
  text-align: center;
`

const Empty = styled('div')` margin: 24px 0; `

export default () => {
  return (
    <>
      <Heading />
      <div className="page-content">
        <div className="wrapper">
          <IntroduceText>
            <p>Page Not Found.</p>
          </IntroduceText>
          <Empty></Empty>
        </div>
      </div>
      <Tailing />
    </>
  )
}