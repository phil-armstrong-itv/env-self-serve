import React from 'react';
import { ProjectList } from './projects/project-list.component';
import 'bulma/css/bulma.min.css';
import { Header } from './layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Unknown } from './unknown.component';
import { ProjectPage } from './projects/project.page';

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/project/:projectId" component={ProjectPage} />
        <Route path="/" component={ProjectList} />
        <Route component={Unknown} />
      </Switch>
    </Router>
  );
};
