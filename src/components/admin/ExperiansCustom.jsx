import { useEffect, useState } from "react";
import { experiencesReq } from "../../services/experiences.service";

function ExperiansCustom() {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const [experiences, setExperiences] = useState();

  useEffect(() => {
    async function getExp() {
      try {
        let data = (await experiencesReq.get()).data;
      } catch (error) {}
    }

    getExp();
  }, []);

  return <div>ExperiansCustom</div>;
}

export default ExperiansCustom;
