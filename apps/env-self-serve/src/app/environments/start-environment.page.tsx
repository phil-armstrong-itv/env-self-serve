import { Project } from '@env-self-serve/api-interfaces';
import React from 'react';
import { Button, Container, Heading, Section } from 'react-bulma-components';
import { useHistory, useParams } from 'react-router-dom';
import { useEnvironment } from './useEnvironment.hook';
import { Link } from 'react-router-dom';
import { useStartEnvironment } from './start-environment.hook';

type EnvironmentProps = {
  environmentId: string;
};

export const StartEnvironment: React.FC<{project: Project}> = ({project}) => {
  const { environmentId } = useParams<EnvironmentProps>();
  const envId = Number(environmentId);
  const [environment, loaded] = useEnvironment(project.id, envId);
  const [startEnvironment] = useStartEnvironment(project.id, envId);
  const history = useHistory();

  const handleStartEnvironment = () => {
    startEnvironment()
    .then(bool => {
      if (bool) {
        history.push(`/project/${project.id}`);
      }
    })
  }

  return (
    <>
      {loaded && (
        <Container>
          <Heading>{environment?.name}</Heading>
          <Section>
            <span>Are you sure you want to start {environment?.name}</span>
            <Button onClick={handleStartEnvironment}>Yes</Button>
            <Button renderAs={Link} to={`/project/${project.id}`}>No</Button>
            
          </Section>
        </Container>
      )}
      {!loaded && <div>Environment loading</div>}
    </>
  );
};
