import { useQuery } from "@tanstack/react-query";
import { toolsData } from "@/api/tools.api";


const normalizeTools = (apiData = []) => {
  const item = apiData?.[0];
  return {
    heading: item?.heading ?? "",
    subHeading: item?.sub_heading ?? "",
    images: item?.tools?.map((src, index) => ({
      id: index,
      src,
    })) ?? [],
  };
};


const fetchTools = async ({signal}) => {
  const res = await toolsData({signal});
  return normalizeTools(res?.data?.data);
};

const useToolsMarquee = () => {
  return useQuery({
    queryKey: ["tools-marquee"],
    queryFn: fetchTools,
    keepPreviousData: true,
  });
};

export default useToolsMarquee;
