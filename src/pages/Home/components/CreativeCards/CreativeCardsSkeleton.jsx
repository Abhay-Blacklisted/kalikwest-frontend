import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import styles from "./CreativeCardsSection.module.scss";

const CreativeCardsSkeleton = () => {
  return (
    <section className={styles.creativeCardsSection}>
      <Container>
        <Row className={`${styles.rowSpace} g-5`}>
          {/* Snapchat skeleton */}
          <Col xs={12} lg={6}>
            <Skeleton 
            height={643}
            borderRadius={14}
            baseColor="#e9e8ee"
            highlightColor="#f4f3f8"
           />
          </Col>

          {/* Giphy skeleton */}
          <Col xs={12} lg={6}>
              <Skeleton 
            height={643}
            borderRadius={14}
            baseColor="#e9e8ee"
            highlightColor="#f4f3f8"
           />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreativeCardsSkeleton;
