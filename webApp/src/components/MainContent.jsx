import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="w-full">
      {/* Text */}
      <div className="w-full text-left border-b-2 border-black dark:border-white">
        <p className="text-2xl font-bold mb-2">Home</p>
      </div>

      {/* Text area */}
      <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
        <textarea placeholder="What's happening?" className="w-full dark:bg-black text-lg"></textarea>
        <button className="text-white bg-blue-500 hover:bg-blue-800 disabled:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">Tweet</button>
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

export default MainContent