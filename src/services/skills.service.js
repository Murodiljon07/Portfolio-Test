import api from "../api/axios";

export const skillsReq = {
  get: () => {
    return api.get("/skills/");
  },
  post: (data) => {
    return api.post("/skills/", { data });
  },
};
