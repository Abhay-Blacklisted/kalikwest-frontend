import TestimonialSection from "@/components/sections/TestimonialSection/TestimonialSection";
import useTestimonials from "@/hooks/useTestimonials";


const HomeTestimonials = () => {

    const {
        data: testimonials = [],
        isLoading: loading,
        error
    } = useTestimonials();
  
    return (
        <>
        <TestimonialSection testimonials ={testimonials} loading={loading} error={error}/>
       </>
    )
}

export default HomeTestimonials;