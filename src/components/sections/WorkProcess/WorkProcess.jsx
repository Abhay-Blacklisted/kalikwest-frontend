import { Container, Row, Col } from "react-bootstrap";
import Description from "@/components/UI/Description/Description";
import styles from "./WorkProcess.module.scss";
import Heading from "@/components//UI/Heading/Heading.jsx";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";

const WorkProcess = ({
    subHeading,
    heading,
    description,
    steps = [],
    arrowOne,
    arrowTwo,
}) => {

    return (
        <section className={`${styles.workProcessSection} position-relative`}>
        <Container>
                    <SectionHeader
                    subHeading = {subHeading}
                    description  = {description}
                    heading = {heading}
                    className={styles.workProcessHeader}
                    />

            <Row  className="position-relative mobileSlider gy-5 justify-content-start justify-content-md-center">
                {steps.map((item,index) => (
                <Col xs={12} sm={6} lg={4} key={index} className="d-flex flex-column align-items-center gap-4 sliderCol">
                 {item.icon && (
                <div className= "position-relative">
                  <img src={item.icon} alt={item.title} className={styles.icon} />
                     <span className={`${styles.stepNumber} position-absolute`}>
                {item.step}  
              </span>
                </div>
              )}
              
              <Heading text={item.title} className={styles.title}/>             
                <Description text={item.text} align="left" className={styles.description}/>
                </Col>
                ))}


           {(arrowOne || arrowTwo) && (
          <div className={`${styles.arrows} d-none d-xl-block m-0`} aria-hidden>
            {arrowOne && <img src={arrowOne} alt="arrow" />}
            {arrowTwo && <img src={arrowTwo} alt="arrow" />}
          </div>
        )}

            </Row>
                                       
        </Container>
        </section>
    )
}

export default WorkProcess;