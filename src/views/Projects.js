import React, { Component } from 'react'
import { Projects } from '../api/Projects';
import { ProjectItem } from '../components/ProjectItem';

export class ProjectsList extends Component {
    state = {
        projects: []
    };

    async componentDidMount() {
        const { items } = await Projects.getProjects();
        this.setState({ projects: items });
    }

    render() {
        return (
            <article className="project">
                <div className="project-list">
                    {this.state.projects.map(p => (
                        <ProjectItem project={p} />
                    ))}
                </div>
            </article>            

        )
    }
}
