import Header from "./Navbar";
import Footer from "./Footer";
import ScheduleCta from "@/components/sections/ScheduleCta";
import { useLocation } from "react-router-dom";
import scheduleCtaData from "@/data/scheduleCta.data";



const PageWrapper = ({children}) => {
    const { pathname } = useLocation();
    const ctaData = scheduleCtaData[pathname]

    const headerVariant = pathname === "/contact-us" ? "light" : "default";

    return (
        <>
        <Header variant={headerVariant}/>
         <main>{children}</main> 
         {ctaData && (
         <section className="section-spacing mb-0">
            <ScheduleCta {...ctaData} />
         </section>
         )}          
        <Footer/>
        </>
    )
}

export default PageWrapper;