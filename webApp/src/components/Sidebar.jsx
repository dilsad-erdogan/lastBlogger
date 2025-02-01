import { RiHomeHeartLine  } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth/login";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col justify-between h-5/6">
      {/* Top */}
      <div>
        <h2 className="text-3xl font-bold" style={{ fontFamily: "'Lucida Handwriting', cursive" }}>Last Blogger</h2>

        <div className="flex flex-col gap-10 justify-center items-start mt-20">
          <div className="flex items-center gap-5" onClick={() => {() => navigate(`/main`)}}>
            <RiHomeHeartLine className="text-2xl font-bold" />
            <div className="text-2xl">Main</div>
          </div>

          <div className="flex items-center gap-5" onClick={() => {() => navigate(`/profile`)}}>
            <FaUserAlt className="text-2xl font-bold" />
            <div className="text-2xl">Profile</div>
          </div>

          <div className="flex gap-2 items-center text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-full w-full text-sm p-2 mt-4 px-5 me-2" onClick={handleLogout}>
            <FiLogOut className="text-2xl font-bold" />
            <div className="text-2xl">Logout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar