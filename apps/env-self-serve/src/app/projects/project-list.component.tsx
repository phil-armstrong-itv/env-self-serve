import React, { useEffect, useState } from 'react';
import { Message } from '@env-self-serve/api-interfaces';
import { useProjects } from './useProjects.hook';

export const ProjectList = () => {
    const [projects, loaded] = useProjects();

return <ul>
      {projects.map((project) => (<li key={project.id}>{project.name}</li>))}
    </ul>;
};
