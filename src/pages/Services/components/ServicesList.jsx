import useServices from "@/hooks/useServices";
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection";
import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";

const ServicesList = () => {
    const {
      data: services = [],
      isFetching,
      error,
    } = useServices();
    return (
        <>
           <SectionHeader 
            subHeading = "What We Do"
            heading = "A complete digital service suite for modern brands"
            description = "Every service we offer is built to strengthen how your brand looks, communicates, and performs across digital touchpoints."             
          />
        <ServicesSection 
         services ={services}
         loading={isFetching}
         showButton={false}
         error={error}
          />
          </>
    )
}


export default ServicesList;