export const mapHomeForm = (apiData) => {
    if (!apiData) return null;
    return {
        heading: apiData.title,
        description: apiData.description
    }
}