import { topCompanies } from "@/api/topcompanies.api";
import { useQuery } from "@tanstack/react-query";
import { keepPreviousData } from '@tanstack/react-query';


const normalizeCompanies = (data = []) =>
  data.map(item => ({
    id: item.id,
    src: item.company_logo,
    alt: `company-${item.id}`
  }));


  export const fetchTopCompanies = async ({signal}) => {
    const res = await topCompanies({signal});
   return normalizeCompanies(res?.data?.data || [] );
  }


  export const useTopCompanies = () => {
    return  useQuery({
      queryKey:["top-companies"],
      queryFn: fetchTopCompanies,
      placeholderData: keepPreviousData,  
  })}
  