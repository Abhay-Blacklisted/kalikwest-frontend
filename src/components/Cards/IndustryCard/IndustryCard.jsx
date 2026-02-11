import styles from "./IndustryCard.module.scss";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";


const IndustryCard = ({
    image,
    title,
    description,
    subTitle,
    clientImages = []
}) => {

    const [loaded, setLoaded] = useState(false)
    return (
        <>
        <section className={`${styles.industryContainer} ${loaded ? styles.loaded : styles.loading}`}>
            <Row className="align-items-center">
                <Col xs={12} lg={6} xl={7} xxl={8}>
                <div className={`${styles.leftImage}`}>
                    <img src={image} className={`img-fluid object-fit-cover`} onLoad={() => setLoaded(true)}/>
                </div>
                </Col>

                 <Col xs={12} lg={6} xl={5} xxl={4}>
                 <div className={`${styles.topContainer} m-60`}>
                    <h4 className="sub-heading"> {title} </h4>
                    <p className={`${styles.primaryDescription} primary-description mb-0`}> {description} </p>
                 </div>

                 <div className="bottomContainer">
                    <h6 className="subTitle"> {subTitle} </h6>
                         <div className={`${styles.imageContainer} d-flex gap-2 flex-wrap mt-3`}>    
                         {clientImages.map((item,index) => (                                 
                        <img src={item} alt="" key={index} className={`${styles.clientImg} img-fluid object-fit-contain`} onLoad={() => setLoaded(true)}/>            
                    ))}
                   </div> 
                 </div>
                </Col>

            </Row>
        </section>
        </>
    )
}

export default IndustryCard;