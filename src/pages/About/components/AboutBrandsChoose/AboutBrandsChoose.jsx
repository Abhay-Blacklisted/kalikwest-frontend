import BrandImage from "@/assets/images/brands/brandsLeft.webp"
import WhyBrandChoose from "@/components/sections/WhyBrandsChoose/WhyBrandsChoose";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapBrandsChoose } from "@/mapper/aboutMapper/aboutBrandsChoose.mapper";
import { useMemo } from "react";

const AboutBrandsChoose = () => {
    const {data, isError} = useWebsiteContent({page: "about", sectionId: 5});
    const mappedData = useMemo(() => mapBrandsChoose(data?.[0]), [data]);
     if (isError) return <div className="text-center text-red primary-description">Failed to load the section. Please try again later.
     </div>;
    if(!mappedData) return null;
    return (
        <>
        <WhyBrandChoose
        subHeading="Why brands choose Kalikwest"
        heading={mappedData.heading}
        description={mappedData.description}
        image = {BrandImage}
        list={mappedData.list}
        buttonText="Book A Call"
        buttonLink="/contact-us"
        />
        </>
    )
}

export default AboutBrandsChoose;
