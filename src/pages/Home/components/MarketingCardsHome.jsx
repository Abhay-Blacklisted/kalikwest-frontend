import MarketingCardSection from "@/components/sections/MarketingCardSection/MarketingCardSection";
import { mapHomeMarketing } from "@/mapper/homeMarketing.mapper";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { useMemo } from "react";

const MarketingcardsHome = () => {
    const {data, isError} = useWebsiteContent({page : "home", sectionId: 3});
    const mappedData = useMemo(() => mapHomeMarketing(data?.[0]), [data])
     if (isError) return <div className="text-center primary-description">Failed to load the section. Please try again later.</div>;
     if(!mappedData) return null;
    return (
        <>
      <MarketingCardSection
               {...mappedData}
                />

        </>
    )
}

export default MarketingcardsHome;