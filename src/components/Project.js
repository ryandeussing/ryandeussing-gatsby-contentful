import React from "react"
import "../css/variables.scss"
import styled from 'styled-components'
import tachyons from 'styled-components-tachyons'

const A = styled.a`
  ${tachyons}
  > img:hover {
     box-shadow: 0 10px 50px 0 rgba(0,0,0,0.4);
   }
`
const IMG = styled.img`
  ${tachyons}
  transition: all 0.2s ease;
  box-shadow: 0 10px 30px 0 rgba(0,0,0,0.25);
`
const Project = styled.div`${tachyons}`

const StyledProject = ({ project, index }) =>
  <Project ph5 ph6_m pv4 pv5_l>
     { // ternary to add links where url exists
       (project.url)
       ? <div>
         <A db target="_blank" href={project.url}>
         {project.image.responsiveResolution.src &&
           <IMG
             style={{ 'width': '100%' }}
             width={project.image.responsiveResolution.width}
             height={'auto'}
             // height={project.image.responsiveResolution.height}
             src={project.image.responsiveResolution.src}
             srcSet={project.image.responsiveResolution.srcSet}
           />}
         </A>
         </div>
       : <div>
         {project.image.responsiveResolution.src &&
           <IMG
             style={{ 'width': '100%' }}
             width={project.image.responsiveResolution.width}
             height={'auto'}
             // height={project.image.responsiveResolution.height}
             src={project.image.responsiveResolution.src}
             srcSet={project.image.responsiveResolution.srcSet}
           />}
       </div>
     }
  </Project>

  export default StyledProject