import React from 'react'
import "../css/variables.scss"
import styled from 'styled-components'
import tachyons from 'styled-components-tachyons'
import Link from 'gatsby-link'
import * as PropTypes from 'prop-types'

import StyledProject from '../components/Project'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Section = styled.section`
  ${tachyons}
  border-color: var(--light-gray)
  `
const HeroText = styled.h1`${tachyons}`
const IntroText = styled.h2`${tachyons}`
const H3 = styled.h3`${tachyons}`
const P = styled.p`${tachyons}`

const ProjectList = ({ node }) =>
  <div>
     {node.projects.map(function(project, index){
       return <StyledProject project={project} key={index} />
     })}
 </div>

const StyledProjectList = styled(ProjectList)`${tachyons}`

class IndexPage extends React.Component {
  render() {
    const Projects = this.props.data.us.edges
    return (
      <div>
        <Section ph4 pv6 tc>
          <HeroText blue mv0 f2>Hi, I'm Ryan</HeroText>
        </Section>
        <Section bg_near_white ph4 pv5 tc>
          <IntroText lh_title near-black>I help people and products succeed on the web using strategy, design, and code.</IntroText>
        </Section>
        <Section ph4 pv5>
          <H3 f4 mt4>Consulting</H3>
          <P f5 lh_copy mb4>I work with individuals, agencies, brands, and friends. If you&rsquo;d like to discuss a project, or just talk shop, please get in touch.</P>
        </Section>

        {Projects.map(({ node }, i) => <StyledProjectList node={node} key={i} />)}

        <Section bt ph4 pv5>
          <H3 f4 mt4>Entrepreneur in Residence</H3>
          <P f5 lh_copy>In 2016, I was a Kaufmann Foundation EIR at NYDesigns, helping young companies identify opportunities and develop strategies for traction and growth.</P>
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