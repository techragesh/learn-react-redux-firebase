import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLink = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/createproject">Create Project</NavLink>
        </li>
        <li>
          <NavLink to="/">LogOut</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating red lighten-1">
            <b>TR</b>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLink;
