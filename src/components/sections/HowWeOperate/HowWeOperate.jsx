import { Container, Row, Col } from "react-bootstrap";
import Heading from "@/components/UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import styles from "./HowWeOperate.module.scss";


const HowWeOperate = ({
    operateCards = []
}) => {
    return (
        <section className={`${styles.howWeOperateSection} m-60`}>
        <Container>
            <Row className="mobileSlider gy-4">
                {operateCards.map((item,index) => (
                <Col xs={12} sm={6} lg={3} key={index} className="sliderCol">
                       <div className={`${styles.operateCards} d-flex flex-column gap-4`}>
                    {item.number && (
                        <Description text = {item.number} align="left" className={`${styles.operateDescription} mb-0`}/> 
                    )}
                    {item.icon && (
                        <img src={item.icon} alt={item.title} className="img-fluid"></img>
                    )}
                    {item.title && (
                        <Heading text={item.title} align="left" className={`${styles.operateHeading} mb-0`}/>
                    )}
                    {item.description && (
                        <Description text = {item.description} align="left" className={`${styles.operateDescription} mb-0 mt-auto  flex-grow-1`}/>
                    )}
                         </div>
                </Col>
           
                    ))}
            </Row>
        </Container>
        </section>
    )
}

export default HowWeOperate;