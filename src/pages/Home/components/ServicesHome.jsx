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
             description = "We bring together strategy, creativity, and execution to help brands and creators grow with clarity and consistency."             
             />

             <ServicesSection services={services} showButton={true} loading={isFetching} limit={3} error={error}/>
        </>
    )
}

export default ServicesHome;