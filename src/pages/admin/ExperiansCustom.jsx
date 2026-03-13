import { useEffect, useState } from "react";

/* toolkit */
import { useSelector } from "react-redux";
import { experiencesReq } from "../../services/experiences.service";
import Input from "../../components/ui/Input";
import Btn from "../../components/ui/Btn";
import { toast } from "react-toastify";
import Loader3D from "../../components/ui/loader";

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

  useEffect(() => {
    async function getExp() {
      try {
        let res = await experiencesReq.get();
        let data = res.data.find((item) => item.id === 1);
        setExperiences(data);
        setFormData({
          role: data.role,
          company: data.company,
          start_date: data.start_date,
          end_date: data.end_date,
          description: data.description,
        });

        console.log(experiences);
      } catch (error) {
        toast.error(error.massage);
      }
    }
    getExp();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    useEffect(() => {
      experiencesReq.post;
    }, []);
  };

  if (!experiences)
    return (
      <div className="w-full">
        <Loader3D />
      </div>
    );

  return (
    <section className="w-[80%]  bg-[#1A1A2E] p-6 rounded-lg shadow-lg flex flex-col items-center gap-6 relative">
      <div className="w-full flex flex-col gap-4">
        <div>
          <label className="text-gray-300 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formData.start_date}
            disabled={!editMode}
            onChange={handleChange}
            className={`mt-1 w-full p-2 rounded-md bg-[#121224] text-white border ${
              editMode ? "border-purple-500" : "border-gray-700"
            }`}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            disabled={!editMode}
            onChange={handleChange}
            className={`mt-1 w-full p-2 rounded-md bg-[#121224] text-white border ${
              editMode ? "border-purple-500" : "border-gray-700"
            }`}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Bio</label>
          <textarea
            name="bio"
            value={formData.description}
            disabled={!editMode}
            onChange={handleChange}
            className={`mt-1 w-full p-2 rounded-md bg-[#121224] text-white border ${
              editMode ? "border-purple-500" : "border-gray-700"
            }`}
            rows={4}
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">CV Link</label>
          <input
            type="text"
            name="cv_link"
            value={formData.start_date}
            disabled={!editMode}
            onChange={handleChange}
            className={`mt-1 w-full p-2 rounded-md bg-[#121224] text-white border ${
              editMode ? "border-purple-500" : "border-gray-700"
            }`}
          />
        </div>

        {/* <div className="flex gap-2 mt-2">
          {editMode ? (
            <>
              <button
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
              onClick={() => dispatch(goEditMode(!editMode))}
            >
              Edit
            </button>
          )}
        </div> */}
      </div>
    </section>
  );
}

export default ExperiansCustom;
