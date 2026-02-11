import { useQuery } from "@tanstack/react-query";
import { portfolioData } from "@/api/portfolio.api";

const formatPortfolio = (data = []) =>
  data.map((item) => ({
    id: item.id,
    image: item.image,
    description: item.description,
    url: item.url,
    text: [item.service_name, item.industries_name],
  }));

const fetchPortfolio = async ({queryKey, signal}) => {
  const [, limit] = queryKey;
  const res = await portfolioData({
   params: limit ? {limit} : {},
   signal,
   });
  return formatPortfolio(res?.data?.data || []);
};

const usePortfolio = ({ limit } = {}) => {
  return useQuery({
    queryKey: ["portfolio", limit], 
    queryFn:  fetchPortfolio,
    keepPreviousData: true,    

  });
};

export default usePortfolio;
