import { Container, Row, Col } from "react-bootstrap";
import styles from "./ServiceCTA.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import Button from "@/components/UI/Button/Button";

const ServiceCta = () => {
    return (
        <>
     
            <Container>
                   <div className={`${styles.ServicesCtaMain}`}>
                <Row>
                    <Col xs={12} className={`${styles.servicesContainer}`}>
                    <div className="ctaContent">
                    <Heading
                     text="We deliver on time, with work that holds its value"
                     className="text-white text-center"/>
                     <Description
                     text="Our team supports brands across all stages, from building identity to scaling performance. Every project is handled with discipline, clarity, and a commitment to results that last."
                     className="text-white"/>
                        <div className="buttonContainer d-flex justify-content-center">
                        <Button to = "/contact-us" variant="primary"> Start A Project </Button>
                        </div>
                    </div>
                    </Col>
                </Row>
                     </div>
            </Container>
   
        </>
    )
}

export default ServiceCta;