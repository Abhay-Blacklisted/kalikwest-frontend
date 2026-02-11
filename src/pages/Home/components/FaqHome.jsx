import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import FaqSection from "@/components/sections/FaqSection/FaqSection";
import founderLg from "@/assets/images/logos/founder-lg.png"
import useFaq from "@/hooks/useFaq";

const FaqHome = () => {
    const {
        data: faqs,
        isLoading: loading,
        error 
    } = useFaq("home");
    return (
        <>
        <SectionHeader
        subHeading ="FAQs"
        heading ="Frequently Asked Questions"
        description="Unsure about subscription design?" 
        />
        <FaqSection
        image = {founderLg}
        title="Start Your Project With Kalikwest Agency"
        description="Prefer to email?"
        linkText="hello@kalikwest.com"
        buttonText="Contact Us"
        buttonLink="/contact-us"
        faqs={faqs}
        loading={loading}
        error={error}
        />
        </>
    )
}

export default FaqHome;