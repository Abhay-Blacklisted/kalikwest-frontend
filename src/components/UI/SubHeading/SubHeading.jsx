import styles from "./SubHeading.module.scss";
import blueIcon from "@/assets/icons/blueIcon.svg";

const SubHeading = ({
  text,
  as: Tag = "h3",
  icon = blueIcon,
  iconAlt = "icon",
   showIcon = true,   
  className = ""
}) => {
  return (
    <Tag
      className={`${styles.subHeading} d-flex align-items-start gap-1 ${className}`}
    >
      {showIcon && (<img src={icon} alt={iconAlt} />)}
      {text}
    </Tag>
  );
};

export default SubHeading;
