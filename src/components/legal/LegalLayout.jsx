import { Container } from "react-bootstrap";

const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <section className="legalPage section-spacing">
      <Container>
        <h1 className="heroHeadingCustom text-center">{title}</h1>
        {lastUpdated && (
          <p className="primary-description text-center">
            Last Updated: {lastUpdated}
          </p>
        )}
       <div className="section-spacing">
        {children}
        </div>
      </Container>
    </section>
  );
};

export default LegalLayout;
