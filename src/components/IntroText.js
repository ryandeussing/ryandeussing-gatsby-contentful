import React from "react"
import styled from "styled-components"

const IntroText = styled.h2.attrs({
  className: 'center lh-title mv3 mw8',
})`
  color: #313131;
  @media (min-width: 300px) {
    font-size: 6vw;
    // padding: 0 2rem;
  }
  @media (min-width: 720px) {
    font-size: 32px;
  }
  @media (min-width: 960px) {
    font-size: 40px;
    // max-width: 900px;
  }
`

export default IntroText