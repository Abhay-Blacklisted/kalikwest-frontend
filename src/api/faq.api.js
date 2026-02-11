import api from "./axios";

export const getFaqBySlug = ({ slug, ...config } = {}) => {
  return api.get(`/faq/list/${slug}`, {
    ...config
  });
};
