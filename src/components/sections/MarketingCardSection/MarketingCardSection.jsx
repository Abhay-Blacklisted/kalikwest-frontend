import Heading from "@/components/UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import { Container, Row, Col } from "react-bootstrap";
import MarketingCard from "@/components/Cards/Marketingcard/MarketingCard";
import styles from ".//MarketingCardSection.module.scss"


const MarketingCardSection = ({
    heading,
    title,
    cards = []
}) => {
    return (
        <section className={styles.marketingSectionMain}>
        <Container>         
           <div className={styles.marketingSectionHead}>
          <Row>
            <Col xs={12} lg={6}>
             <Heading text={heading} className={styles.mainHead}/>
            </Col>
             <Col xs={12} lg={6}>
             <Description text={title} align="end" className={styles.mainDesc}/>
             </Col>
             </Row>
            </div>
        <div className={styles.marketingCardsContainer}>
            <Row className="mobileSlider">            
            {cards.map((card, index) => (
               <Col xs={12} md={6} lg={4} key={index} className={`${styles.marketingCard} sliderCol`}>
                <MarketingCard
                title={card.title}
                image={card.image}
                description={card.description}
                />
                </Col>
                ))}
            </Row>
                          </div>

        </Container>            
        </section>
    )
}

export default MarketingCardSection;