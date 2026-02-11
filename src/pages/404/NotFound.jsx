import { Container } from "react-bootstrap";
import styles from "./NotFound.module.scss"
import Heading from "@/components/UI/Heading/Heading";
import Button from "@/components/UI/Button/Button";
import image from "@/assets/images/404/404.svg";
import vectorLeft from "@/assets/images/404/leftVector.svg";
import vectorRight from "@/assets/images/404/rightVector.svg";


const NotFound = () => {
    return (
        <>
        <section className={`${styles.notFoundSection} position-relative`}>
            <Container fluid className="d-flex flex-column align-items-center">
                <Heading as="h1"
                text="Page Not found"
                align="center"
                className={styles.heading}
                 />
                 <img src={image} className={`${styles.image} img-fluid mt-5 mb-4 `}/>
                 <Heading as ="h2"
                 text="Error Occurred"
                 align="center"
                 />
                <Button to="/" className="mt-2">
                Back To Home Page
                </Button>

                <div className="vectorImages">
                <img src={vectorLeft} alt="vector" className={`${styles.leftVectorImage} img-fluid position-absolute top-0 d-none d-xl-block`}/>
                <img src={vectorRight} alt="vector" className={`${styles.rightVectorImage} img-fluid position-absolute top-50 d-none d-xl-block`}/>
                </div>
            </Container>
        </section>
        </>
    )
}

export default NotFound;