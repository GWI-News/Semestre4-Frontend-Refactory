import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { HouseFill, FunnelFill, InfoCircleFill, PersonCircle } from 'react-bootstrap-icons';

const Navbar = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [screenProportions, setScreenProportions] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const newScreenProportions = window.innerWidth / window.innerHeight;
    const difference = Math.abs(screenProportions - newScreenProportions);
    if (difference > 0.1) {
      setScreenProportions(newScreenProportions);
      setKeyboardOpen(true);
    } else {
      setKeyboardOpen(false);
    }
  }, [screenProportions]);

  return (
    <Container className={`${styles.navbarContainer} d-flex justify-content-center align-items-center ps-0 pe-0 pt-1 pb-1`}>
      <Row className="justify-content-between align-items-center w-100">
        <Col xs={3} className="d-flex justify-content-center align-items-center">
          <Link to="/" className={styles.navbarLink}>
            <HouseFill className={styles.navbarIcon} />
          </Link>
        </Col>
        <Col xs={3} className="d-flex justify-content-center align-items-center">
          <FunnelFill className={styles.navbarIcon} />
        </Col>
        <Col xs={3} className="d-flex justify-content-center align-items-center">
          <Link to="/" className={styles.navbarLink}>
            <InfoCircleFill className={styles.navbarIcon} />
          </Link>
        </Col>
        <Col xs={3} className="d-flex justify-content-center align-items-center">
          <PersonCircle className={styles.navbarIcon} />
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar
