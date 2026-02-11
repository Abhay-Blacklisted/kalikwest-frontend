import ContactForm from "@/components/forms/ContactForm/ContactForm";
import styles from "./ContactFormSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import whiteInvertedLogo from "@/assets/icons/whiteInvertedLogo.svg";
import phone from "@/assets/icons/phone.svg";
import email from "@/assets/icons/email.svg";
import location from "@/assets/icons/location.svg";
import { mapContactDetail } from "@/mapper/contactMapper/contactDetail.mapper";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { useMemo } from "react";
import { CONTACT_FALLBACK } from "@/data/contactFallback.data";

const ContactFormSection = () => {

   const {data, isError} = useWebsiteContent({page: "Contact", sectionId: 1});


    const mappedData = useMemo(() => {
    return {
    ...CONTACT_FALLBACK,
    ...(mapContactDetail(data?.[0]) || {}),
    };
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
            description={mappedData.description}                     
            />

            
            <div className={styles.contactIcons}>
              {mappedData.phone && (
                <span className={`d-flex align-items-start ${styles.iconList} primary-description`}>
                  <img src={phone} alt="phone" />
                  <a
                    href={`tel:${mappedData.phone.replace(/\s+/g, "")}`}
                    className="text-decoration-none text-white"
                  >
                    {mappedData.phone}
                  </a>
                </span>
              )}

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

              {mappedData.address && (
                <span className={`d-flex align-items-start ${styles.iconList} primary-description text-white`}>
                  <img src={location} alt="location" />
                  {mappedData.address}
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