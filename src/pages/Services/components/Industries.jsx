import IndustrySection from "@/components/sections/IndustrySection/IndustrySection";
import useIndustries from "@/hooks/useIndustries";


const Industries = () => {

    const { data: industries = [], isLoading: loading, error} = useIndustries();
    return (
        <>
       <IndustrySection
       subHeading="How We Operate"
       heading="Industries We Serve"
       description="With 30+ years of experience, we cater to the needs of a wide range of industries."
       subTitle="Clients"
       industries={industries}
       loading={loading}
       error={error}
       />
        </>
    )
}

export default Industries;