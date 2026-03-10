import { useEffect, useState } from "react";
import { experiencesReq } from "../../services/experiences.service";
import { data } from "react-router-dom";
import Input from "../../components/ui/Input";

function ExperiansCustom() {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const [experiences, setExperiences] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <div>experians</div>;
}

export default ExperiansCustom;
