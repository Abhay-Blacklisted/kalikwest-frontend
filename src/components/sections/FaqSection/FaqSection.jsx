import { Container, Row, Col, Accordion, AccordionItem, AccordionHeader, AccordionBody } from "react-bootstrap";
import styles from "./FaqSection.module.scss";
import Button from "@/components/UI/Button/Button";
import Skeleton from "react-loading-skeleton";


const FaqSection = ({
    image,
    imageAlt="",
    title,
    description,
    linkText,
    buttonText = "",
    buttonLink = "",
    faqs = [],
    error = null,
    loading = false

}) => {

   const showSkeletons = loading && faqs.length === 0;


    return (
        <Container className={`${styles.faqParent} m-60`}>
         <Row className="gy-5">
            <Col xs={12} lg={4}>
            <div className={`${styles.faqLeftContainer} d-flex flex-column align-items-center gap-3`}>
                <img src={image} alt={imageAlt} className="img-fluid" loading="lazy"/>
                <h4 className="text-center"> {title} </h4>
                <Button to={buttonLink}> {buttonText} </Button>
                <span className={`text-center text-white ${styles.emailText}`}> {description} <a href={`mailto:${linkText}`} className="text-decoration-none"> {linkText} </a>  </span>
            </div>           
            </Col>

            {showSkeletons ? (
                <>        
            <Col xs={12} lg={8}>
            <Skeleton
          height={540}
          borderRadius={14}
          baseColor="#e9e8ee"
          highlightColor="#f4f3f8"
          style={{ width: "100%", opacity: 0.7 }}
          />
            </Col>
            </>
             ) : (
            <Col xs={12} lg={8} className="ps-lg-5">
                {error ? (
                <div className="text-center text-red w-100 d-flex justify-content-center primary-description">
                    Oops! FAQ'S couldn’t load. Please try again later.
                </div>
                ) : (
            <Accordion>
                {faqs.map((faq,index) => (
                    <AccordionItem eventKey={index.toString()} key={faq.id}>
                    <AccordionHeader> {faq.question} </AccordionHeader>
                    <AccordionBody> {faq.answer} </AccordionBody>
                    </AccordionItem>
                ))}
            </Accordion>
            )}
            </Col>
            )}
         </Row>
        </Container>
    )
}

export default FaqSection;