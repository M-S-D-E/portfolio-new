import { LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import K from "../constants";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="h-screen w-[400px] shadow-lg flex flex-col px-5 py-8 bg-white">
      <span className="text-3xl font-bold text-blue-600 text-center">
        MSDE Portfolio
      </span>
      <div className="flex flex-col gap-y-5 mt-12">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center p-2 rounded-md ${
                isActive ? "bg-blue-50 text-blue-600" : "hover:bg-blue-100"
              }`
            }
            end
          >
            <span className="bg-blue-600 text-white p-2 rounded-full">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <button
        className="flex gap-x-4 items-center mt-auto bg-blue-600 text-white rounded-md p-2"
        onClick={logout}
      >
        <span className="bg-blue-100 text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
