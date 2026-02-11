import SectionHeader from "@/components/UI/SectionHeader/SectionHeader";
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection";
import usePortfolio from "@/hooks/usePortfolio";
import starVector from "@/assets/images/portfolios/starVector.svg";
import starVectorLg from "@/assets/images/portfolios/startVectorLg.svg";
import starVectorFilled from "@/assets/images/portfolios/starVectorFilled.svg";
import styles from "./PortfolioMain.module.scss";

const PortfolioMain = () => {
  const {
   data: portfolio = [],
   isLoading: loading,
   error,
  } = usePortfolio()
    return (
        <>
        <div className="position-relative">
        <SectionHeader
        subHeading="Portfolio"
        heading="Work That Defines Us"
        description="Showcasing our selected work across brands, platforms, and campaigns"
        />

        <PortfolioSection portfolios={portfolio} showButton={false} loading={loading} error={error}/>
        {/* <div className={styles.starVectors}>
        <img src={starVector} className={`${styles.starVector} img-fluid position-absolute top-0 d-none d-lg-block`}/>
        <img src={starVectorLg} className={`${styles.starVectorLg} img-fluid position-absolute bottom-0 d-none d-lg-block`}/>
        <img src={starVectorFilled} className={`${styles.starVectorFilled} img-fluid position-absolute d-none d-lg-block`}/>
        </div> */}

        </div>
        </>
    )
}

export default PortfolioMain;