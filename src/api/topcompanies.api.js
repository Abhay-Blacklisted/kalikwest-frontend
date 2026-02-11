import api from "./axios";

export const topCompanies = (config = {}) => {
  return api.get("/top-companies", {
    ...config
  });
};
