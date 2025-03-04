import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "../firebase/post/post";
import { fetchAllUsers } from "../firebase/auth/user";
import { fetchPosts as handleFetchPosts } from "../redux/posts";
import { setUsers } from "../redux/user";
import PostCard from "./PostCard";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown desteği için

const MainContent = () => {
  const { posts } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    fetchPostsThunk();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      const users = await fetchAllUsers();
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
  };

  return (
    <div className="w-full">
      {/* Text */}
      <div className="w-full text-left border-b-2 border-black dark:border-white">
        <p className="text-2xl font-bold mb-2">Home</p>
      </div>

      {/* Textarea with Markdown */}
      <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
        <textarea
          placeholder="Write in Markdown..."
          className="w-full dark:bg-black text-lg p-2 border rounded-md"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        />
        <button className="text-white bg-blue-500 hover:bg-blue-800 disabled:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
          Tweet
        </button>
      </div>

      {/* Markdown Preview Area */}
      <div className="bg-gray-100 dark:bg-gray-900 p-4 mt-4 rounded-md">
        <p className="text-lg font-bold">Preview:</p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ node, ...props }) => <p {...props} className="text-gray-800 dark:text-gray-200" />,
            h1: ({ node, ...props }) => <h1 {...props} className="text-2xl font-bold mt-4" />,
            h2: ({ node, ...props }) => <h2 {...props} className="text-xl font-semibold mt-3" />,
            ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-5 mt-2" />,
            li: ({ node, ...props }) => <li {...props} className="ml-4" />,
            blockquote: ({ node, ...props }) => <blockquote {...props} className="border-l-4 border-gray-500 pl-4 italic" />,
          }}
        >
          {markdownText}
        </ReactMarkdown>
      </div>

      {/* Tweets Area */}
      <div className="flex-1 text-left mt-5">
        {posts.map((post) => (
          <div key={post.id} className="p-2">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;