import api from "../api/axios";

export const contactReq = {
  get: () => {
    return api.get("/contact/");
  },
  post: (data) => {
    return api.post("/contact/", { data });
  },
};
