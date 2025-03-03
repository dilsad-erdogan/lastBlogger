import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// Kayıt Olma
export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Register Error:", error.message);
    return null;
  }
};