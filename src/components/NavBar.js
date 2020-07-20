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
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img src={logo} className={[`${styles.logo}`]} alt="LatinoLinQ" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <NavDropdown title="Español" id="collasible-nav-dropdown">
            <Link to="/" className="dropdown-item">
              Página Principal
            </Link>
            <Link to="/AboutEsp" className="dropdown-item">
              Quienes Somos
            </Link>
            <Link to="/ServicesEsp" className="dropdown-item">
              Servicios
            </Link>
            <Link to="/Calendar" className="dropdown-item">
              Calendario
            </Link>
            <Link to="/NewsletterEsp" className="dropdown-item">
              Registro al Boletín
            </Link>
            <Link to="/BoardEsp" className="dropdown-item">
              Junta Directiva
            </Link>
            <Link to="/SupportEsp" className="dropdown-item">
              Apóyanos
            </Link>
            <Link to="/ContactEsp" className="dropdown-item">
              Contáctanos
            </Link>
            <Link to="/ResourcesEsp" className="dropdown-item">
              Recursos
            </Link>
          </NavDropdown>
          <NavDropdown title="English" id="collasible-nav-dropdown">
            <Link to="/" className="dropdown-item">
              Home
            </Link>
            <Link to="/AboutEng" className="dropdown-item">
              About
            </Link>
            <Link to="/ServicesEng" className="dropdown-item">
              Services
            </Link>
            <Link to="/Calendar" className="dropdown-item">
              Calendar
            </Link>
            <Link to="/NewsletterEng" className="dropdown-item">
              Newsletter Sign-up
            </Link>
            <Link to="/BoardEng" className="dropdown-item">
              Board of Directors
            </Link>
            <Link to="/SupportEng" className="dropdown-item">
              Support Us{' '}
            </Link>
            <Link to="/ContactEng" className="dropdown-item">
              Contact
            </Link>
            <Link to="/ResourcesEng" className="dropdown-item">
              Resources
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
