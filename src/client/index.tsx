import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board/board';
import { UserLogin } from './components/login/login';
import { WinningMessage } from './components/winning-message/winning-message';
import 'client/styles/global-styles.scss';

const App: React.FC = () => {
  return <UserLogin />;
};

ReactDOM.render(<App />, document.getElementById('root'));
