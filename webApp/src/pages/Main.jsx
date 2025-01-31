import { Toaster } from "react-hot-toast"
import DarkMode from "../components/DarkMode"
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase/auth/login";

const Main = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <Toaster position='top-right' />

            {/* Dark Mode and Logout */}
            <div className='flex gap-6 items-center mt-5'>
                <DarkMode />

                <button onClick={handleLogout} className="text-white bg-blue-500 hover:bg-blue-800 font-medium rounded-lg w-full text-sm p-2 mt-4 px-5 me-2">Log out</button>
            </div>

            {/* Main Container */}
            <div className='flex flex-row justify-center items-center text-center w-full max-w-[1200px] mt-10'>
                Main
            </div>
        </div>
    )
}

export default Main