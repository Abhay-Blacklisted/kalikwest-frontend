import styles from "./TestimonialCard.module.scss"

const TestimonialCard = ({
    text,
    image,
    userTitle,
    designation
}) => {
    return (
        <>
        <section className={`${styles.testimonialCardParent} d-flex flex-column`}>
                    <div className={`${styles.testimonialCard} flex-grow-1`}>
                        <h4 className="sub-heading text-center"> {text} </h4>
                    </div>
                    <div className={`${styles.testimonialCardBottom} d-flex flex-column align-items-center`}>
                        <img src={image} alt={userTitle} className={`${styles.authorImage} text-center mb-2 img-fluid`}/>
                        <h5 className="sub-heading text-center mb-0"> {userTitle}</h5>
                        <span className="primary-description text-center"> {designation} </span>
                    </div>
        </section>
        
        </>
    )
}

export default TestimonialCard;