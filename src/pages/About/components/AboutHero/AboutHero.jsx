import { Container, Row, Col } from "react-bootstrap";
import AboutVector from "@/assets/icons/aboutVector.svg"
import Heading from "@/components/UI/Heading/Heading";
import styles from "./AboutHero.module.scss";

const AboutHero = () => {
    return (
        <>
        <section className={`${styles.AboutHeroContainer}`}>
        <Container className={`${styles.maxContainer} mx-auto`}>
            <Row className="align-items-center justify-content-center">
                <Col xs={12}>
                <Heading
                text="Building Brands"
                as ="h1"
                className = {`${styles.heroHeading}`}
                />
                </Col>
                  <Col xs={12} className="d-flex align-items-start justify-content-end gap-5">
                   <img src={AboutVector} alt="vector_image" className={`${styles.vectorImage} img-fluid d-none d-sm-block`}/>
                <Heading
                text="Shaping Tomorrow"
                className = {`${styles.heroHeading}`}
                />
                </Col>
            </Row>
        </Container>
                </section>
        </>
    )
}

export default AboutHero;