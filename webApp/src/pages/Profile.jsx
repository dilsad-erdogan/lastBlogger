import { Toaster } from "react-hot-toast"
import DarkMode from "../components/DarkMode"
import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"
import ProfileContent from "../components/ProfileContent"

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Toaster position='top-right' />

      {/* Dark Mode and Logout */}
      <div className='flex gap-6 items-center mt-5'>
        <DarkMode />
      </div>

      {/* Main Container */}
      <div className='flex justify-center items-center gap-10 w-full max-w-[1200px] mt-10'>
        {/* Sidebar */}
        <div className="hidden lg:block w-1/6 p-5 overflow-y-auto border-r border-black dark:border-white">
          <Sidebar />
        </div>

        {/* Content */}
        <div className="w-4/6 p-5 flex justify-center overflow-y-auto">
          <ProfileContent />
        </div>
                
        {/* Right bar */}
        <div className="hidden lg:block w-1/6 p-5 overflow-y-auto border-l border-black dark:border-white">
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default Profile