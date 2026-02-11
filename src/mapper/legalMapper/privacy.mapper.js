export const mapPrivacy = (apiData) => {
    if(!apiData) return null;
    return {
     title: apiData.title,
     lastUpdated: apiData.updated_at_formatted,
     sections: [
      {
        content: apiData.description, 
      },
    ],
    }
}