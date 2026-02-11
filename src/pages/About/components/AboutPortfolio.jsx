import usePortfolio from "@/hooks/usePortfolio";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";

const AboutPortfolio = () => {
    const {
        data: portfolio = [],
         isLoading: loading, 
         error,
    } = usePortfolio({limit:4})
    return (
        <>
        <PortfolioSection portfolios={portfolio} limit={4} loading={loading} showButton={true} error={error}/>
        </>
    )
}

export default AboutPortfolio;