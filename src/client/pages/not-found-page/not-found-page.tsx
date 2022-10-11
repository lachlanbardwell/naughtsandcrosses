import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './not-found-page.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="notFoundContainer">
      <Link to={'/'} className="homeLink">
        <Button className="homeButton" variant="contained">
          <ArrowBackIcon /> &nbsp; Home
        </Button>
      </Link>
      <span className="notFoundHead">
        <h1>That page doesn&apos;t exist</h1>
        <BuildIcon style={{ fontSize: 50, margin: 'auto' }} />
        <h3>Check the URL and try again</h3>
      </span>
    </section>
  );
};
