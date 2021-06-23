import { Project } from '@env-self-serve/api-interfaces';
import React from 'react';
import { Button, Container, Heading, Section } from 'react-bulma-components';
import { useHistory, useParams } from 'react-router-dom';
import { useEnvironment } from './useEnvironment.hook';
import { Link } from 'react-router-dom';
import { useStopEnvironment } from './stop-environment.hook';

type EnvironmentProps = {
  environmentId: string;
};

export const StopEnvironment: React.FC<{project: Project}> = ({project}) => {
  const { environmentId } = useParams<EnvironmentProps>();
  const envId = Number(environmentId);
  const [environment, loaded] = useEnvironment(project.id, envId);
  const [stopEnvironment] = useStopEnvironment(project.id, envId);
  const history = useHistory();

  const handleStopEnvironment = () => {
    stopEnvironment()
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
            <span>Are you sure you want to stop {environment?.name}</span>
            <Button onClick={handleStopEnvironment}>Yes</Button>
            <Button renderAs={Link} to={`/project/${project.id}`}>No</Button>
          </Section>
        </Container>
      )}
      {!loaded && <div>Environment loading</div>}
    </>
  );
};
