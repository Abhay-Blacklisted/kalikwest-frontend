import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import HowWeOperate from "@/components/sections/HowWeOperate/HowWeOperate";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapAboutOperate } from "@/mapper/aboutMapper/aboutOperate.mapper";
import { useMemo } from "react";

const AboutOperate = () => {
    const {data, isError} = useWebsiteContent({page: "about", sectionId: 3});
    const mappedData = useMemo(() => mapAboutOperate(data?.[0]), [data]);
     if (isError) return <div className="text-center text-red primary-description">Failed to load the section. Please try again later.
     </div>;
    if(!mappedData) return null;

    return (
        <>
        <SectionHeader
        subHeading="How we operate"
        heading= {mappedData.heading}
        description={mappedData.description}
        />   

        <HowWeOperate {...mappedData} />    
        </>
    )
}

export default AboutOperate;