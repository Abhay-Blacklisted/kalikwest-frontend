import Skeleton from "react-loading-skeleton";
import { Container, Row, Col } from "react-bootstrap";


const WorkProcessSkeleton = () => {
        const skeletonTheme = {
       baseColor: "#e9e8ee",
       highlightColor: "#f4f3f8",
};

    return (
        <Container>
        <div className="sectionHeaderSkeleton text-center">
            <Skeleton width = {186} height ={47} {...skeletonTheme}/>
            <Skeleton height ={70} style={{ width: "100%", maxWidth: 930 }} {...skeletonTheme}/>
            <Skeleton height ={24} style={{ width: "100%", maxWidth: 670 }} {...skeletonTheme}/>
        </div>
       <Row>
          <Col xs={12} className="m-60">
            <div className="workProcessSkeleton">
            <Skeleton height={300} {...skeletonTheme} style={{width: "100%"}} />
            </div>
          </Col>
       </Row>

        </Container>
    )
}

export default WorkProcessSkeleton;