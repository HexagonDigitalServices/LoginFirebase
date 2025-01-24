import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBD4K2P4KQpEDx5k3jSgd-toDR1e9I8ttw",
    authDomain: "fir-login-ff9fa.firebaseapp.com",
    projectId: "fir-login-ff9fa",
    storageBucket: "fir-login-ff9fa.firebasestorage.app",
    messagingSenderId: "24047318192",
    appId: "1:24047318192:web:e55df00f654fb06e77f775",
    measurementId: "G-MFBC5SHQW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// HANDLE GOOGLE LOGIN
const handleGoogleLogin = async (setError) => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log('Google Sign-In:', result.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Google Sign-In failed');
    }
}

// HANDLE LOGIN USING EMAIL AND PASSWORD
const handleSubmit = async (e, setError) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCred.user);
        setError('');
    } catch (err) {
        console.log(err);
        setError('Invalid email or password');
    }
    e.target.reset();
}

export { auth, googleProvider, handleGoogleLogin, handleSubmit }
