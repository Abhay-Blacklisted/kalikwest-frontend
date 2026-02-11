export const mapImageMarquee = (apiData) => {
    if(!apiData) return null;
    return {
         images: (apiData?.page_meta?.Sections).map((item) => ({
            item: item.image
         }))
    }
}