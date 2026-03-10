import { useEffect, useState } from "react";

/* toolkit */
import { useSelector } from "react-redux";
import { experiencesReq } from "../../services/experiences.service";
import Input from "../../components/ui/Input";

function ExperiansCustom() {
  const editMode = useSelector((state) => state.toggleEditMode.value);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    start_date: "",
    end_date: "",
    description: "",
  });

  const [experiences, setExperiences] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function postExp() {
      try {
        await experiencesReq.post({ ...formData });
      } catch (error) {}
    }

    postExp();
  }, []);

  return (
    <div>
      <input
        name="company"
        type="text"
        value={formData.company}
        disabled={!editMode}
        onChange={handleChange}
        className="border border-green-300"
      />

      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default ExperiansCustom;
