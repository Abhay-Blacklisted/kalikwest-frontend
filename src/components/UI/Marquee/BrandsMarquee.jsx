import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.scss";
import {  useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useMemo } from "react";

const MarqueeSection = ({
  heading = "",
  images = [],
  loading = false,
  speed = 50,
  error = null
}) => {

 
const showSkeletons = loading && !images.length;

  const getRepeats = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth < 768) return 2; 
    return Math.ceil(window.innerWidth / 150);
  };

  const [minRepeats] = useState(getRepeats);

  const repeatedImages = useMemo(() => {
    return Array(minRepeats).fill(images).flat();
  }, [images, minRepeats]);


  return (
    <section className={`${styles.MarqueeSection} overflow-hidden`}>
      <Container fluid>
        {heading && (
          <h5 className={`${styles.MarqueeHeading} text-center text-uppercase`}>
            {heading}
          </h5>
        )}

        <div className={`${styles.marqueeWrapper} d-flex overflow-hidden`}>
          {showSkeletons ? (
            <div className={`${styles.marqueeSkeleton} d-flex overflow-hidden`}>
              {[...Array(22)].map((_, index) => (
                <div key={index} className={`${styles.marqueeSkeletonItem}`}>
                  <Skeleton
                    width={200}
                    height={100}
                    borderRadius={14}
                    baseColor="#e9e8ee"
                    highlightColor="#f4f3f8"
                    style={{ opacity: 0.7 }}
                  />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center w-100 primary-description d-flex justify-content-center">
              Oops! Brands couldn’t load. Please try again later.
            </div>
          ) : (
            <Marquee
              speed={speed}
              gradient={false}
              pauseOnHover={true}
                autoFill={false}   // 🔥 ADD THIS
              className={`${styles.marqueeTrack}`}
            >
              {repeatedImages.map((item, index) => (
                <div
                  className={`${styles.imageItem} d-flex align-items-center justify-content-center`}
                  key={`${item.id}-${index}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt ?? `image-${item.id}`}
                    className={`${styles.logo}`}
                      loading="eager"
                    fetchpriority="high" 
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

export default MarqueeSection;
