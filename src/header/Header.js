import React, { Fragment } from 'react';
import Form from './Form';
import Nav from './Nav';

const Header = () => {
  return (
    <Fragment>
      <header className='header'>
        <img src='src/img/logo.png' alt='Logo' className='header__logo' />
        <Form />
        <Nav />
      </header>
    </Fragment>
  );
};

export default Header;
