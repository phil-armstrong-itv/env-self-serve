import React from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { useProject } from './useProject.hook';
import { EnvironmentList } from '../environments/environment-list.component';
import { Container, Heading } from 'react-bulma-components';
import { StartEnvironment } from '../environments/start-environment.page';
import { StopEnvironment } from '../environments/stop-environment.page';

type ProjectParams = {
  projectId: string;
};

export const ProjectPage = () => {
  const { projectId } = useParams<ProjectParams>();
  const { path } = useRouteMatch();
  const id = Number(projectId);

  const [project, loaded] = useProject(id);

  return (
    <>
      {loaded && project && (
        <Container>
          <Heading>{project?.name}</Heading>
          <p>{project?.description}</p>
          <br />
          <Switch>
            <Route exact path={path}>
              <EnvironmentList projectId={id} />
            </Route>
            <Route path={`${path}/environment/:environmentId/start`}>
              <StartEnvironment project={project} />
            </Route>
            <Route path={`${path}/environment/:environmentId/stop`}>
              <StopEnvironment project={project} />
            </Route>
          </Switch>
        </Container>
      )}
      {!loaded && <div>Loading project</div>}
    </>
  );
};
