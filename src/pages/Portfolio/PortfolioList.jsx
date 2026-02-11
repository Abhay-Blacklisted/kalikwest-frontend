import PortfolioMain from "./components/PortfolioMain";
import PortfolioTestimonials from "./components/PortfolioTestimonials";
const Portfolio = () => {
    return (
        <>
        <section className="section-spacing">
        <PortfolioMain/>
        </section>

        <section className="section-spacing">
        <PortfolioTestimonials/>
        </section>

        </>
    )
}

export default Portfolio;