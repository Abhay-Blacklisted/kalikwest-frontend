import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import useServices from "@/hooks/useServices";

const ServicesHome = () => {
  const {
    data: services = [],
    isFetching,
    error,
  } = useServices({ limit: 3 })
    return (
        <>
             <SectionHeader 
             subHeading = "Services"
             heading = "Services We Offer"
             description = "Our approach blends creativity, marketing, and strategy to deliver growth at every step."             
             />

             <ServicesSection services={services} showButton={true} loading={isFetching} limit={3} error={error}/>
        </>
    )
}

export default ServicesHome;