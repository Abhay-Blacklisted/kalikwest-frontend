import HomeLeadFormSection from "@/components/sections/HomeLeadFormSection/HomeLeadFormSection";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapHomeForm } from "@/mapper/homeForm.mapper";
import { useMemo } from "react";


const HomeLeadSection = () => {

   const {data, isError} = useWebsiteContent({page: "home", sectionId: 4});
   const mappedData = useMemo(() => mapHomeForm(data?.[0]), [data]);
     if (isError) return <div className="text-center text-red primary-description">Failed to load the form. Please try again later.</div>;
   if(!mappedData) return null;
    return (
        <>
        <HomeLeadFormSection
      {...mappedData}
        />
        </>
    )
}
export default HomeLeadSection;