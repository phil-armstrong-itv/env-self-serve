import React from 'react';
import { useProjects } from './useProjects.hook';
import { ProjectListItem } from './project-list-item.component';
import { Container } from 'react-bulma-components';

export const ProjectList = () => {
  const [projects, loaded] = useProjects();

  return (
    <>
      {loaded && (
        <Container>
          {projects.map((project) => (
            <ProjectListItem key={project.id} project={project} />
          ))}
        </Container>
      )}
      {!loaded && <div>Loading projects</div>}
    </>
  );
};
