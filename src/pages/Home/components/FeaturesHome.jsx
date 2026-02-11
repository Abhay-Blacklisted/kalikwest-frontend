import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";
import { mapHeroFeatures } from "@/mapper/heroFeatures.mapper";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { useMemo } from "react";

const FeaturesHome = () => {
    const {data, isError} = useWebsiteContent({page: "home", sectionId: 5});
    const mappedData = useMemo(() => mapHeroFeatures(data?.[0]), [data]);
    if (isError) return <div className="text-center text-red primary-description">Failed to load the section. Please try again later.</div>;
    if(!mappedData) return null;
    return (
        <>
        <FeaturesSection {...mappedData} />
        </>
    )
}

export default FeaturesHome;