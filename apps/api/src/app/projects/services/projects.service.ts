import { Project } from '@env-self-serve/api-interfaces';

const PROJECTS: Project[] = [
    {
        id: 1,
        name: 'Talpay',
        description: 'Take the second left after the 12th microservice and head straight until the end'
    },
    {
        id: 2,
        name: 'MyClear',
        description: 'You wouldn\'t download a car'
    },
    {
        id: 3,
        name: 'Freecon',
        description: 'Here be dragons'
    }
]

export const getAllProjects = (): Project[] => {
    return PROJECTS;
}

export const getProject = (id: number): Project => {
    return PROJECTS.find(project => project.id === id);
}