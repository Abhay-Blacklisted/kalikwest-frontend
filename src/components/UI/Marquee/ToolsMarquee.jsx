import { Container } from "react-bootstrap";
import { useState, useMemo } from "react";
import Marquee from "react-fast-marquee";
import styles from "./ToolsMarquee.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import Skeleton from "react-loading-skeleton";

const ToolsMarqueeSection = ({
  subHeading,
  heading,
  description,
  images = [],
  loading = false,
  speed = 40, 
  error = null
}) => {

const showSkeletons = loading && images.length === 0;

  const getRepeats = () =>
    typeof window !== "undefined"
      ? Math.max(1, Math.ceil(window.innerWidth / 150))
      : 1;

  const [minRepeats] = useState(getRepeats);

  const repeatedImages = useMemo(() => {
    return Array(minRepeats).fill(images).flat();
  }, [images, minRepeats]);

  return (
    <section className={`${styles.MarqueeSection} `}>
      <Container fluid>

        {showSkeletons ? (
          <div className="text-center mb-40 overflow-hidden">
            <Skeleton width={220} height={46} />
            <Skeleton width={820} height={70} />
            <Skeleton width={820} height={24} />
          </div>
        ) : error ? (
            <div className="text-center text-red w-100 d-flex justify-content-center primary-description">
              Oops! Tools couldn’t load. Please try again later.
            </div>
          ):  (
          <SectionHeader
            subHeading={subHeading}
            heading={heading}
            description={description}
          />
        )}

        <div className={`${styles.marqueeWrapper} d-flex  m-60`}>
          {showSkeletons ? (
            <div className={`${styles.marqueeSkeleton} d-flex overflow-hidden`}>             
              {[...Array(16)].map((_, index) => (
                <div key={index} className={styles.marqueeSkeletonItem}>
                  <Skeleton width={100} height={100} borderRadius={14} />
                </div>
              ))}
            </div>
          ) : (
            <Marquee
              speed={speed}
              gradient
              gradientWidth={100}
              pauseOnHover
              className={styles.marqueeTrack}
            >
              {repeatedImages.map((item, index) => (
                <div
                  key={`tool-${item.id}-${Math.floor(index / images.length)}`}
                  className={`${styles.imageItem} d-flex align-items-center justify-content-center`}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    className={`img-fluid ${styles.logo}`}
                    onLoad={(e) => e.currentTarget.classList.add(styles.loaded)}
                   
                  />
                </div>
              ))}
            </Marquee>
          )}
        </div>

      </Container>
    </section>
  );
};

export default ToolsMarqueeSection;
