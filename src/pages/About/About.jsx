import AboutLocation from "./components/AboutLocation";
import AboutPortfolio from "./components/AboutPortfolio";
import AboutBrands from "./components/AboutBrands";
import FounderCtaAbout from "./components/AboutFounder";
import AboutTextMarquee from "./components/AboutMarquee";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutImageMarquee from "./components/AboutImageMarquee";
import AboutTestimonials from "./components/AboutTestimonials";
import AboutResultSection from "./components/AboutResults";
import AboutOperate from "./components/AboutOperate/Aboutoperate";
import AboutBrandsChoose from "./components/AboutBrandsChoose/AboutBrandsChoose";
import AboutMission from "./components/AboutMission/AboutMission";


const About = () => {
  const sections = [
  AboutHero,
  AboutBrands,
  AboutMission,
  AboutResultSection,
  AboutTextMarquee,
  FounderCtaAbout,
  AboutOperate,
  AboutLocation,
  AboutBrandsChoose,
  AboutPortfolio,
  AboutTestimonials,
  AboutImageMarquee
];
    return (
        <>
       {sections.map((Sections,index) => (
        <div className="section-spacing" key={index}>
            <Sections />
        </div>
       ))}
        </>
    )
}

export default About; 