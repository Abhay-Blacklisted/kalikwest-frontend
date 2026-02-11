import LegalPage from "@/components/legal/LegalPage";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapPrivacy } from "@/mapper/legalMapper/privacy.mapper";
import { useMemo } from "react";
import LegalSkeleton from "./legalSkeleton";

const PrivacyPolicy = () => {
  const {data, isLoading,  isError} = useWebsiteContent({page: "privacy-policy"});
  const mappedData = useMemo(() => mapPrivacy(data?.[0]), [data]);
  if(isLoading) return <LegalSkeleton/>
  if (isError) return <div className="text-center text-red primary-description section-spacing">Failed to load the section. Please try again later.
   </div>;
  if(!mappedData) return null;
  return (
    <section className="fade-in">
    <LegalPage data = {mappedData} />
    </section>
)
};

export default PrivacyPolicy;
