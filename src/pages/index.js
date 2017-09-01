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
const A = styled.a`
  ${tachyons}
  border-bottom: 2px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 2px solid var(--near-black);
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
  render() {
    const Projects = this.props.data.us.edges
    return (
      <div>
        <Section ph4 pv6 tc>
          <HeroText blue mv0 f_subheadline_m f2>Hi, I'm Ryan</HeroText>
        </Section>
        <Section bg_near_white ph4 pv5 tc>
          <IntroText f2_m lh_title near-black>I help people and products succeed on the web using strategy, design, and code.</IntroText>
        </Section>
        <Section ph4 ph5_m pt5 pb3>
          <H3 f4 f3_m mt4>Consulting</H3>
          <P f4 f3_m lh_copy mb4>I work with individuals, agencies, brands, and friends. If you&rsquo;d like to discuss a project, or just talk shop, please get in touch.</P>
        </Section>
        <Section ph5>
        {Projects.map(({ node }, i) => <StyledProjectList pb5 node={node} key={i} />)}
        </Section>
        <Section bt ph4 ph5_m pv5>
          <H3 f4 f3_m mt4>Entrepreneur in Residence</H3>
          <P f3_m f4 lh_copy>In 2016, I was a Kaufmann Foundation EIR at NYDesigns, helping young companies identify opportunities and develop strategies for traction and growth.</P>
        </Section>
        <Section bg_near_white pt5 pb6 tc>
          <H3 f3 f2_m mt4>Let&rsquo;s connect</H3>
          <A dib f4_m link near_black ph1 href="mailto:ryan@ryandeussing.com">Email</A> / <A dib f4_m link near_black ph1 href="https://www.twitter.com/ryandeussing">Twitter</A> / <A dib f4_m link near_black ph1 href="https://www.linkedin.com/ryandeussing">LinkedIn</A>
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