import { stripHtml } from "@/utils/stripHtml";

export const mapAboutLocation = (apiData) => {
    if(!apiData) return null;
    return {
        heading: apiData.title,
        description: stripHtml(apiData.description),
    }
}