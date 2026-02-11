import MarqueeSection from "@/components/UI/Marquee/BrandsMarquee";
import { useTopCompanies } from "@/hooks/useTopCompanies";
import companiesFallback from "@/data/companiesFallback.data";

const HomeBrands = () => {
  const {
    data: companies = [],
    isLoading: loading,
    error,
  } = useTopCompanies();
    
  return (
    <>
    <MarqueeSection
      heading="The Partners Who Trusted Us with Their Design"
      images={companies}
      loading={loading}
      error={error}
    />
    </>
  );
};

export default HomeBrands;
