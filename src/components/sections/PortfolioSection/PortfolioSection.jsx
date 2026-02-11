import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "@/components/Cards/PortfolioCard/PortfolioCard";
import Button from "@/components/UI/Button/Button";
import Skeleton from "react-loading-skeleton";
import styles from "./PortfolioSection.module.scss";

const PortfolioSection = ({
  portfolios = [],
  showButton = false,
  buttonText = "Explore All Projects",
  buttonLink = "/portfolio",
  loading = false,
  limit = 4,
  error = null,
}) => {
  return (
    <Container className={`${styles.portfolioSectionContainer} m-60`}>
      <Row className="gy-4">
        {error ? (
                <div className="text-center text-red primary-description">
                  Oops! Portfolios couldn’t load.
                </div>
              ) : (
        Array.from({ length: limit }).map((_, index) => {
          const portfolio = portfolios[index];
          return (
            <Col xs={12} lg={6} key={index}>
              {loading ? (
                <Skeleton
                  height={360}
                  borderRadius={14}
                  baseColor="#e9e8ee"
                  highlightColor="#f4f3f8"
                  style={{ width: "100%", opacity: 0.7 }}
                />
              ) : portfolio ? (
                <PortfolioCard
                  image={portfolio.image}
                  text={portfolio.text}
                  description={portfolio.description}
                />
              ) : null}
            </Col>
          );
               })
        )}
            
      </Row>

      {showButton && (
        <div
          className="buttonContainer d-flex justify-content-center"
          style={{ minHeight: 52 }}
        >
          <Button to={buttonLink} variant="primary">
            {buttonText}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default PortfolioSection;
