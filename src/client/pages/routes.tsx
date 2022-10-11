import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { GamePage } from './game-page';
import { LoginPage } from './login-page';
import { NotFoundPage } from './not-found-page/not-found-page';
import { PageLayout } from './page-layout';

export const Routes: React.FC = () => (
  <PageLayout>
    <HashRouter>
      <Switch>
        <Route exact component={LoginPage} path="/" />
        <Route exact component={GamePage} path="/game" />
        <Route exact component={NotFoundPage} />
      </Switch>
    </HashRouter>
  </PageLayout>
);
