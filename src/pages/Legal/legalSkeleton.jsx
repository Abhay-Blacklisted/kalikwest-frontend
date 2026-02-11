import Skeleton from "react-loading-skeleton";
import { Container } from "react-bootstrap";

const LegalSkeleton = () => {
            const skeletonTheme = {
                        baseColor: "#e9e8ee",
                        highlightColor: "#f4f3f8",
                    };

    return (
            <section className="legalSkeleton section-spacing">
                <Container>
                    <div className="headerSkeleton text-center">
                        <Skeleton height={100} style={{width: "100%", maxWidth:700}} {...skeletonTheme}/>
                        <Skeleton height={24} style={{width: "100%", maxWidth:220}} {...skeletonTheme}/>
                    </div>

                    <div className="contentSkeleton text-center section-spacing">
                        <Skeleton height={500} style={{width: "100%"}} {...skeletonTheme}/>
                    </div>
                </Container>
            </section>
    )
}

export default LegalSkeleton;