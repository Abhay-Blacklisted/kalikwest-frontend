import LegalLayout from "./LegalLayout";
import LegalSection from "./LegalSection";

const LegalPage = ({ data }) => {
  return (
    <LegalLayout
      title={data.title}
      lastUpdated={data.lastUpdated}
    >
      {data.sections.map((section, index) => (
        <LegalSection key={index} {...section} />
      ))}
    </LegalLayout>
  );
};

export default LegalPage;
