import HeroHome from "./components/HeroHome";
import HomeBrands from "./components/HomeBrands";
import WorkProcessHome from "./components/WorkProcess/WorkProcess";
import ServicesHome from "./components/ServicesHome";
import PortfolioHome from "./components/PortfolioHome";
import CreativeCardsSection from "./components/CreativeCards/CreativeCardsSection";
import MarketingcardsHome from "./components/MarketingCardsHome";
import HomeLeadSection from "./components/HomeLeadSection";
import FeaturesHome from "./components/FeaturesHome";
import FounderCtaHome from "./components/FounderCtaHome";
import FaqHome from "./components/FaqHome";
import HomeTestimonials from "./components/HomeTestimonials";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchSection } from "@/hooks/useWebsiteContent";
import { fetchTopCompanies } from "@/hooks/useTopCompanies";

const Home = () => {

    const queryClient = useQueryClient();

    useEffect(() => {
      queryClient.prefetchQuery({
      queryKey: ["website-content", "home", 1], 
      queryFn: fetchSection,
    });

    queryClient.prefetchQuery({
      queryKey: ["top-companies"],
      queryFn: fetchTopCompanies, 
    });

    queryClient.prefetchQuery({
      queryKey: ["website-content", "home", 2], 
      queryFn: fetchSection,
    });
    }, [queryClient])

    const sections = [
        HeroHome,
        HomeBrands,
        WorkProcessHome,
        ServicesHome,
        PortfolioHome,
        CreativeCardsSection,
        MarketingcardsHome,
        HomeLeadSection,
        FeaturesHome,
        FounderCtaHome,
        HomeTestimonials,
        FaqHome
    ];
    return (
        <>
      {sections.map((Sections,index) => (
        <div className="section-spacing" key={index}>
            <Sections/>
        </div>
      ))}
        </>
    )
}

export default Home;