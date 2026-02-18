import SplittingDynamicSection from "@/components/sections/SplittingDynamicSection/SplittingDynamicSection";
import brands from "@/assets/images/brands/designedBrands.png"
import { FloatingItemsData } from "@/data/floatingCard.data";
import { floatingStars } from "@/data/floatingCard.data";


const ServicesBrands = () => {
    return (
        <>
        <SplittingDynamicSection
         heading="Designed for brands that expect more" headingClassName="brandsHeadService"
         description="We build connected services that clean up your brand story, sharpen your digital presence, and create marketing you can actually rely on."
         align="left"
         children={
            <div>
                <img src={brands} alt="brandsImages" className="img-fluid"/>
            </div>
         }
         floatingItems={FloatingItemsData}
         floatingStars={floatingStars}

        />
        </>
    )
}

export default ServicesBrands;