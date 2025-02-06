import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import EditProfile from "./EditProfile";
import { fetchUserPosts } from "../firebase/post/post";
import { fetchUserById } from "../firebase/auth/user";

const ProfileContent = () => {
    const [openModal, setOpenModal] = useState(false);
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState(null);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    useEffect(() => {
        const getUserPosts = async () => {
          const posts = await fetchUserPosts(JSON.parse(localStorage.getItem('user')).uid);
          setUserPosts(posts);
        };
    
        const fetchUserData = async () => {
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser && storedUser.uid) {
            const firebaseUser = await fetchUserById(storedUser.uid);
            if (firebaseUser) {
              setUser(firebaseUser);
            }
          }
        };
    
        getUserPosts();
        fetchUserData();
      }, []);

    return (
        <div className="w-full">
            {/* Text */}
            <div className="w-full text-left border-b-2 border-black dark:border-white">
                <p className="text-2xl font-bold mb-2">{user?.name}</p>
            </div>

            {/* User Content */}
            <div className="w-full p-5 grid grid-cols-1 lg:grid-cols-2 text-left border-b-2 border-black dark:border-white">
                {/* User Info */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold">{user?.name}</h1>
                    <p className="text-sm text-gray-700 dark:text-gray-500">{user?.email}</p>
                    <p className="mt-4 font-bold">{user?.bio}</p>
                    <div className="flex items-center gap-4 mt-4 text-gray-700 dark:text-gray-500">
                        <SlCalender />
                        <p className="text-sm">Joined {new Date(user?.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex gap-1">
                            <p className="font-bold">{user?.followers?.length || 0}</p>
                            <p className="text-gray-700 dark:text-gray-500">Followers</p>
                        </div>

                        <div className="flex gap-1">
                            <p className="font-bold">{user?.following?.length || 0}</p>
                            <p className="text-gray-700 dark:text-gray-500">Following</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full text-end">
                    <button className="text-white bg-blue-500 hover:bg-blue-800 disabled:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={handleOpenModal}>Edit Profile</button>
                </div>
            </div>

            {/* Tweets area */}
            <div className="flex-1 text-left mt-5">
                {userPosts.map((post) => (
                    <div key={post.id} className="p-2">
                        <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
                            <div className="ml-8 mt-2">{post.caption}</div>
                        </div>
                    </div>
                ))}
            </div>

            <EditProfile isOpen={openModal} onClose={() => setOpenModal(false)} user={user} />
        </div>
    )
}

export default ProfileContent