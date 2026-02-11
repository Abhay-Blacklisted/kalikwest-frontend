import api from "./axios";

export const toolsData = ({signal} = {}) => {
    return api.get("/tools", {
        signal
    })
}