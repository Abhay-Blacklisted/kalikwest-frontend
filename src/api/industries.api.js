import api from "./axios";

const getIndustries = ({...config} = {}) => {
    return api.get("./industries-list",
        {...config}
    )
}

export default getIndustries;