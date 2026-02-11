import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const AboutMissionSkeleton = () => {
    const skeletonTheme = {
       baseColor: "#e9e8ee",
       highlightColor: "#f4f3f8",
};

    return (
              <Container>
                <div className="sectionHeaderSkeleton">
                    <Skeleton width = {195} height ={46} {...skeletonTheme}/>
                    <Skeleton height ={70} style={{ width: "100%", maxWidth: 471 }} {...skeletonTheme}/>
                    <Skeleton height ={24} style={{ width: "100%", maxWidth: 804 }} {...skeletonTheme}/>
                </div>
                  <Row className={`m-60 gy-5 align-items-center`}>
                      <Col xs={12}  lg={6} xl={5} xxl={4}>
                        <Skeleton height={483} style={{ width: "100%", maxWidth: 450 }} {...skeletonTheme}/>
                      </Col>
                  
                        <Col xs={12}  lg={6} xl={7} xxl={8} style={{maxWidth: 600, marginLeft: "auto"}}>
                         {[1,2].map((_,i) => (
                        <div key={i} className="m-60">
                        <Skeleton  height={46} width ={115} {...skeletonTheme}/>
                        <Skeleton count={1} height={46}     {...skeletonTheme}/>
                        </div>
                      ))}
                      </Col>
                  </Row>
              </Container>

    )
}

export default AboutMissionSkeleton;