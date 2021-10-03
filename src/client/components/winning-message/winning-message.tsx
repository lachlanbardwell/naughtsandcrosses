import React, { useState } from 'react';
import '../winning-message/winning-message.scss';

export const WinningMessage: React.FC = () => {
  const [gameRunning, setGameRunning] = useState<boolean>(true);
  const [xWin, setXwin] = useState<boolean>(true);
  const [oWin, setOwin] = useState<boolean>(true);

  return (
    <div className="winning-div">
      <h1>X's Win!</h1>
      <button onClick={() => setGameRunning(true)}>Rematch</button>
    </div>
  );
};
