import { useQuery } from "@tanstack/react-query";
import testimonialsData from "../api/testimonials.api";



const normalizeData = (data = []) => 
data.map((item) => ({
        id: item.id,
        userTitle: item.title,
        designation: item.designation,
        text: item.description,
        image: item.image
    }))



const fetchTestimonials = async ({signal}) => {
    const res = await testimonialsData({signal});
    return normalizeData(res?.data?.data || [])
}

const useTestimonials = () => {
    return useQuery({
        queryKey:["testimonials"],
        queryFn: fetchTestimonials,
    })
}

export default useTestimonials;