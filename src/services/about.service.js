import api from "../api/axios.js";

export const aboutReq = {
  get: () => {
    return api.get("/about/");
  },

  post: (data) => {
    return api.post("/about/", { data });
  },
};
