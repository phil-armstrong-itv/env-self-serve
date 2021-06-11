export interface Environment {
    id: number;
    projectId: number;
    name: string;
    description: string;
    status: 'STARTED' | 'STARTING' | 'STOPPED' | 'STOPPING';
}