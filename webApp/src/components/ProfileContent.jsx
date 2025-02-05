import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const ProfileContent = () => {
    return (
        <div className="w-full">
            {/* Text */}
            <div className="w-full text-left border-b-2 border-black dark:border-white">
                <p className="text-2xl font-bold mb-2">Alex</p>
            </div>

            {/* User Content */}
            <div className="w-full p-5 grid grid-cols-1 lg:grid-cols-2 text-left border-b-2 border-black dark:border-white">
                {/* User Info */}
                <div className="w-full">
                    <h1 className="text-2xl font-bold">Alex</h1>
                    <p className="text-sm text-gray-700 dark:text-gray-500">@alex</p>
                    <p className="mt-4 font-bold">Hello, my name is Alex!</p>
                    <div className="flex items-center gap-4 mt-4 text-gray-700 dark:text-gray-500">
                        <SlCalender />
                        <p className="text-sm">Joined March 2024</p>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex gap-1">
                            <p className="font-bold">0</p>
                            <p className="text-gray-700 dark:text-gray-500">Followers</p>
                        </div>

                        <div className="flex gap-1">
                            <p className="font-bold">0</p>
                            <p className="text-gray-700 dark:text-gray-500">Following</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <div className="w-full text-end">
                <button className="text-white bg-blue-500 hover:bg-blue-800 disabled:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Edit Profile</button>
                </div>
            </div>

            {/* Tweets area */}
            <div className="flex-1 text-left mt-5">
                {/* Tweet 1 */}
                <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
                    <div className="flex gap-2 ml-5 items-center">
                        <h1 className="text-lg font-bold">Alex</h1>
                        <p className="text-sm">@alex</p>
                        <p className="text-sm">4 seconds</p>
                    </div>
            
                    <div className="ml-8 mt-2">This is my tweet!</div>
            
                    <div className="flex gap-4 ml-5 my-5 items-center">
                        <div className="flex gap-1 items-center">
                            <FaRegCommentDots className="text-2xl font-bold hover:text-blue-500" />
                            <p className="text-sm">1</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegHeart className="text-2xl font-bold hover:text-red-500" />
                            <p className="text-sm">1</p>
                        </div>
                    </div>
                </div>
            
                {/* Tweet 2 */}
                <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
                    <div className="flex gap-2 ml-5 items-center">
                        <h1 className="text-lg font-bold">Alex</h1>
                        <p className="text-sm">@alex</p>
                        <p className="text-sm">4 seconds</p>
                    </div>
            
                    <div className="ml-8 mt-2">This is my tweet!</div>
            
                    <div className="flex gap-4 ml-5 my-5 items-center">
                        <div className="flex gap-1 items-center">
                            <FaRegCommentDots className="text-2xl font-bold hover:text-blue-500" />
                            <p className="text-sm">1</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegHeart className="text-2xl font-bold hover:text-red-500" />
                            <p className="text-sm">1</p>
                        </div>
                    </div>
                </div>
            
                {/* Tweet 3 */}
                <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
                    <div className="flex gap-2 ml-5 items-center">
                        <h1 className="text-lg font-bold">Alex</h1>
                        <p className="text-sm">@alex</p>
                        <p className="text-sm">4 seconds</p>
                    </div>
            
                    <div className="ml-8 mt-2">This is my tweet!</div>
            
                    <div className="flex gap-4 ml-5 my-5 items-center">
                        <div className="flex gap-1 items-center">
                            <FaRegCommentDots className="text-2xl font-bold hover:text-blue-500" />
                            <p className="text-sm">1</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaRegHeart className="text-2xl font-bold hover:text-red-500" />
                            <p className="text-sm">1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContent