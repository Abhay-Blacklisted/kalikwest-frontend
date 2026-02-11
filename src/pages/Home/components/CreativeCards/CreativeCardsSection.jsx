import { Container, Row, Col } from "react-bootstrap";
import GiphyCard from "./GiphyCard";
import SnapchatCard from "./SnapchatCard";
import snapchatLogo from "@/assets/images/creativeCards/snapchat.svg";
import giphyLogo from "@/assets/images/creativeCards/giphy.svg";
import styles from "./CreativeCardsSection.module.scss";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapSnapchatCards, mapGiphyCards } from "@/mapper/homeCreativeCards.mapper";
import { useMemo } from "react";
import CreativeCardsSkeleton from "./CreativeCardsSkeleton";


const CreativeCardsSection = () => {
    const snap = useWebsiteContent({ page: "home", sectionId: 6 });
    const giphy = useWebsiteContent({ page: "home", sectionId: 7 });
    const snapchatData = useMemo(() => mapSnapchatCards(snap.data?.[0]), [snap.data])
    const giphyData = useMemo(() => mapGiphyCards(giphy.data?.[0], [giphy.data]));
    const error = snap.error || giphy.error;
    const isInitialLoading = snap.isLoading || giphy.isLoading;

     if (isInitialLoading) return <CreativeCardsSkeleton />;

  if (error) {
    return (
      <section className={styles.creativeCardsSection}>
        <Container>
          <div className="text-center text-white primary-description">
            Oops! Creative content couldn’t load.
          </div>
        </Container>
      </section>
    );
  }


    return (
        <section className={styles.creativeCardsSection}>
        <Container>
            <Row className={`${styles.rowSpace} g-5 align-items-stretch`}>
                <Col xs={12} lg={6}>
                <SnapchatCard
                title="Snapchat Lenses"
                logo={snapchatLogo}
                {...snapchatData}
                />
                </Col>
                 <Col xs={12} lg={6} className="d-flex">
                <GiphyCard
                title="Giphy Stickers"
                logo={giphyLogo}
                {...giphyData}
                />
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default CreativeCardsSection;