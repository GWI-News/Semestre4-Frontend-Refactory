import React from 'react';
import styles from './Header.module.css';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Container fluid className={`${styles.headerContainer} d-flex justify-content-center align-items-center w-100 ps-0 pe-0 pt-1 pb-1`}>
      <NavLink to={"/"} className="d-flex justify-content-center align-items-center w-100 h-100">
        <img src="/GwiNewsLogo.svg" alt="GWI News Logo" className="h-100 w-auto" />
      </NavLink>
    </Container>
  )
}

export default Header
