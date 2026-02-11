import GalleryMarquee from "@/components/UI/Marquee/GalleryMarquee";
import useWebsiteContent from "@/hooks/useWebsiteContent";
import { mapImageMarquee } from "@/mapper/aboutMapper/aboutImageMarquee.mapper";
import { useMemo } from "react";


const AboutImageMarquee = () => {
    const {data, isError} = useWebsiteContent({page: "about", sectionId: 6});
    const mappedData = useMemo(() => mapImageMarquee(data?.[0]), [data]);
    if (isError) return <div className="text-center  primary-description">Failed to load the section. Please try again later.</div>;
    if(!mappedData) return null;
    return (
        <>
       <div className="fade-in">
        <GalleryMarquee {...mappedData} />
        </div>
        </>
    )
}

export default AboutImageMarquee;