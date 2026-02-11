import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import ServiceMain from "@/pages/Services/ServiceMain";
import Contact from "@/pages/Contact/Contact";
import Portfolio from "@/pages/Portfolio/PortfolioList";
import ScrolltoTop from "@/components/layout/ScrollToTop";
import NotFound from "@/pages/404/NotFound";
import PrivacyPolicy from "@/pages/Legal/Privacy";
import TermsConditions from "@/pages/Legal/Terms";

 
const AppRouter = () => {
    return (
        <>
        <ScrolltoTop />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServiceMain/> }/>
        <Route path="/portfolio" element={ <Portfolio/> } />
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/privacy-policy" element={ <PrivacyPolicy/>}/>
        <Route path="/terms-&-conditions" element={ <TermsConditions/> }/>
        <Route path="*" element={<NotFound/> }/>
    </Routes>
    </>
    )
}

export default AppRouter;


