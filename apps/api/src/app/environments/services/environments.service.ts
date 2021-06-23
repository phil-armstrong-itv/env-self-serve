import { Environment } from '@env-self-serve/api-interfaces';

const ENVIRONMENTS: Environment[] = [
    {
        id: 1,
        projectId: 1,
        name: 'SIT',
        description: 'Bog standard test environment',
        status: 'STARTED'
    },
    {
        id: 2,
        projectId: 1,
        name: 'QA3',
        description: 'Test environment with big boy pants on',
        status: 'STARTED'
    },
    {
        id: 3,
        projectId: 1,
        name: 'Migrate',
        description: 'Err...good question',
        status: 'STOPPED'
    },
    {
        id: 4,
        projectId: 1,
        name: 'Train',
        description: 'Safe space for training',
        status: 'STOPPED'
    },
    {
        id: 5,
        projectId: 1,
        name: 'Pre',
        description: 'Useful for investigating prod errors',
        status: 'STOPPED'
    },
    {
        id: 6,
        projectId: 2,
        name: 'SIT',
        description: 'Test env',
        status: 'STARTED'
    },
    {
        id: 7,
        projectId: 3,
        name: 'SIT',
        description: 'Test env',
        status: 'STARTED'
    },
    {
        id: 8,
        projectId: 3,
        name: 'Pre',
        description: 'Pre env',
        status: 'STARTED'
    },
]

export const getAllEnvironmentsForProject = (projectId: number): Environment[] => {
    return ENVIRONMENTS.filter(env => env.projectId === projectId);
}

export const getEnvironmentById = (environmentId: number): Environment => {
    return ENVIRONMENTS.find(env => env.id === environmentId);
}

export const startEnvironment = (environment: Environment): boolean => {
    if (environment.status !== 'STOPPED') {
        return false;
    }

    ENVIRONMENTS.find(env => env.id === environment.id).status = 'STARTED';

    return true;
};

export const stopEnvironment = (environment: Environment): boolean => {
    if (environment.status !== 'STARTED') {
        return false;
    }
    
    ENVIRONMENTS.find(env => env.id === environment.id).status = 'STOPPED';

    return true;
};