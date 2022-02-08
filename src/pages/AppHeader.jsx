import React from 'react';
import { NavLink } from 'react-router-dom';

export const AppHeader = () => {
  return (
    <header className='app-header flex align-center space-between'>
      <NavLink to='/'>
        <h1>MyApp</h1>
      </NavLink>
      <nav className='main-nav'>
        <NavLink activeClassName='my-active' exact to='/'>
          Home
        </NavLink>
        <NavLink to='/home'>Home</NavLink>
        {/* <NavLink to='/about'>About</NavLink> */}
      </nav>
    </header>
  );
};
