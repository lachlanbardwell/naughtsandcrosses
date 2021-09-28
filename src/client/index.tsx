import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from './components/board/board';
import { WinningMessage } from './components/winning-message/winning-message';

const App: React.FC = () => {
  return (
    <>
      <Board></Board>
      <WinningMessage />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
