import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id; 
    return(
        <div className="container section project-details">
            <div className="card-z-depth-0">
                <div className="card-content">
                    <span className="card-title">Plan Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsa quidem possimus doloremque rerum dicta! Velit odio reprehenderit in possimus rerum, molestiae blanditiis assumenda tenetur id architecto molestias sequi quod.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Angelina</div>
                    <div>1st January, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
