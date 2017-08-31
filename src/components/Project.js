import React from "react"

const Project = ({ project, index }) =>
  <div>
     { // ternary to add links where url exists
       (project.url)
       ? <div>
         <a target="_blank" href={project.url}>
         {project.image.responsiveResolution.src &&
           <img
             style={{ margin: 0 }}
             width={project.image.responsiveResolution.width}
             height={project.image.responsiveResolution.height}
             src={project.image.responsiveResolution.src}
             srcSet={project.image.responsiveResolution.srcSet}
           />}
         </a>
         </div>
       : <div>
         {project.image.responsiveResolution.src &&
           <img
             style={{ margin: 0 }}
             width={project.image.responsiveResolution.width}
             height={project.image.responsiveResolution.height}
             src={project.image.responsiveResolution.src}
             srcSet={project.image.responsiveResolution.srcSet}
           />}
       </div>
     }
  </div>

  export default Project