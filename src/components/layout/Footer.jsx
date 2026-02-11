import { Nav, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";


const Footer = () => {
    return (
      <Container className={styles.footer}>
        <Row className='align-items-center flex-column-reverse flex-lg-row'>
            <Col xs={12} lg={4} xxl={6}>
            <span  className={`${styles.copyrightText} text-center text-lg-start d-block`}> Copyright <NavLink to="/" className="text-decoration-none"> @Kalikwest Agency </NavLink>  All Rights Reserved. </span>
            </Col>
          <Col xs={12} lg={8}  xxl={6} >
          <Nav className='justify-content-center'>
            <Nav.Link as={NavLink} to="/services" className={`${styles.navLink}`}>Services</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" className={`${styles.navLink}`}>Project</Nav.Link>
             <Nav.Link as={NavLink} to="/contact-us"  className={`${styles.navLink}`}>Contact</Nav.Link>  
            <Nav.Link as={NavLink} to="privacy-policy"  className={`${styles.navLink}`}>Privacy Policy</Nav.Link>
            <Nav.Link as={NavLink} to="terms-&-conditions"  className={`${styles.navLink}`}>Terms & Conditions</Nav.Link>       
          </Nav>
         </Col>
          </Row>
      </Container>
    )
}

export default Footer;