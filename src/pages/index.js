import React from 'react'
import "../css/variables.scss"
import styled from 'styled-components'
import tachyons from 'styled-components-tachyons'
import Link from 'gatsby-link'

// import Hero from '../components/Hero'
// import HeroText from '../components/HeroText'
// import Intro from '../components/Intro'
// import IntroText from '../components/IntroText'

import Project from '../components/Project'
import * as PropTypes from 'prop-types'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Hero = styled.section`
  ${tachyons}
`

const HeroText = styled.h1``

const Intro = styled.section``

const IntroText = styled.h2``

const Portfolio = styled.section``

const PortfolioItemWrapper = styled.section``

const PortfolioItemHeader = styled.p``

const PortfolioItemText = styled.p``

const Projectlist = ({ className, node }) =>
  <div className={className} >
     {node.projects.map(function(project, index){
       return <Project project={project} key={index} />
     })}
 </div>

const StyledProjectlist = styled(Projectlist)``

class IndexPage extends React.Component {
  render() {
    const Projects = this.props.data.us.edges
    return (
      <div>
        <Hero tc pv6>
          <HeroText>Hi, I&rsquo;m Ryan</HeroText>
        </Hero>
        <Intro>
          <IntroText>
            I help people and products succeed on the web using strategy, design, and code.
          </IntroText>
        </Intro>
        <Portfolio>
          <PortfolioItemWrapper>
            <PortfolioItemHeader>Consulting</PortfolioItemHeader>
            <PortfolioItemText>I work with individuals, agencies, brands, and friends. If you&rsquo;d like to discuss a project, or just talk shop, please get in touch</PortfolioItemText>
          </PortfolioItemWrapper>
        </Portfolio>

        {Projects.map(({ node }, i) => <StyledProjectlist node={node} key={i} />)}

        <PortfolioItemWrapper>
          <PortfolioItemHeader>Entrepreneur in Residence</PortfolioItemHeader>
          <PortfolioItemText>In 2016 I was a Kaufmann Foundation EIR at NYDesigns, helping young companies identify opportunities and develop strategies for traction and growth.</PortfolioItemText>
        </PortfolioItemWrapper>
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

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
