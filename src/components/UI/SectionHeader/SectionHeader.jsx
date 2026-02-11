import Heading from "@/components/UI/Heading/Heading";
import SubHeading from "@/components/UI/SubHeading/SubHeading";
import Description from "@/components/UI/Description/Description";


const SectionHeader = ({
    subHeading,
    subHeadingIcon,
    showSubHeadingIcon = true,
    heading,
    description,
    align ="center",
    subHeadingClassName = "",
    headingClassName="",
    headingAs ="h2",
    className=""
}) => {
    return (
        <>
        <div className={`section-header text-${align} ${className} px-2`}>
        {subHeading && <SubHeading text = {subHeading} icon ={subHeadingIcon || undefined} className={`${subHeadingClassName}`} showIcon={showSubHeadingIcon}/>}
        {heading && <Heading text ={heading}  as={headingAs} align={align} className={`${headingClassName}`}/>}
        {description && <Description text ={description} align={align}/>}
        </div>
        </>
    )
}

export default SectionHeader;