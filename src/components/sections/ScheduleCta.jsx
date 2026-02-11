import Heading from "@/components/UI/Heading/Heading";
import Description from "@/components/UI/Description/Description";
import styles from "./ScheduleCta.module.scss"
import { Container } from "react-bootstrap";


const ScheduleCta = ({
    title,
    secondaryTitle,
    description,
    image,
    imageAlt = "",

}) => {
    return (
        <>
            <Container>
             <div className={styles.scheduleCtaParent}>
            <div className={styles.scheduledCtaChild}>
        {title && <Heading align="center" text = {title}/>}
         {secondaryTitle && <Heading align="center" text = {secondaryTitle}/>}
        {description && <Description text= {description}/>}
        {image && (
        <img src={image} alt= {imageAlt} className="d-block mx-auto mt-4"/>)}
        </div>
           </div>
        </Container>
        </>
    )
}

export default ScheduleCta;