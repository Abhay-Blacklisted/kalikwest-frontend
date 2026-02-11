import Heading from "@/components/UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import styles from "./ResultCard.module.scss";

const ResultCard = ({
    title,
    description,
    isEven = false
}) => {
    return (
        <>
        <div className={`${styles.ResultCard} ${isEven ? styles.even : styles.odd}`}>
            <div className={`${styles.cardHeading}`}>
                <Heading text={title} className={`${styles.cardHeadingText}`}/>
            </div>
              <div className={`${styles.cardDescription}`}>
                <Description text={description} align="left"/>
            </div>
        </div>
        </>
    )
}

export default ResultCard;