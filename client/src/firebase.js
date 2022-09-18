import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtAbfmDacfnxNgKZG83SsbSAHDZHcmaIg",
  authDomain: "video-c758a.firebaseapp.com",
  projectId: "video-c758a",
  storageBucket: "video-c758a.appspot.com",
  messagingSenderId: "346501766599",
  appId: "1:346501766599:web:22baf7b46aca59836d0de2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;