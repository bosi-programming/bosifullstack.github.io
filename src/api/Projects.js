import projects from "./projects-data.json";

export class Projects{
    static getProjects() {
        return new Promise((resolve, reject) =>{
            if (projects){
                resolve(projects);
            }else {
                reject();
            }
        });
    }

    static getProjectsById(id) {
        return new Promise((resolve, reject) => {
            const project = projects.items.find(p => p.id === parseInt(id));

            if (project){
                resolve(project);
            } else {
                reject();
            }
        })
    }
}