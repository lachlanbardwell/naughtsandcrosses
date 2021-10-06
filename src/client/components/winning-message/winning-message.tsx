import { UserContext } from 'client/context';
import { IWinningTeam } from 'client/context/user-context/types';
import React, { useContext, useEffect, useState } from 'react';
import '../winning-message/winning-message.scss';
import axios from 'axios';

export const WinningMessage: React.FC<IWinningTeam> = (props) => {
  const { state, setUserWin } = useContext(UserContext);
  const [image, setImage] = useState<string>('solitaire');
  const [displayImage, setDisplayImage] = useState<string[]>([]);

  useEffect(() => {
    state.user && props.winningTeam === state.user.team
      ? setImage('solitaire')
      : setImage('white guy blinking');
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${'PYDK0o7uAlgzrFxg4zqBE0WqOnOoBMxr'}&q=${image}&limit=1&offset=0&rating=g&lang=en`,
      )
      .then((res) =>
        setDisplayImage(
          res.data.data.map((img: any) => img.images.preview.mp4),
        ),
      )
      .catch((error) => {
        throw new Error(error);
      });
  }, [image]);

  const resetGame = () => {
    // setUserWin(undefined);
    props.setGameRunning(true);
  };

  return (
    <div>
      {state.user && (
        <div className="winning-div">
          <button onClick={() => console.log(state)}>WIN MSG STATE</button>
          {state.user.team === props.winningTeam ? (
            <>
              <h2>{state.user.username} Wins!</h2>
              {displayImage.map((url: string) => (
                <video autoPlay loop src={url} key={url} />
              ))}
            </>
          ) : (
            <>
              <h2>'You Lose LoOoooOL!'</h2>
              {displayImage.map((url: string) => (
                <video autoPlay loop src={url} key={url} />
              ))}
            </>
          )}

          <button
            onClick={() => {
              resetGame();
            }}
          >
            NEW GAME
          </button>
        </div>
      )}
    </div>
  );
};
