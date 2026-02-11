import Description from "@/components//UI/Description/Description";
import styles from "./FeatureCard.module.scss";

const FeatureCard = ({
    title,
    description,
    image
}) => {
    return (
        <>
        <div className={`${styles.FeatureCard} d-flex flex-column align-items-center`}>
            <img src={image} alt={title} className={`img-fluid object-fit-contain ${styles.featureIcon}`}/>
            <h4 className={`${styles.FeatureTitle} flex-grow-1 text-center`}> {title} </h4> 
            <Description text={description} align="center"  className="FeatureDescription mt-auto"> </Description>
        </div>
        </>
    )
}

export default FeatureCard;