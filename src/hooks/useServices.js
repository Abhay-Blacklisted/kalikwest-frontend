import { ServicesData } from "@/api/services.api";
import { useQuery } from "@tanstack/react-query";

const formattedData = (data = []) => 
  data.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.service_img
  }))


const fetchServices = async ({queryKey, signal}) => {
  const [,limit] = queryKey;
  const res = await ServicesData({
    params: limit && limit !== "all" ? {limit} : {},
    signal,
  });
  return formattedData(res?.data?.data || [])
}


const useServices = ({ limit } = {}) => {
  return useQuery({
    queryKey: ["services", limit ?? "all"],
    queryFn:  fetchServices,
    keepPreviousData: true,   
    
  })
}

export default useServices;
