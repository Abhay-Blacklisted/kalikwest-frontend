import ResultSection from "@/components/sections/ResultSection/ResultSection";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapAboutResult } from "@/mapper/aboutMapper/aboutResult.mapper";
import { useMemo } from "react";

const AboutResultSection = () => {
    const {data, isError} = useWebsiteContent ({page: "about", sectionId : 2});
    const mappedData = useMemo(() => mapAboutResult(data?.[0]), [data]);
    if (isError) return <div className="text-center text-red primary-description">Failed to load the section. Please try again later.</div>;
    if(!mappedData) return null;
    
     return (
        <ResultSection
         {...mappedData}
        buttonText="Get a Quote"
        buttonLink="/contact-us"
        />
     
    )
}

export default AboutResultSection;