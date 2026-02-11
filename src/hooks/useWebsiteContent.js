import { useQuery } from "@tanstack/react-query";
import { websitecontent } from "@/api/websitecontent.api";


export const fetchSection = async ({queryKey, signal}) => {
 const [, page, sectionId] = queryKey;
 const res = await websitecontent({
    page,
    sectionId,
    signal
 })
 return res?.data?.data || [];
}

const useWebsiteContent = ({page,sectionId, enabled = true}) => {
    return useQuery({
        queryKey: ["website-content", page, sectionId],
        queryFn: fetchSection,
        enabled,
       
    })
}

export default useWebsiteContent;