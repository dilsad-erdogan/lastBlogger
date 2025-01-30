import { addDoc, arrayRemove, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { firestore } from "../firebase"
import toast from "react-hot-toast";

export const setPost = async (userId, caption) => {
    try{
        const postDoc = {
            caption,
            likes: [],
            comments: [],
            createdAt: Date.now(),
            createdBy: userId,
        };
        
        await addDoc(collection(firestore, "posts"), postDoc);
        toast.success("Post created successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchPosts = async () => {
    try {
        const postsCollection = collection(firestore, "posts");
        const querySnapshot = await getDocs(postsCollection);
        const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return posts;
    } catch (error) {
        toast.error(error.message);
    }
};

export const addCommentToPost = async (postId, userId, commentText) => {
    try {
        const postRef = doc(firestore, "posts", postId);

        const comment = {
            createdBy: userId,
            comment: commentText,
            createdAt: Date.now()
        };

        await updateDoc(postRef, {
            comments: arrayUnion(comment),
        });

        toast.success("Comment added successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};

export const setLiked = async (postId, userId, isUnLiked = false) => {
    try{
        const postRef = doc(firestore, "posts", postId);
        const userLiked = { uid: userId };

        if(isUnLiked) {
            // Unliked işlemi
            await updateDoc(postRef, {
                likes: arrayRemove(userLiked),
            });
            toast.success("Unliked!");
        } else {
            // Liked işlemi
            await updateDoc(postRef, {
                likes: arrayUnion(userLiked),
            });
            toast.success("Liked!");
        }
    } catch (error) {
        toast.error(error.message);
    }
};

export const fetchUserPosts = async (userId) => {
    try {
        const postsCollectionRef = collection(firestore, "posts");
        const q = query(postsCollectionRef, where("createdBy", "==", userId));
        const querySnapshot = await getDocs(q);
    
        const userPosts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    
        return userPosts;
      } catch (error) {
        toast.error(error.message);
        return [];
      }
};