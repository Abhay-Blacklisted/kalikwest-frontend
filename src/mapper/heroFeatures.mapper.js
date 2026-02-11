export const mapHeroFeatures = (apiData) => {
    if(!apiData) return null;
    return {
    subHeading: "Features",
    heading:apiData.title,
    description:apiData.description,
    features:(apiData.page_meta?.Sections || []).map((item) => ({
        image:item.image,
        title:item.title_list,
        description:item.description_list,
    }))
    }
}