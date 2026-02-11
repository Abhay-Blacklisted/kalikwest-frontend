export const mapSnapchatCards = (apiData) => {
    if (!apiData) return null;
    return {
        items: (apiData.page_meta?.Sections || []).map((item) => ({
            image: item.image,
            title: item.title_list,
        }))
    }
}

export const mapGiphyCards = (apiData) => {
  if(!apiData) return null;
  return {
    items: (apiData.page_meta?.Sections || []).map((item) => ({
        image: item.image
    })) 
  }
}