import Heading from "@/components/UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import styles from "./MarketingCard.module.scss";


const MarketingCard = ({
    image,
    title,
    description
}) => {
    return (
        <>
          <div className={`${styles.marketingCard} d-flex flex-column flex-grow-1`}>
            <img src={image} alt="image" className={`${styles.image} img-fluid`}/>
            <Heading text={title} className={`${styles.marketingCardHeading} mt-60 mb-4`} align="left"/>
            <Description text={description} className={`${styles.marketingCardDesc} my-4 mt-auto`} align="left"/>
           </div>
        </>
    )
}

export default MarketingCard;