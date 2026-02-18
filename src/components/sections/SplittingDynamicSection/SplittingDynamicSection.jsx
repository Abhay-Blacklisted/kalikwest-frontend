import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import FloatingCards from "@/components/Cards/FloatingCards/FloatingCards";
import styles from "./SplittingDynamicSection.module.scss";


const SplittingDynamicSection = ({
    children,
    floatingItems,
    floatingStars,
    reverse = false,
    subHeading,
    subHeadingClassName,
    heading,
    headingClassName,
    description,
    align
}) => {
    return (
        <>
        <section className={styles.splittingDynamicSection}>
            <Container>

                <SectionHeader
                subHeading={subHeading} subHeadingClassName={subHeadingClassName}
                heading={heading} headingClassName={headingClassName}
                description={description}
                align={align}
                />
                <Row className={`${styles.rowCustom} mt-sm-0 m-60 gy-5 ${reverse ? "flex-row-reverse && align-items-center" : ''}`}>
                    <Col xs={12}  lg={6} xl={7} xxl={8}>
                    {children}
                    </Col>
                    <Col xs={12}  lg={6} xl={5} xxl={4}>
                    <FloatingCards items={floatingItems} stars={floatingStars}/>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default SplittingDynamicSection;