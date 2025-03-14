import React from 'react';
import styles from './Header.module.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container className={`${styles.headerContainer} d-flex justify-content-center align-items-center ps-0 pe-0 pt-1 pb-1`}>
      <NavLink to={"/"} className={`${styles.headerNavLink} d-flex align-items-center w-100 h-100`}>
        <img src="/GwiNewsLogo.svg" alt="GWI News Logo" className={`${styles.headerLogo} w-auto`} />
      </NavLink>
    </Container>
  )
}

export default Header;
