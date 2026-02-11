import TextMarquee from "@/components/UI/Marquee/TextMarquee";
import vectorIcon from "@/assets/icons/marqueeVector.svg";


const ServicesMarquee = () => {
    return (
        <>
<TextMarquee
  texts={["Design", "Development", "Marketing"]}
  icon={vectorIcon}
/>

        </>
    )
}

export default ServicesMarquee; 