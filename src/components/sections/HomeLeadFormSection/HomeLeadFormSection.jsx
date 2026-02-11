import { Container,Row,Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import HomeContactForms from "@/components/forms/HomeContactForm/HomeContactForms";
import styles from "./HomeLeadFormSection.module.scss"


const HomeLeadFormSection = ({
    heading,
    description
}) => {
    return (
           <section className={styles.homeLeadFormSection}>
            <Container>
                <Row className="gy-5">
                    <Col xs={12} lg={6}>
                    <SectionHeader
                    heading={heading} 
                    description={description}
                    align="left"
                    className={styles.customSectionHeader}
                    />
                    
                    </Col>


                    <Col xs={12} lg={6}>
                    <HomeContactForms/>
                    </Col>
                </Row>
            </Container>
           </section>
    )
}

export default HomeLeadFormSection;