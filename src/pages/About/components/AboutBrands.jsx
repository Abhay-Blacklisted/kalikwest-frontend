import MarqueeSection from "@/components/UI/Marquee/BrandsMarquee.jsx";
import { useTopCompanies } from "@/hooks/useTopCompanies";

const AboutBrands = () => {
  const { 
      data: companies =[],
     isLoading : loading, 
     error 
    } = useTopCompanies();

  return (
    <MarqueeSection
      heading="Trusted by brands that don’t settle for average"
      images={companies}
      loading={loading}
      error={error}
    />
  );
};

export default AboutBrands;
