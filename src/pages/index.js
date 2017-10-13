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
const BlueA = styled.a`
  ${tachyons}
  border-bottom: 3px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 3px solid var(--blue);
    transition: all .3s ease;
  }
`
const GoldA = styled.a`
  ${tachyons}
  border-bottom: 3px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 3px solid var(--gold);
    transition: all .3s ease;
  }
`
const PinkA = styled.a`
  ${tachyons}
  border-bottom: 3px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 3px solid var(--dark-pink);
    transition: all .3s ease;
  }
`
const PurpleA = styled.a`
  ${tachyons}
  border-bottom: 3px solid transparent;
  transition: all .3s ease;
  &:hover {
    border-bottom: 3px solid var(--purple);
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
        <Section bg_near_white ph4 ph5_l pv4 pv5_m pv5_l tc>
          <IntroText center f2_ns lh_title mw8 near_black>I help people and products <ConfettiButton
            isLoading={ this.state.isLoading }
            setLoading={ this.setLoading }
          /> on the web using strategy, design, and code.</IntroText>
        </Section>
        <Section center mw8>
          <Section ph4 ph5_m ph6_l pt4 pt5_m pt5_l pb3>
            <H3 f4 f3_m f3_l mt4 near_black>Consulting</H3>
            <P f4 f3_m f3_l lh_copy mb4 near_black>I&rsquo;m the man behind the curtain at <b>Good Machine</b>, a technical partner for design and branding agencies including PS212, The O Group, Sonnet Media, and Mucca.</P>
            <P f4 f3_m f3_l lh_copy mb4 near_black>I love collaborating with agency and client teams to guide project strategy, manage implementation, and provide ongoing refinement and support.</P>
            <P f4 f3_m f3_l lh_copy mb4 near_black>If you&rsquo;d like to talk shop, please <GreenA b green link href="mailto:ryan@ryandeussing.com">get in touch</GreenA> anytime.</P>
          </Section>
        </Section>
        <Section>
        {Projects.map(({ node }, i) => <StyledProjectList center mw7 pb5 node={node} key={i} />)}
        </Section>
        <Section center mw8>
          <Section bt ph4 ph5_m ph6_l pv5>
            <H3 f4 f3_m f3_l mt3 mt4_m near_black>Entrepreneur in Residence</H3>
            <P f4 f3_m f3_l lh_copy near_black>I was recently a Kaufmann Foundation EIR at <OrangeA b link orange href="http://nydesigns.org" target="_blank">NYDesigns</OrangeA>, helping early-stage companies with go-to-market strategies and growth opportunities. Key engagements included <PurpleA b link purple href="http://www.antoniasaintny.com" target="_blank">Antonia Saint NY</PurpleA> ($2MM+ crowdfunding), <PinkA b link dark_pink href="https://www.mother.ly" target="_blank">Motherly</PinkA> (Matter.vc alum), and fellows of NYC's <GoldA b link gold href="http://www.futureworks.nyc/" target="_blank">Next Top Makers</GoldA> program.
            </P>
          </Section>
        </Section>
        <Section bg_near_white pt4 pt5_m pt5_l pb5 pb6_m pb6_l tc>
          <H3 f3 f2_m f2_l mb3 mt4 near_black>Let&rsquo;s connect</H3>
          <A dib f4_m f4_l link near_black ph1 href="mailto:ryan@ryandeussing.com" target="_blank">Email</A> / <A dib f4_m f4_l link near_black ph1 href="https://www.twitter.com/ryandeussing" target="_blank">Twitter</A> / <A dib f4_m f4_l link near_black ph1 href="https://www.linkedin.com/in/ryandeussing" target="_blank">LinkedIn</A>
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
