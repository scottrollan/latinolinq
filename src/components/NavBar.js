import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Latino LinQ Logo Color.png';
// import $ from 'jquery';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Navbar
      className={styles.navBar}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Navbar.Brand href="/">
        <img src={logo} className={[`${styles.logo}`]} alt="LatinoLinQ" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavDropdown
            title="Español"
            id="collasible-nav-dropdown"
            className={[`${styles.rightMargin1} ${styles.toRight}`]}
          >
            <Link
              to="/"
              className={[`dropdown-item ${styles.toRight}`]}
              style={{ textAlign: 'right' }}
            >
              Página Principal
            </Link>
            <Link
              to="/AboutEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Quienes Somos
            </Link>
            <Link
              to="/ServicesEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Servicios
            </Link>
            {/* <Link
              to="/CalendarEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            > */}
            {/* Calendario
            </Link> */}
            <Link
              to="/NewsletterEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Registro al Boletín
            </Link>
            <Link
              to="/BoardEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Junta Directiva
            </Link>
            <Link
              to="/SupportEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Apóyanos
            </Link>
            <Link
              to="/ContactEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Contáctanos
            </Link>
            <Link
              to="/ResourcesEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Recursos
            </Link>
            {/* <Link to="/Vota" className={[`dropdown-item ${styles.toRight}`]}>
              <span style={{ color: 'var(--linq-green' }}>
                Recursos para Votar
              </span>
            </Link> */}
            <Link
              to="/LegalAssistanceEsp"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Recursos de Asistencia Legal
            </Link>
          </NavDropdown>
          <NavDropdown
            title="English"
            id="collasible-nav-dropdown"
            className={[`${styles.rightMargin1} ${styles.toRight}`]}
          >
            <Link to="/" className={[`dropdown-item ${styles.toRight}`]}>
              Home
            </Link>
            <Link
              to="/AboutEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              About
            </Link>
            <Link
              to="/ServicesEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Services
            </Link>
            {/* <Link
              to="/Calendar"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Calendar
            </Link> */}
            <Link
              to="/NewsletterEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Newsletter Sign-up
            </Link>
            <Link
              to="/BoardEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Board of Directors
            </Link>
            <Link
              to="/SupportEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Support Us{' '}
            </Link>
            <Link
              to="/ContactEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Contact
            </Link>
            <Link
              to="/ResourcesEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Resources
            </Link>
            {/* <Link to="/Vote" className={[`dropdown-item ${styles.toRight}`]}>
              <span
                style={{
                  color: 'var(--linq-green)',
                  textDecoration: 'underline',
                }}
              >
                Voting Resources
              </span>
            </Link> */}
            <Link
              to="/LegalAssistanceEng"
              className={[`dropdown-item ${styles.toRight}`]}
            >
              Legal Assistance Resources
            </Link>
          </NavDropdown>
          <a
            href="https://www.facebook.com/latinolinq"
            className={[`dropdown-item ${styles.aTag}`]}
          >
            <i className={[`fab fa-facebook-square ${styles.icon}`]}></i>
          </a>
          <a
            href="https://www.instagram.com/latinolinq/"
            className={[`dropdown-item ${styles.aTag}`]}
          >
            <i className={[`fab fa-instagram ${styles.icon}`]}></i>
          </a>
          <a
            href="https://twitter.com/latinolinq"
            className={[`dropdown-item ${styles.aTag}`]}
          >
            <i className={[`fab fa-twitter-square ${styles.icon}`]}></i>
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
