import { data } from "react-router-dom";
import api from "../api/axios";

export const skillsReq = {
  get: () => {
    return api.get("/skills/");
  },
  post: (data) => {
    return api.post("/skills/", { data });
  },

  update: (id, data) => {
    return api.put(`/skills/${id}`, data);
  },
};
