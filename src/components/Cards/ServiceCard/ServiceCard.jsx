import Description from "@/components/UI/Description/Description";
import styles from "./ServiceCard.module.scss";
import { useState } from "react";

const ServiceCard = ({title, description, image}) => {
  const [loaded,setLoaded] = useState(false);
    return (
        <>
              <div className={`${styles.serviceCard} d-flex flex-column h-100 overflow-hidden`}>
                <h4 className={`${styles.serviceTitle} sub-heading`}> {title} </h4>
                <Description text={description} align="left" className={`${styles.serviceDescription} mb-0 flex-grow-1 pe-2`}/>
                <img src={image} alt={title}   loading="eager" className={`${loaded ? styles.loaded : "" } img-fluid  ${styles.serviceImage} object-fit-cover`} onLoad={() => setLoaded(true)}/>          
              </div>               
        </>
    )
}

export default ServiceCard;