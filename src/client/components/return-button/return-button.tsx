import React from 'react';
import { NavLink } from 'react-router-dom';
import './return-button.scss';

export const ReturnButton: React.FC = () => {
  return (
    <NavLink to="/" activeClassName="boardLink">
      <button id="returnButton">Return to login</button>
    </NavLink>
  );
};
