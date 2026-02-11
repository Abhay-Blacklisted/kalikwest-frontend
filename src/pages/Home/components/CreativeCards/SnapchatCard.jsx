import styles from "./CreativeCardsSection.module.scss"
import Heading from "@/components/UI/Heading/Heading";

const SnapchatCard = ({
    logo,
    title,
    items = []
}) => {
    return (
        <>
        <div className={styles.snapchatCard}>
         <div className={`${styles.cardHead} d-flex align-items-center gap-3`}>
            <img src={logo} alt="snapchat" className="img-fluid"/>
            <Heading text={title}/>
         </div>
                <div className={`${styles.snapchatItems} d-flex gap-4`}>
                {items.map((item,index) => (
                <div className={`${index % 2 !== 0 ? styles.evenCard : ""} snapItems d-flex flex-column align-items-center gap-3`}  key={index}>
                    <img src={item.image} loading="lazy"  alt="snap-image" className={`img-fluid object-fit-cover`} style={{ aspectRatio: 3/6, borderRadius: 14 }} />
                    <span className="primary-description text-center">{item.title}</span>
                </div>
                ))}
                </div>
        </div>
        </>
    )
}

export default SnapchatCard;