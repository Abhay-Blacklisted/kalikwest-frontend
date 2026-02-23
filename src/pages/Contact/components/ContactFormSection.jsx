import ContactForm from "@/components/forms/ContactForm/ContactForm";
import styles from "./ContactFormSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import whiteInvertedLogo from "@/assets/icons/whiteInvertedLogo.svg";
import email from "@/assets/icons/email.svg";
import { mapContactDetail } from "@/mapper/contactMapper/contactDetail.mapper";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { useMemo } from "react";
import { CONTACT_FALLBACK } from "@/data/contactFallback.data";
import { stripHtml } from "@/utils/stripHtml";

const ContactFormSection = () => {

   const {data, isError} = useWebsiteContent({page: "Contact", sectionId: 1});


const mappedData = useMemo(() => {
  return mapContactDetail(data?.[0]) || CONTACT_FALLBACK;
}, [data]);

     if (!mappedData) return null;

    return (
        <section className={`${styles.contactMain}`}>
        <Container>
        <Row className="gy-4">
            <Col xs={12} lg={6}>
            <SectionHeader className={`${styles.contactSectionHeader}`}
            heading={mappedData.heading}
            subHeading="Contact Us" subHeadingIcon={whiteInvertedLogo}
            description={stripHtml(mappedData.description)}                
            />

            
            <div className={styles.contactIcons}>
              {mappedData.email && (
                <span className={`d-flex align-items-start ${styles.iconList} primary-description`}>
                  <img src={email} alt="email" />
                  <a
                    href={`mailto:${mappedData.email}`}
                    className="text-decoration-none text-white"
                  >
                    {mappedData.email}
                  </a>
                </span>
              )}
            </div>
            </Col>

            <Col xs={12} lg={6}>
            <ContactForm/>
            </Col>

        </Row>
        </Container>
        </section>

    )
}

export default ContactFormSection;