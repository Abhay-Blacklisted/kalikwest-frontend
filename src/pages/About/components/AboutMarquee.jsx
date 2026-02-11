import TextMarquee from "@/components/UI/Marquee/TextMarquee";
import vectorIcon from "@/assets/icons/marqueeVector.svg";

const AboutTextMarquee = () => {
    return (
        <>
        <TextMarquee
        texts={["Strategic, creative, accountable digital partners for ambitious brands."]}
        icon = {vectorIcon}
        textTransform = "uppercase"
        />
        </>
    )
}

export default AboutTextMarquee;