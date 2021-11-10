import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { GamePage } from './game-page';
import { LoginPage } from './login-page';
import { PageLayout } from './page-layout';

export const Routes: React.FC = () => (
  <PageLayout>
    <HashRouter>
      <Route exact component={LoginPage} path="/" />
      <Route exact component={GamePage} path="/game" />
    </HashRouter>
  </PageLayout>
);
