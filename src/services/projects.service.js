import api from "../api/axios";

export const projectsReq = {
  get: () => {
    return api.get("/projects/");
  },
  post: (data) => {
    return api.post("/projects/", { data });
  },
};
