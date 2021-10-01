import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { GamePage } from './game-page';
import { LoginPage } from './login-page';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact component={LoginPage} path="/" />
    <Route exact component={GamePage} path="/game" />
  </BrowserRouter>
);
