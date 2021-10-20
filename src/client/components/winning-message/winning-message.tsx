import { UserContext } from 'client/context';
import { IWinningTeam } from 'client/context/user-context/types';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../winning-message/winning-message.scss';
import { TeamType } from 'client/types/enums';

const determineImage: () => number = () => {
  return Math.round(Math.random() * 10);
};

export const WinningMessage: React.FC<IWinningTeam> = (props) => {
  const { state } = useContext(UserContext);
  const [image, setImage] = useState<string>('');
  const [displayImage, setDisplayImage] = useState<string[]>([]);

  useEffect(() => {
    props.winningTeam ? setImage('pogchamp') : setImage('white guy blinking');
  }, []);

  useEffect(() => {
    axios
      .get(
        //
        `https://api.giphy.com/v1/gifs/search?api_key=PYDK0o7uAlgzrFxg4zqBE0WqOnOoBMxr&q=${image}&limit=11&offset=0&rating=g&lang=en`,
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
    props.setWinningTeam(TeamType.DEFAULT);
    props.setGameRunning(true);
    props.setClearBoard(true);
  };

  return (
    <div>
      {state.user && (
        <div className="winning-div">
          {props.winningTeam ? (
            <h2>
              {state.user.username} Wins! Playing{' '}
              {props.winningTeam == 1 ? 'Naughts' : 'Crosses'}{' '}
            </h2>
          ) : (
            <h2>It's a draw!</h2>
          )}
          <br />
          <video
            width="40%"
            height="40%"
            autoPlay
            loop
            src={displayImage[determineImage()]}
          />
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
