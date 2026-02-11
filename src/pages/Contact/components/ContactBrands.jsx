import MarqueeSection from "@/components/UI/Marquee/BrandsMarquee.jsx";
import { useTopCompanies } from "@/hooks/useTopCompanies";

const ContactBrands = () => {
  const {
    data: companies = [],
    isLoading: loading,
    error,
  } = useTopCompanies();

  return (
    <MarqueeSection
      heading="Brands that trust us with their digital presence"
      images={companies}
      loading={loading}
      error={error}
    />
  );
};

export default ContactBrands;
