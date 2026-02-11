import ResultCard from "@/components/Cards/ResultCard/ResultCard";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import Button from "@/components/UI/Button/Button";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./ResultSection.module.scss"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ResultSection = ({
    results =[],
    subHeading,
    heading, 
    description,
    buttonText,
    buttonLink
}) => {

    const ResultRef = useRef(null);

useGSAP(
  () => {
    gsap.set(`.${styles.resultCardAnimation}`, {
      yPercent: -150,
      opacity: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ResultRef.current,
        start: "top 50%",
      },
    })
    .to(`.${styles.resultCardAnimation}`, {
      yPercent: 0,
      opacity: 1,
      stagger: {
        each: 0.2,
       from: "start"
      },
      ease: "expo.out",
    });
  },
  { scope: ResultRef }
);



    return (
        <>
        <section className={`${styles.ResultSection}`}>
            <Container>
                <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center">
                     <SectionHeader
                     heading={heading}
                     subHeading={subHeading} subHeadingClassName="ms-0"
                     description={description}
                     align="start"
                     />
                     <Button 
                     to={buttonLink}>
                     {buttonText} 
                     </Button>
               </div>
                       <div className="m-60"  ref={ResultRef}>
               <Row className="mobileSlider">
                {results.map((item,index) => (
                <Col xs={12} sm={6} lg={3} key={index} className={`${styles.resultCardAnimation} sliderCol`}>
                    <ResultCard
                    title={item.title}
                    description={item.description}
                    isEven = {index % 2 !== 0}
                    />
                </Col>
                ))}
        
               </Row>
                    </div>
            </Container>
        </section>
        </>
    )
}

export default ResultSection;