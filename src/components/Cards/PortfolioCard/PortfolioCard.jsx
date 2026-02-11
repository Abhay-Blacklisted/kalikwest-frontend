import styles from "./PortfolioCard.module.scss";
import { useState } from "react";

const PortfolioCard = ({
    image,
    text = [],
    description=""
    }) => {

   const [loaded, setLoaded] = useState(false);
    return (
        <>
        <div className={`${styles.portfolioCard} position-relative rounded-4`}>
            <img src={image}
             alt={text.join(" | ")}
            className={`rounded-4 img-fluid w-100 ${styles.portfolioImage} ${loaded ? styles.loaded : ""}`}
            onLoad={() => setLoaded(true)}
            />
            <div className={`${styles.overlayContainer} rounded-4`}> 
                <div className={`${styles.titlesContainer} d-flex justify-content-end`} > 
            {text.map((title,index) => (
             <span className={`${styles.portfolioTitle} text-center`} key={index}> {title} </span>
            ))}
           </div>

           {description && (<p className={`primary-description text-white ${styles.portfolioDescription}`}> {description} </p>)}
           </div>
        </div>
        </>
    )
}

export default PortfolioCard;