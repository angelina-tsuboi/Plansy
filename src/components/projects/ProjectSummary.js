import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
                <span className="card-title">{project.title}</span>
                <p>Posted by Angelina</p>
                <p className="grey-text">1st January, 2020</p>
        </div>
    )
}

export default ProjectSummary;