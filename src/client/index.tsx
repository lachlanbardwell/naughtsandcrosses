import 'client/styles/global-styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './pages/routes';
import { UserProvider } from './context';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
