import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase";
import toast from 'react-hot-toast';

export const register = async (name, email, password) => {
    try{
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        if(user) {
            toast.success('You have successfully registered!');
            
            const userDoc = {
                email: email,
                name: name,
                bio: "",
                followers: [],
                following: [],
                createdAt: Date.now()
            };
            console.log(userDoc);
            await setDoc(doc(firestore, "users", user.uid), userDoc);
        }
        return user;
    } catch (error) {
        toast.error(error.message);
    }
}