import { Container, Row, Col } from "react-bootstrap";
import FeatureCard from "@/components/Cards/FeatureCard/FeatureCard";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";

const FeaturesSection = ({
    features = [],
    subHeading,
    heading,
    description
}) => {
    return (
    
        <Container>
            <SectionHeader
             className="m-60" 
             subHeading = {subHeading}
             heading = {heading}
             description = {description}
            />
            <Row className="gy-4 mobileSlider">
                {features.map((Feature, index) => (
                    <Col xs={12} lg={4} key ={index} className="sliderCol d-flex">
                 <FeatureCard
                 image = {Feature.image}
                 title = {Feature.title}
                 description = {Feature.description}
                 />
                 </Col>
                ))}
            </Row>
        </Container>

    )
}

export default FeaturesSection;