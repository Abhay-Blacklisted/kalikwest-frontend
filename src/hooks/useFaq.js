import { useQuery } from "@tanstack/react-query";
import { getFaqBySlug } from "../api/faq.api";
import { keepPreviousData } from '@tanstack/react-query';

const fetchFaq = async ({queryKey, signal}) => {

  const [, slug] = queryKey;
    if (!slug) return [];

  const res = await getFaqBySlug({
    slug,
    signal
   });
  return res.data?.data || [];
};

const useFaq = (slug) => {
  return useQuery({
    queryKey: ["faq", slug],          
    queryFn: fetchFaq,   
    enabled: !!slug, 
    placeholderData: [],             
    placeholderData: keepPreviousData,        
  });
};

export default useFaq;
