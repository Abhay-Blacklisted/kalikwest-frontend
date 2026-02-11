import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import Button from "@/components/UI/Button/Button";
import Heading from "@/components//UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import vector from "@/assets/icons/marqueeVector.svg"
import styles from "./WhyBrandsChoose.module.scss"


const WhyBrandChoose = ({
    subHeading,
    heading,
    description,
    image,
    buttonText,
    buttonLink,
    list = [],
}) => {
    return (
        <section className={styles.whyBrandsChooseSection}>
        <Container>
            <Row className="align-items-center gy-5">
                <Col xs={12} lg={6}>
                <img src={image} alt="brandImage" className={`${styles.brandImage} img-fluid object-fit-contain`} style={{aspectRatio:3/4}}/>
                </Col>

                 <Col xs={12} lg={6}>
                 <SectionHeader
                 subHeading={subHeading} subHeadingClassName="ms-0"
                 heading={heading}
                 description={description}
                 align="left"
                 />
                 <div className={`${styles.listContainer}`}>
                 {list.map((item,index) => (
                    <div className="d-flex justify-content-start align-items-start gap-3" key={index}>
                        <img src={vector} alt="vectorIcon" className={`${styles.stars} img-fluid position-relative`}/>
                        <div className="listItems">
                         <Heading text={item.title} align="left" className={styles.listHeading}/>
                         <Description text={item.description} align="left" className={styles.listDescription}/>
                        </div>
                    </div>
                 ))}
                 </div>
                 <Button to={buttonLink}> {buttonText} </Button>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default WhyBrandChoose;