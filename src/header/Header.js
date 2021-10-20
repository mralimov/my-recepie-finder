import React, { Fragment } from 'react';
import Form from './Form';
import Nav from './Nav';
import Icons from '../img/icons.svg';

const Header = ({ recipeName, setRecipeName }) => {
  return (
    <Fragment>
      <header className='header'>
        <img src='../img/logo.png' alt='Logo' className='header__logo' />
        <Form recipeName={recipeName} setRecipeName={setRecipeName} />
        <Nav />
      </header>
    </Fragment>
  );
};

export default Header;
