export const mapHomeMarketing  = (apiData) => {
  if(!apiData) return null;
  return {
    heading: apiData.title,
    title: apiData.description,
    cards: (apiData.page_meta?.Sections || []).map((item) => ({
        image: item.image,
        title: item.title_list,
        description: item.description_list,
    }))
  }
}

