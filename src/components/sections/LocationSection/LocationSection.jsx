import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import map from "@/assets/images/map/map.webp"
import styles from "./LocationSection.module.scss"


const LocationSection = ({
    subHeading,
    heading,
    description
}) => {
    return (
        <>
        <section className={`${styles.locationSection}`}>
            <Container>
                <Row className={`align-items-center`}>
                    <Col xs={12} lg={6} className={`${styles.mapLeftContent}`}>            
                 <SectionHeader
                      className={`${styles.LocationSectionHeader}`}
                      subHeading={subHeading} subHeadingClassName="ms-0"
                      heading={heading}
                      description={description}
                      align="start"
                        />
                    </Col>
                      <Col xs={12} lg={6}>
                       <div className={`mapImagContainer`}>
                        <img src={map} alt="map" className={`image-fluid w-100 object-fit-cover`} style={{aspectRatio: 16/9}}/>
                       </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default LocationSection;