export const mapWorkProcess = (apiData) => {
  if (!apiData) return null;

  return {
    heading: apiData.title,
    description: apiData.description,
    subHeading: "Work Process", 

    steps: (apiData.page_meta?.Sections || []).map((item, index) => ({
      step: String(index + 1).padStart(2, "0"),
      title: item.title_list,
      text: item.description_list,
      icon: item.image,
    })),
  };
};
