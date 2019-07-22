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

const ListUp = styled('ul')`
  list-style-type: none;
  text-align: center;
`

export default () => {
  return (
    <React.Fragment>
      <Heading />
      <div className="page-content">
        <div className="wrapper">
          <IntroduceText>
            <p>Pursues differentiated idea, a different perspective.</p>
            <p>Keep in simplicity</p>
          </IntroduceText>
          <Empty></Empty>
          <ListUp>
            <li><a href='https://github.com/ul7290'>Github</a></li>
            <li><a href='https://twitter.com/eeeearl'>Twitter</a></li>
            <li><a href='https://www.linkedin.com/in/hanulpark'>LinkedIn</a></li>
          </ListUp>
        </div>
      </div>
      <Tailing />
    </React.Fragment>
  )
}