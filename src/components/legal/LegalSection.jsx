import styles from "./legal.module.scss";

const LegalSection = ({ content }) => {
  return (
    <section className="legalContentSection">
      <div
        className={styles.legalContent}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
      />
    </section>
  );
};

export default LegalSection;
