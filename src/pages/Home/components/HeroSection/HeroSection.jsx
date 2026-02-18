import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import Button from "@/components/UI/Button/Button";
import styles from "./HeroSection.module.scss"
import vectorLeft from "@/assets/images/vector/heroVectorLeft.svg";
import vectorRight from "@/assets/images/vector/heroVectorRight.svg";

const HeroSection = ({headerData}) => {
  if (!headerData) return null;
  return (
    <>
    <section className={`${styles.heroSection}`}>
      <Container>
        <Row>
          <Col xs={12}>
           <div className={`${styles.heroSectionContent} position-relative`} >
              <SectionHeader
                {...headerData}
                className="homeSectionHeader"
                headingAs="h1"
                showSubHeadingIcon={false}
                headingClassName={styles.heroHeading}
               />

          <div className={`${styles.dualButtons} d-flex gap-4 justify-content-center mt-4 flex-wrap`}>
            <Button to="/services" variant="primary"> Explore Services </Button>
            <Button to="/contact-us" variant="outline"> Get A Quote </Button>
          </div>
               <div className={`${styles.leftVectorContainer} position-absolute`}>
       <img src={vectorLeft} alt="vector"  fetchpriority="high"/>
          </div>
            
         <div className={`${styles.rightVectorContainer} position-absolute`}>
       <img src={vectorRight} alt="vector"  fetchpriority="high"/>
          </div>
          </div>

          </Col>      
        </Row>
      </Container>
    </section>
    </>
  )
}

export default HeroSection;