import api from "./axios";

export const websitecontent = ({page, sectionId, signal}) => {
    return api.get("/website-content", {
        params : {
            page_name: page,
            section_id: sectionId
        },
        signal
    })
}