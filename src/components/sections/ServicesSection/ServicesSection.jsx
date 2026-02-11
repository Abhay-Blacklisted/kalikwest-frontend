import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import Button from "@/components/UI/Button/Button";
import Skeleton from "react-loading-skeleton";

const ServicesSection = ({
  services = [],
  showButton = false,
  buttonText = "Explore All Services",
  buttonLink = "/services",
  limit,
  loading = false,
  error = null
   }) => {

  const SKELETON_COUNT = limit ?? 9;

  const itemsCount = loading
    ? SKELETON_COUNT
    : limit
      ? limit
      : services.length;


  return (
    
    <Container className="m-60">
      <Row className="gy-4 mobileSlider">
        {error ? (
                  <div className="text-center text-red w-100 d-flex justify-content-center primary-description">
                    Oops! Services couldn’t load. Please try again later.
                  </div>
                ) : (
      Array.from({length: itemsCount}).map((_,index) => {
        const service = services[index];
        return (
        <Col xs={12} md={6} lg={4} key={index} className="sliderCol ">
                {loading ? (
                  <Skeleton
                    height={554}
                    borderRadius={14}
                    baseColor="#e9e8ee"
                    highlightColor="#f4f3f8"
                    style={{ width: "100%", opacity: 0.7 }}
                  />
                )  : service ? (
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                  />
                ) : null}

        </Col>
        )
   }))}
      </Row>
      { showButton && (
      <div className="buttonContainer d-flex justify-content-center" style={{minHeight: 52}}>
     <Button to = {buttonLink} variant="primary"> {buttonText} </Button>
     </div>
      )}
    </Container>
  );
};

export default ServicesSection;
