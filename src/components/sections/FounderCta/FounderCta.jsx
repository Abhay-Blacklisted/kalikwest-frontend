import { Container, Row, Col } from "react-bootstrap";
import styles from "./FounderCta.module.scss";
import Description from "@/components//UI/Description/Description";


const FounderCta = ({
    text,
    image,
    quoteImage,
    title,
    description
}) => {
    return (
        <Container>
            <div className={`${styles.founderSection}`}>
            <Row className="align-items-center">
                <Col xs={12} md={6} lg={4} className={`${styles.founderImage}`}>
                <img src={image} alt={title} className="img-fluid object-fit-cover w-100"/> 
                </Col>

                  <Col xs={12} md={6} lg={8}>
                    <div className={styles.founderCta}>
                <div className={styles.founderQuote}>
                    <img src={quoteImage} alt={title} loading="lazy" className="img-fluid mb-3"/>                     
                    <Description text={text} align="left" className="text-white"/>
                </div>

                <div className={`${styles.founderDetail} d-flex flex-column align-items-start mt-4 mb-0`}>
                  
                  <h4> {title} </h4> 
                   <p className="primary-description text-white mb-0"> {description} </p> 
                </div>
            </div>
                </Col>

            </Row>
             </div>
        </Container>
    )
}

export default FounderCta;