import ToolsMarqueeSection from "@/components/UI/Marquee/ToolsMarquee";
import useToolsMarquee from "@/hooks/useToolsMarquee";

const ServicesTools = () => {
  const {
    data,
    isLoading: loading,
    error
  } = useToolsMarquee();

  return (
<ToolsMarqueeSection
  subHeading="Tools"
  heading={data?.heading}
  description={data?.subHeading}
  images={data?.images}
  loading={loading}
  error={error}
/>
  );
};

export default ServicesTools;
