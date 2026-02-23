export const mapContactDetail = (apiData) => {
  if (!apiData) return null;

  const sections = apiData.page_meta?.Sections || [];

  return {
    heading: apiData.title,
    description: apiData.description,
    email: sections[0]?.title_list || "",
  };
};
