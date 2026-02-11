import Heading from "@/components/UI/Heading/Heading";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ServicesHero.module.scss"
import vectorImage from "@/assets/icons/vectorServices.svg"

const ServicesHero = () => {
    return (
        <Container>
        <Row> 
            <div className={`${styles.ServicesHeroParent} position-relative`}>
            <Col xs={12}>
        <Heading text="Redefining brands with impactful digital services"
        align="center"
        className={`${styles.heroHeading} text-capitalize fw-medium mx-auto`}
        as="h1"
        />

        <div className="vectorContainer position-absolute top-0 end-0">
            <img src={vectorImage} alt="vector-image" className="img-fluid d-none d-lg-block"  fetchpriority="high"/>
        </div>
         </Col>
         </div>
                </Row>
                </Container>
    )
}

export default ServicesHero;