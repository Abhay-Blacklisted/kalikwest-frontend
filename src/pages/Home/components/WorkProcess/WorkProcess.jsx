import WorkProcess from "@/components/sections/WorkProcess/WorkProcess";
import arrow1 from "@/assets/icons/arrow-1.svg"
import arrow2 from "@/assets/icons/arrow-2.svg"
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapWorkProcess } from "@/mapper/workProcess.mapper";
import { useMemo } from "react";
import WorkProcessSkeleton from "@/components/sections/WorkProcess/WorkProcessSkeleton";

const WorkProcessHome = () => {

        const {data, isLoading, isError} =  useWebsiteContent ({page: "home", sectionId: 2 });
        const mappedData = useMemo( () => mapWorkProcess(data?.[0]), [data]);

        if(isLoading) return <WorkProcessSkeleton/>
        if (isError) return <div className="text-center  primary-description">Failed to load the section. Please try again later.</div>;
        if(!mappedData) return null;
        return (
        <>
                 <div className="fade-in">
        <WorkProcess
        {...mappedData}
         arrowOne ={arrow1}
         arrowTwo = {arrow2} 
         />
         </div>
        </>
    )
}

export default WorkProcessHome;