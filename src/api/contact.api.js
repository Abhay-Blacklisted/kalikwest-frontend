import api from "./axios";

export const submitContactForm = (data) => {
return api.post("/contact", data);
};
