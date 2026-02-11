import ServiceFaq from "./components/ServiceFaq";
import ServicesTools from "./components/ServicesTools";
import ServiceCta from "./components/ServiceCTA/ServiceCTA";
import ServicesList from "./components/ServicesList";
import ServicesHero from "./components/HeroSection/ServicesHero";
import ServicesMarquee from "./components/ServicesMarquee";
import ServicesBrands from "./components/ServicesBrands";
import Industries from "./components/Industries";


const ServiceMain = () => {

    const sections = [
        ServicesHero,             
        ServicesMarquee,
        ServicesBrands,
        ServicesList,
        ServiceCta,
        ServicesTools,
        Industries,
        ServiceFaq
    ];
    return (
        <>

        {sections.map((Sections,index) => (
            <div className="section-spacing" key={index}>
                <Sections/>
            </div>
        ))}

        
        </>
    )
}

export default ServiceMain;