import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../firebase/auth/user";
import { addCommentToPost } from "../firebase/post/post";

const CommentContent = () => {
    const { id } = useParams();
    const post = useSelector((state) =>
        state.posts.posts.find((p) => p.id === id)
    );
    const [user, setUser] = useState(null);
    const [comment, setComment] = useState('');
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    const [comments, setComments] = useState(post.comments || []);

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

    const handleSend = async () => {
        if (comment.trim() === '') return;

        try {
            await addCommentToPost(post.id, uid, comment);

            const newComment = {
                createdBy: uid,
                comment,
                createdAt: Date.now(),
            };
            setComments((prevComments) => [...prevComments, newComment]);

            setComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className="w-full">
            {/* Text */}
            <div className="w-full text-left border-b-2 border-black dark:border-white">
                <p className="text-2xl font-bold mb-2">Comment</p>
            </div>

            {/* Tweet */}
            <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5 pb-5">
                <div className="flex gap-2 ml-5 items-center">
                    <h1 className="text-lg font-bold">{user ? user.name : "Loading..."}</h1>
                    <p className="text-sm">{user ? user.email : "Loading..."}</p>
                    <p className="text-sm">{new Date(post.createdAt).toLocaleString()}</p>
                </div>
            
                <div className="ml-8 mt-2">{post.caption}</div>
            </div>

            {/* Comments */}
            <div className="max-h-64 overflow-y-auto mt-5">
                {comments.length > 0 ? (
                    comments.map((c, index) => (
                        <div key={index} className="flex justify-between text-white mb-2">
                            <p>
                                <strong className="font-bold">{user ? user.name : 'Loading...'}</strong>: {c.comment}
                            </p>
                            <p className="text-sm text-gray-700">{new Date(c.createdAt).toLocaleString()}</p>
                        </div>
                    ))
                ) : (
                        <p className="text-gray-400">No comments yet.</p>
                )}
            </div>

            {/* Text area */}
            <div className="flex-1 text-left border-b-2 border-black dark:border-white mt-5">
                <textarea placeholder="Tweet your reply..." className="w-full dark:bg-black text-lg" value={comment} onChange={(e) => {setComment(e.target.value)}}></textarea>
                <button className="text-white bg-blue-500 hover:bg-blue-800 disabled:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={handleSend}>Tweet</button>
            </div>
        </div>
    )
}

export default CommentContent