export const mapAboutOperate = (apiData) => {
    if (!apiData) return null;
    return {
           heading: apiData.title,
           description: apiData.description,
           operateCards: (apiData.page_meta?.Sections).map((item, index) => ({
              icon: item.image,
              title: item.title_list,
              description: item.description_list,
              number: String(index + 1).padStart(2, "0")
           }))
    }
}