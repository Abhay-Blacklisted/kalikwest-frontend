import HeroSection from "./HeroSection/HeroSection";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { heroHomeMapper } from "@/mapper/heroHome.mapper";
import { heroHomeFallback } from "@/data/heroHomeFallback";
const HeroHome = () => {

    const {data} = useWebsiteContent({page: "home", sectionId: 1});
    const mappedData = heroHomeMapper(data?.[0]);

    return (
        <>
        <HeroSection headerData={mappedData || heroHomeFallback}/>
        </>
    )
}

export default HeroHome;