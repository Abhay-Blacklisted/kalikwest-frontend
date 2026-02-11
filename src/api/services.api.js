import api from "./axios";

export const ServicesData = ({ params= {}, signal }) => {
  return api.get("service/list", {
    params,
    signal
  });
};
