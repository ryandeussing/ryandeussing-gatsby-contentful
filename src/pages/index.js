import React from 'react'
import "../css/variables.scss"
import "../css/confetti.scss"
import styled from 'styled-components'
import tachyons from 'styled-components-tachyons'
import Link from 'gatsby-link'
import ConfettiButton from '../components/ConfettiButton.js'
import * as PropTypes from 'prop-types'

import StyledProject from '../components/Project'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Section = styled.section`
  ${tachyons}
  border-color: var(--light-gray)
  `
const HeroText = styled.h1`
  ${tachyons}
  @media (min-width: 960px) {
      font-size: 120px;
    }
`
const IntroText = styled.h2`${tachyons}`
const H3 = styled.h3`${tachyons}`
const P = styled.p`${tachyons}`
const A = styled.a`
  ${tachyons}
  border-bottom: 2px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 2px solid var(--near-black);
    transition: all .3s ease;
  }
`
const GreenA = styled.a`
  ${tachyons}
  border-bottom: 3px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 3px solid var(--green);
    transition: all .3s ease;
  }
`
const OrangeA = styled.a`
  ${tachyons}
  border-bottom: 3px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 3px solid var(--orange);
    transition: all .3s ease;
  }
`


const ProjectList = ({ className, node }) =>
  <div className={className} >
     {node.projects.map(function(project, index){
       return <StyledProject ba project={project} key={index} />
     })}
 </div>

const StyledProjectList = styled(ProjectList)`${tachyons}`

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);

    this.state = {
      isLoading: false,
    };
  }

   setLoading(value) {
    this.setState({ isLoading: value });
  }

  render() {
    const Projects = this.props.data.us.edges
    return (
      <div>
        <Section ph4 pv6 tc>
          <HeroText blue mv0 f_headline_m f1>Hi, I'm Ryan</HeroText>
        </Section>
      </div>

      )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    us:  allContentfulProjectsList {
     edges {
       node {
         id
         projects {
           id
           url
           image {
            responsiveResolution(width: 768) {
              src
              srcSet
              height
              width
            }
          }
         }
       }
     }
   }
  }
`