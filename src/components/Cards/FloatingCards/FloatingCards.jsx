import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./FloatingCards.module.scss";

gsap.registerPlugin(ScrollTrigger);

const FloatingCards = ({
  items = [],
  stars = []
}) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(`.${styles.item}`, {
        yPercent: -150,
        opacity: 0,
      });

      gsap.set(`.${styles.star}`, {
        yPercent: -120,
        opacity: 0,
        scale: 0.6,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
          // toggleActions: "play reverse play reverse",
        },
      })
        .to(`.${styles.item}`, {
          yPercent: 0,
          opacity: 1,
          stagger: {
            each: 0.15,
            from: "end",
          },
          ease: "power3.out",
        })
        .to(
          `.${styles.star}`,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
             stagger: {
            each: 0.15,
            from: "end",
          },
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    },
    { scope: cardRef }
  );

  return (
    <div className={styles.floatingCard} ref={cardRef}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.item} ${styles[item.color]} position-absolute`}
        >
          {item.text}
        </div>
      ))}

      {stars.map((star, i) => (
        <img
          key={i}
          src={star.src}
          alt=""
          className={`${styles.star} ${styles[star.className]} position-absolute`}
          aria-hidden
        />
      ))}
    </div>
  );
};

export default FloatingCards;
