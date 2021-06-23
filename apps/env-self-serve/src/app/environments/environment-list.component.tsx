import React from 'react';
import { useEnvironments } from './useEnvironments.hook';
import { EnvironmentListItem } from './environment-list-item.component';
import { Container } from 'react-bulma-components';

export const EnvironmentList: React.FC<{ projectId: number }> = ({
  projectId,
}) => {
  const [environments, loaded] = useEnvironments(projectId);

  return (
    <>
      {loaded && (
        <Container>
          {environments.map((env) => (
            <EnvironmentListItem
              key={env.id}
              projectId={projectId}
              environment={env}
            />
          ))}
        </Container>
      )}
      {!loaded && <div>Loading environments</div>}
    </>
  );
};
