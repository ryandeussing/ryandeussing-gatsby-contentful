import React from "react"
import styled from "styled-components"

const HeroText = styled.h1.attrs({
  className: 'blue center lh-title mv0',
})`
  @media (min-width: 300px) {
    font-size: 10vw;
  }
  @media (min-width: 720px) {
    font-size: 96px;
  }
  @media (min-width: 960px) {
    font-size: 120px;
  }
`

export default HeroText