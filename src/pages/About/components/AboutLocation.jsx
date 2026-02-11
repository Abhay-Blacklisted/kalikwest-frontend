import LocationSection from "@/components/sections/LocationSection/LocationSection";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapAboutLocation } from "@/mapper/aboutMapper/aboutLocation.mapper";
import { useMemo } from "react";

const AboutLocation = () => {
    const {data, isError} = useWebsiteContent({page: "about", sectionId: 4});
    const mappedData = useMemo(() => mapAboutLocation(data?.[0]), [data]);
     if (isError) return <div className="text-center text-red primary-description">Failed to load the section. Please try again later.
     </div>;
    if(!mappedData) return null;
    return (
        <>
        <LocationSection
        subHeading="Location"
        heading={mappedData.heading}
        description={mappedData.description}
        />
        </>
    )
}

export default AboutLocation;