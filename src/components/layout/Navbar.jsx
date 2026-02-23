import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logos/logo.svg";
import logoWhite from "@/assets/icons/logoWhite.svg";
import styles from "./Navbar.module.scss"
import { useState, useEffect } from 'react';

const Header = ({variant="default"}) => {
const isLight = variant === "light";
const [expanded,setExpanded] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);
const [isHidden, setIsHidden] = useState(false);


useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;
    // background after some scroll
    if (currentY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
      setIsHidden(false); // always show at top
    }
    // hide on scroll down, show on scroll up
    if (currentY > lastScrollY && currentY > 120) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setLastScrollY(currentY);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);


  return (
        <Navbar
          expand="lg"
          fixed="top" 
          expanded={expanded}   
          onToggle={() => setExpanded(prev => !prev)}
          className={`
          ${styles.navbar}
          header-glow
          ${styles[variant]}
          ${isScrolled ? styles.scrolled : ""}
          ${isHidden ? styles.hidden : ""}
        `}
        >
      <Container className={styles.headerContainer}>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
          <img src={isLight ? logoWhite : logo} alt="kalikwest"/>
        </Navbar.Brand>

       <Navbar.Toggle
        aria-controls="main-navbar"
        className={styles.customToggle}>
      {expanded && (
        <img
          src="/icons/cross.svg"
          alt="close menu"
          className={styles.closeIcon}
        />
      )}
    </Navbar.Toggle>
        <Navbar.Collapse  className={`${styles.navbarCollapse}` }>
          <Nav className={`${styles.customNavbar} ms-auto`}>


            <Nav.Link as={NavLink} to="/services" onClick={() => setExpanded(false)} className={`${styles.navLink} p-lg-0`}>
            Services
            </Nav.Link>

            <Nav.Link as={NavLink} to="/portfolio" onClick={() => setExpanded(false)} className={`${styles.navLink} p-lg-0`}>
            Projects
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)} className={`${styles.navLink} p-lg-0`}>
            About Us
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact-us" onClick={() => setExpanded(false)}className={`${styles.navLink} p-lg-0`}>
            Contact Us
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact-us" onClick={() => setExpanded(false)}  className={`${styles.navLink} p-lg-0`}>
             Get in Touch
            <span className={`${styles.svgArrow} ps-2 `}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M16.3007 5.18851H0.666668C0.297917 5.18851 0 5.48643 0 5.85518C0 6.22393 0.297917 6.52185 0.666668 6.52185H14.6903L10.6444 10.5677C10.384 10.8281 10.384 11.251 10.6444 11.5114C10.9048 11.7719 11.3278 11.7719 11.5882 11.5114L16.7736 6.32601C16.9653 6.13435 17.0215 5.84893 16.9174 5.59893C16.8132 5.35101 16.5694 5.18851 16.3007 5.18851Z" fill="#EDEDED"/>
              <path d="M11.1076 0C10.9367 0 10.7659 0.0645843 10.6367 0.195835C10.3763 0.456252 10.3763 0.879169 10.6367 1.13959L15.8284 6.33127C16.0888 6.59169 16.5117 6.59169 16.7722 6.33127C17.0326 6.07085 17.0326 5.64793 16.7722 5.38751L11.5805 0.195835C11.4492 0.0645843 11.2784 0 11.1076 0Z" fill="#EDEDED"/>
            </svg> 
            </span> 
           </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
