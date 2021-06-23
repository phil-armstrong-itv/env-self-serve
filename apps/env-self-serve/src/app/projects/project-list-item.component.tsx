import React from 'react';

import { Project } from '@env-self-serve/api-interfaces';
import { Card, Section } from 'react-bulma-components';
import { Link } from 'react-router-dom';

export const ProjectListItem: React.FC<{ project: Project }> = ({
  project,
}) => {
  return (
    <Section>
      <Card>
        <Card.Header.Title>{project.name}</Card.Header.Title>
        <Card.Content>{project.description}</Card.Content>
        <Card.Footer>
          <Card.Footer.Item>
            <Link to={`/project/${project.id}`}>View</Link>
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </Section>
  );
};
