import LegalPage from "@/components/legal/LegalPage";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapTerms } from "@/mapper/legalMapper/terms.mapper";
import { useMemo } from "react";
import LegalSkeleton from "./legalSkeleton";


const TermsConditions = () => {
   const {data, isLoading, isError} = useWebsiteContent({page: "terms-conditions"});
   const mappedData = useMemo(() => mapTerms(data?.[0]), [data]);
   if(isLoading) return <LegalSkeleton/>
   if (isError) return <div className="text-center text-red primary-description section-spacing"> Failed to load the section. Please try again later.
   </div>;
   if(!mappedData) return null;
   return (
    <section className="fade-in">
    <LegalPage data={mappedData} />
    </section>
)
};

export default TermsConditions;
