import ContactFormSection from "./components/ContactFormSection";
import ContactLocation from "./components/ContactLocation";
import ContactTimeline from "./components/ContactTimeline/ContactTimeline";
import ContactBrands from "./components/ContactBrands";

const Contact = () => {
  const sections = [
    {
      Component: ContactFormSection,
      className: "section-spacing mt-0"
    },
    {
      Component: ContactBrands,
      className: "section-spacing"
    },
    {
      Component: ContactLocation,
      className: "section-spacing"
    },
    {
      Component: ContactTimeline,
      className: "section-spacing"
    }
  ];

  return (
    <>
      {sections.map(({ Component, className }, index) => (
        <section className={className} key={index}>
          <Component />
        </section>
      ))}
    </>
  );
};

export default Contact;
