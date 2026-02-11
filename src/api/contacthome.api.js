import api from "./axios";

export const submitContactFormHome = (data) => {
    return api.post("/contact-home", data)
}