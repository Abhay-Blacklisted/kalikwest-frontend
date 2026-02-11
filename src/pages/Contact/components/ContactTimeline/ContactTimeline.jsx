import { Container, Row, Col } from "react-bootstrap";
import styles from "./ContactTimeline.module.scss";
import Heading from "@/components/UI/Heading/Heading";
import timelineImage from "@/assets/images/contact/timelineRight.webp"


const ContactTimeline = () => {
    const timelinePoints = [
        "Projects are initiated promptly once scope and priorities are aligned",
        "Experts define the vision. Execution follows with precision",
        "Initial concepts and wireframes are shared promptly to align on direction"
    ]
    return (
        <>
        <section className={`${styles.contactTimelineSection} position-relative`}>
            <Container fluid>
                <Row className="align-items-end">
                    <Col xs={12} lg={7} xl={8}>
                    <div className={`${styles.leftContent}`}>
                      <Heading
                       text="Reliable timelines. Real follow-through"
                       text-left
                       className={`${styles.leftHeading} text-white`}/>

                        <ol className={`${styles.timelineList} m-60 mb-0 list-unstyled`}>
                        {timelinePoints.map((point, index) => (
                            <li key={index} className={`${styles.point} d-flex`}>
                            
                            <span className={styles.pointNumber}>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className={styles.pointText}>
                                {point}
                            </span>

                            </li>
                        ))}
                        </ol>
                         </div>
                    </Col>

                       <Col xs={12} lg={5} xl={4}>
                    <div className={`${styles.rightImage} text-right`}>
                        <img src={timelineImage} alt="" className="img-fluid h-100 w-100"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default ContactTimeline;