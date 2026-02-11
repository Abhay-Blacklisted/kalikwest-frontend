import { stripHtml } from "@/utils/stripHtml";

export const mapBrandsChoose = (apiData) => {
    if(!apiData) return null;
    return {
       heading: apiData.title,
       description: stripHtml(apiData.description),
       list: (apiData.page_meta?.Sections).map((item) => ({
          title: item.title_list,
          description: item.description_list,
       }))
    }
}