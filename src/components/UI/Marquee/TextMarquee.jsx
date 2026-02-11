import Marquee from "react-fast-marquee";
import styles from "./TextMarquee.module.scss";
import { useMemo } from "react";

const TextMarquee = ({
  texts = [],
  icon,
  speed = 60,
  textTransform = "capitalize" 
}) => {

  if (!texts.length) return null;

  const repeatedTexts = useMemo( () => Array(12).fill(texts).flat(), [texts] ) 

  return (
    <div className={styles.textMarqueeContainer}>
      <Marquee
        speed={speed}
        pauseOnHover
        gradient={false}
        className={styles.marqueeTrack}
      >
        {repeatedTexts.map((text, index) => (
          <div
            key={`${text}-${index}`}
            className="d-flex align-items-center"
          >
            <span className={`${styles.text}`} style={{ textTransform }}>{text}</span>

            {icon && (
              <img
                src={icon}
                alt=""
                className={styles.icon}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TextMarquee;
