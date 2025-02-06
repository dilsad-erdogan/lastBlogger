import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../firebase/post/post";
import { fetchAllUsers } from "../firebase/auth/user";
import { fetchPosts as handleFetchPosts } from "../redux/posts";
import { setUsers } from "../redux/user";
import PostCard from "./PostCard";

const MainContent = () => {
  const { posts } = useSelector(state => state.posts);
  console.log(posts)
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPostsThunk();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      const users = await fetchAllUsers();
      console.log(users)
      dispatch(setUsers(users));
    };

    loadUsers();
  }, [dispatch]);

  const fetchPostsThunk = async () => {
    try {
      const posts = await fetchPosts();
      dispatch(handleFetchPosts(posts));
    } catch (error) {
      console.error(error.message);
    }
  }

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
        {posts.map((post) => (
          <div key={post.id} className="p-2">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainContent