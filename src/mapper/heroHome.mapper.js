export const heroHomeMapper = (apiData) => {
    if (!apiData) return null;
    return {
        heading: apiData.title,
        subHeading:  "USA-based Agency Delivering Global Impact",
        description: apiData.description
    }
}