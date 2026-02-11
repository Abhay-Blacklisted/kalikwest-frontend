export const mapContactDetail = (apiData) => {
  if (!apiData) return null;

  const sections = apiData.page_meta?.Sections || [];

  return {
    heading: apiData.title,
    description: apiData.description,
    phone: sections[0]?.title_list || "",
    email: sections[0]?.description_list || "",
    address: sections[1]?.title_list || "",
  };
};
