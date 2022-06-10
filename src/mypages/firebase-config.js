import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgP7kC4HgKVyLWNilnO7zuttkSAYRkxO4",
    authDomain: "login-auth-f887e.firebaseapp.com",
    projectId: "login-auth-f887e",
    storageBucket: "login-auth-f887e.appspot.com",
    messagingSenderId: "1055950567121",
    appId: "1:1055950567121:web:d9c7fb3c6c938a1555b7f0",
    measurementId: "G-NN061VY2XS"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
 }