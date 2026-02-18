import usePortfolio from "@/hooks/usePortfolio";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
const AboutPortfolio = () => {
    const {
        data: portfolio = [],
         isLoading: loading, 
         error,
    } = usePortfolio({limit:4})
    return (
        <>
                <SectionHeader 
                subHeading = "Projects"
                heading = "Featured client work"
                description = "Get a glimpse of our work"
                
                />
        <PortfolioSection portfolios={portfolio} limit={4} loading={loading} showButton={true} error={error}/>
        </>
    )
}

export default AboutPortfolio;