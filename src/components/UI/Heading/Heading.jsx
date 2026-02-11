const Heading = ({
  text,
  align,
  as: Tag = "h2",
  className = ""
}) => {
  return (
    <Tag
      className={`primary-heading ${className} ${align ? `text-${align}` : ""}`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
