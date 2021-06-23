import { Environment } from '@env-self-serve/api-interfaces';
import React from 'react';
import { Card, Section } from 'react-bulma-components';
import { Link } from 'react-router-dom';

export const EnvironmentListItem: React.FC<{
  projectId: number;
  environment: Environment;
}> = ({ projectId, environment }) => {
  return (
    <Section>
      <Card>
        <Card.Header.Title>{environment.name}</Card.Header.Title>
        <Card.Content>{environment.description}</Card.Content>
        <Card.Footer>
          {environment.status === 'STARTED' && (
            <Card.Footer.Item
              renderAs={Link}
              to={`/project/${projectId}/environment/${environment.id}/stop`}
            >
              Stop
            </Card.Footer.Item>
          )}
          {environment.status === 'STOPPED' && (
            <Card.Footer.Item
              renderAs={Link}
              to={`/project/${projectId}/environment/${environment.id}/start`}
            >
              Start
            </Card.Footer.Item>
          )}
          <Card.Footer.Item
            renderAs={Link}
            to={`/project/${projectId}/environment/${environment.id}/schedule`}
          >
            View Schedule
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Section>
  );
};
