import React from 'react'

export const ProjectItem = ({ project }) => (
    <li className="project-item">
        <img className="project-image" src={require(`../assets/images/${project.image}`)} alt={project.name} />
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
    </li>
); 