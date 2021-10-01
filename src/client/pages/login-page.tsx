import React from 'react';
import { Router, Switch, Route, NavLink } from 'react-router-dom';
import { UserLogin } from 'client/components/login/login';
import { GamePage } from './game-page';
import { Redirect } from 'react-router';

export const LoginPage: React.FC = () => {
  return <UserLogin></UserLogin>;
};
