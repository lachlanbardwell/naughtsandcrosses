import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board/board';
import { WinningMessage } from './components/winning-message/winning-message';
import 'client/styles/global-styles.scss';
import { LoginPage } from './pages/login-page';
import { BrowserRouter } from 'react-router-dom';
import { GamePage } from './pages/game-page';
import { Routes } from './pages/routes';

const App: React.FC = () => {
  return <Routes />;
};

ReactDOM.render(<App />, document.getElementById('root'));
