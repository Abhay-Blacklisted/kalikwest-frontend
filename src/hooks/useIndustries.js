import getIndustries from "@/api/industries.api";
import { useQuery } from "@tanstack/react-query";

const formattedData = (data = []) =>
  data.map((item) => ({
          id: item.id,
          title: item.heading,
          description: item.description,
          image: item.image,
          clientImages: item.clients_image,
  }))

  const fetchIndustries = async ({signal}) => {
    const res = await getIndustries({signal});
    return formattedData(res?.data?.data || [])
  }


const useIndustries = () => {
  return useQuery ({
    queryKey: ["services", "industries"],
    queryFn:  fetchIndustries,
    keepPreviousData: true,    
  })
};

export default useIndustries;
