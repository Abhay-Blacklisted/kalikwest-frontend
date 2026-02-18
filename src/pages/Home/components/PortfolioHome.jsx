
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import usePortfolio from "@/hooks/usePortfolio";

const PortfolioHome = () => {
  const {
    data: portfolio = [],
    isLoading: loading,
    error,
  } = usePortfolio({ limit : 4 });

    return (
        <>
        <SectionHeader 
        subHeading = "Projects"
        heading = "Featured Projects"
        description = "A glimpse into how we turn ideas into high-impact digital experiences."
        
        />
        <PortfolioSection portfolios={portfolio} showButton={true} limit={4} loading={loading} error={error}/>
        </>
    )
}

export default PortfolioHome;