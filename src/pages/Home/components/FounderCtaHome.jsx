import FounderCta from "@/components/sections/FounderCta/FounderCta";
import founder from "@/assets/images/logos/kalikwest.webp"
import quote from "@/assets/icons/quoteImg.svg"

const FounderCtaHome = () => {
    return (
        <>
        <FounderCta
        text="This studio exists to turn scattered brand efforts into one clear experience. We align branding, design, development, and marketing so every touchpoint feels intentional, usable, and built for scale."
        title ="Kalikwest"
        description="Founder of Kalikwest"
        image= {founder}
        quoteImage={quote}
         />
        </>
    )
}

export default FounderCtaHome;