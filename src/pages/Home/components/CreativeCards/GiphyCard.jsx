import styles from "./CreativeCardsSection.module.scss"
import Heading from "@/components/UI/Heading/Heading";
const GiphyCard = ({
    logo,
    title,
    items = []
}) => {
    return (
        <>
        <div className={styles.giphyCard}>
         <div className={`${styles.cardHead} align-items-center d-flex gap-3`}>
            <img src={logo} alt="giphy" className="img-fluid"/>
            <Heading text={title}/>
         </div>
         <div className={styles.giphyItemsContainer}>
            {items.map((item, index) => (
                <div className={styles.giphyItems} key={index}>
                    <img src={item.image} alt="Giphy Sticker" loading="lazy" className={`${styles.giphyImage} img-fluid`} />
                    </div>
            ))}
         </div>
        </div>
        </>
    )
}

export default GiphyCard;