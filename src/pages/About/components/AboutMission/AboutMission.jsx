import SplittingDynamicSection from "@/components/sections/SplittingDynamicSection/SplittingDynamicSection";
import { FloatingItemsData } from "@/data/floatingCard.data";
import { floatingStars } from "@/data/floatingCard.data";
import styles from "./AboutMission.module.scss";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapAboutMission } from "@/mapper/aboutMapper/aboutMission.mapper";
import { useMemo } from "react";
import AboutMissionSkeleton from "./AboutMission.skeleton";


const AboutMission = () => {
    const {data, isError, isLoading} = useWebsiteContent({page: "about", sectionId: 1});
    const mappedData = useMemo(() => mapAboutMission(data?.[0]),[data]);
    if(isLoading) return <AboutMissionSkeleton/>
    if (isError) return <div className="text-center  primary-description">Failed to load the section. Please try again later.</div>;
    if(!mappedData) return null;
    return (
        <>
          <div className="fade-in">
        <SplittingDynamicSection
         subHeading = {mappedData.subHeading} subHeadingClassName="ms-0"
         heading ={mappedData.heading} 
         description ={mappedData.description}
         align="left"
         floatingItems={FloatingItemsData}
         floatingStars={floatingStars}
         reverse= {true}
         children = {
            <>
             {mappedData.list.map((item,index) => (
                <div key={index} className={`${styles.listContainer}  m-60 mt-0`}> 
                <h4 className={`${styles.subHeading} sub-heading`}> {item.title} </h4>
                <p className="primary-description"> {item.description} </p>
                </div>
    ))}
        </>
         }
        />
                </div>
        </>

    )
}

export default AboutMission;