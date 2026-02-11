 export const mapAboutResult = (apiData) => {
    if (!apiData) return null;
    return {
        heading: apiData.title,
        description:  apiData.description,
        subHeading: "Results That Speak",
        results:(apiData.page_meta?.Sections).map((item) => ({
            title: item.title_list,
            description: item.description_list,
        }))
        
    }
}