export const mapAboutMission = (apiData) => {
    if(!apiData) return null;
    return  {
        subHeading: "What Drives Us",
        heading: apiData.title,
        description: apiData.description,
        list: (apiData?.page_meta?.Sections).map((item) => ( {
            title: item.title_list,
            description: item.description_list,
        }))

    }
}