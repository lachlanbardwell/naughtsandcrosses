import 'client/styles/global-styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './pages/routes';
import { UserProvider } from './context';
import { TopBar } from './components/app-bar/app-bar';

const App: React.FC = () => {
  return (
    <UserProvider>
      {/* <TopBar /> */}
      <Routes />
    </UserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
