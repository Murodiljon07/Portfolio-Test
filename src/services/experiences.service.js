import api from "../api/axios";

export const experiencesReq = {
  get: () => {
    return api.get("/experiences/");
  },
  post: (data) => {
    return api.post("/experiences/", { data });
  },
  update: (id, data) => {
    return api.put(`/experiences/${id}/`, { data });
  },
};
