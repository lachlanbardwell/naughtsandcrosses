import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BuildIcon from '@material-ui/icons/Build';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './not-found-page.scss';
import { UserContext } from 'client/context';

export const NotFoundPage: React.FC = () => {
  const { logout } = useContext(UserContext);
  const history = useHistory();

  return (
    <section className="notFoundContainer">
      <span className="notFoundHead">
        <h1>That page doesn&apos;t exist</h1>
        <BuildIcon style={{ fontSize: 50, margin: 'auto' }} />
        <h3>Check the URL and try again</h3>
      </span>
      <button
        className="homeButton"
        onClick={() => {
          logout();
          history.push({ pathname: '/' });
        }}
      >
        <ArrowBackIcon />
        &nbsp; Back to Login
      </button>
    </section>
  );
};
