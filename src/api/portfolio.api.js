import api from "./axios";

export const portfolioData = ({ params = {}, signal}) => {
  return api.get("/project-list", {
    params,
    signal
  });
};
