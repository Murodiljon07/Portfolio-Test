import { useState, useEffect } from "react";
import { aboutReq } from "../../services/about.service";
import { toast } from "react-toastify";

import { RxExit } from "react-icons/rx";

import Btn from "../../components/ui/Btn";
import Loader3D from "../../components/ui/loader";
import { useNavigate } from "react-router-dom";

function ProfileAside() {
  const navigate = useNavigate();

  const [about, setAbout] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    bio: "",
    cv_link: "",
    image: null,
  });

  useEffect(() => {
    async function fetchAbout() {
      try {
        const res = await aboutReq.get();
        const data = res.data.find((item) => item.id === 13);
        setAbout(data);
        setFormData({
          name: data.name || "",
          role: data.role || "",
          bio: data.bio || "",
          cv_link: data.cv_link || "",
          image: data.image,
        });
      } catch (err) {
        toast.error("Ma'lumotni olishda xato: " + err.message);
      }
    }
    fetchAbout();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const payload = { ...formData };
      await aboutReq.update(13, payload);
      setAbout((prev) => ({ ...prev, ...payload }));
      setEditMode(false);
      toast.success("Ma’lumot saqlandi!");
    } catch (err) {
      toast.error("Saqlashda xato: " + err.message);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: about.name || "",
      role: about.role || "",
      bio: about.bio || "",
      cv_link: about.cv_link || "",
    });
    setEditMode(false);
  };

  if (!about) return <Loader3D />;

  return (
    <aside className="w-140 h-screen bg-[#1A1A2E] p-6 rounded-lg shadow-lg flex flex-col items-center gap-6 relative">
      <div
        className={`w-32 h-32 rounded-full overflow-hidden border-4 border-[#7C3AED]  ${editMode ? "border-purple-500" : "border-gray-500"}`}
      >
        {editMode ? (
          <input
            type="file"
            accept="image/*"
            className={`w-full h-full object-cover `}
            onChange={handleChange}
          />
        ) : (
          <img src={about.image} alt="" />
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <div>
          <label className="text-gray-300 text-sm">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
            value={formData.bio}
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
            value={formData.cv_link}
            disabled={!editMode}
            onChange={handleChange}
            className={`mt-1 w-full p-2 rounded-md bg-[#121224] text-white border ${
              editMode ? "border-purple-500" : "border-gray-700"
            }`}
          />
        </div>

        <div className="flex gap-2 mt-2">
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
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>

      <Btn
        onClick={() => navigate("/")}
        btn_type="main_btn"
        className="group absolute bottom-10 w-[200px] flex justify-center items-center gap-4"
      >
        Exit
        <RxExit className="transition-transform duration-300 group-hover:translate-x-1" />
      </Btn>
    </aside>
  );
}

export default ProfileAside;
