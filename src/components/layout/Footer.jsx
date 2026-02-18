import { Nav, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";


const Footer = () => {
    return (
      <Container className={styles.footer}>
        <Row className='align-items-center flex-column-reverse flex-lg-row'>
            <Col xs={12} lg={3} xxl={4}>
            <span  className={`${styles.copyrightText} text-center text-lg-start d-block`}> Copyright <NavLink to="/" className={`${styles.copyrightLink} text-decoration-none`}> @Kalikwest </NavLink>  All Rights Reserved. </span>
            </Col>
          <Col xs={12} lg={9}  xxl={8} >
          <Nav className='justify-content-center justify-content-lg-end'>
            <Nav.Link as={NavLink} to="/services" className={`${styles.navLink}`}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" className={`${styles.navLink}`}>Projects</Nav.Link>
               <Nav.Link as={NavLink} to="/about" className={`${styles.navLink}`}>About Us</Nav.Link>
             <Nav.Link as={NavLink} to="/contact-us"  className={`${styles.navLink}`}>Contact</Nav.Link>  
            <Nav.Link as={NavLink} to="/privacy-policy"  className={`${styles.navLink}`}>Privacy Policy</Nav.Link>
            <Nav.Link as={NavLink} to="/terms-conditions"  className={`${styles.navLink}`}>Terms & Conditions</Nav.Link>       
          </Nav>
         </Col>
          </Row>
      </Container>
    )
}

export default Footer;