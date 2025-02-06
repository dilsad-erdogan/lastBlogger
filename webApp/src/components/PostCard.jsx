import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaHeart, FaRegCommentDots, FaRegHeart } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { fetchUserById } from "../firebase/auth/user";
import { setLiked } from "../firebase/post/post";

const PostCard = ({ post }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes || []);

    // Kullanıcının mevcut beğeni durumu kontrol ediliyor
    useEffect(() => {
        const uid = JSON.parse(localStorage.getItem("user"))?.uid;
        if (uid) {
            setIsLiked(likes.some((like) => like.uid === uid));
        }
    }, [likes]);

    const handleLiked = async () => {
        try {
          const uid = JSON.parse(localStorage.getItem("user"))?.uid;
          if (!uid) throw new Error("User ID (uid) is not available");
    
          const updatedLikes = isLiked
            ? likes.filter((likeUid) => likeUid !== uid) // Unlike
            : [...likes, uid]; // Like
    
          await setLiked(post.id, uid, isLiked);
          setLikes(updatedLikes); // Beğeni listesini güncelle
          setIsLiked(!isLiked); // Durumu tersine çevir
        } catch (error) {
          console.error("Error while liking the post:", error);
        }
    };

    useEffect(() => {
        const getUser = async () => {
          try {
            const fetchedUser = await fetchUserById(post.createdBy);
            setUser(fetchedUser);
          } catch (error) {
            console.error("Error fetching user:", error);
          }
        };
        getUser();
    }, [post.createdBy]);

    return (
        <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
            <div className="flex gap-2 ml-5 items-center">
                <h1 className="text-lg font-bold">{user ? user.name : "Loading..."}</h1>
                <p className="text-sm">{user ? user.email : "Loading..."}</p>
                <p className="text-sm">{new Date(post.createdAt).toLocaleString()}</p>
            </div>

            <div className="ml-8 mt-2">{post.caption}</div>

            <div className="flex gap-4 ml-5 my-5 items-center">
                <div className="flex gap-1 items-center" onClick={() => navigate(`${'/comment/'+ post.id}`)}>
                    <FaRegCommentDots className="text-2xl font-bold hover:text-blue-500" />
                    <p className="text-sm">1</p>
                </div>
                <div className="flex gap-1 items-center" onClick={handleLiked}>
                    {isLiked ? <FaHeart className="text-red-700" /> : <FaRegHeart className="text-2xl font-bold hover:text-red-500" />}
                    <p className="text-sm">{likes.length}</p>
                </div>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostCard