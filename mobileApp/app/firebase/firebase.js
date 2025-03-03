import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIG1bcGMt56bPf9iYfH7hC3ckE1S04k1k",
  authDomain: "lastblogger-cb32b.firebaseapp.com",
  projectId: "lastblogger-cb32b",
  storageBucket: "lastblogger-cb32b.firebasestorage.app",
  messagingSenderId: "422172113757",
  appId: "1:422172113757:web:b4a14b8c5c1072191846b4",
  measurementId: "G-52ZQT6LN2B"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// AsyncStorage ile Auth başlat
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };