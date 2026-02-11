import api from "./axios";

const testimonialsData = (config = {}) => {
    return api.get("/testimonial", {
        ...config
    })
}

export default testimonialsData;