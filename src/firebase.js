import firebase from 'firebase/app';
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGFgPF1Oje-bNsdJ4O9ghAh-GuSnsWnZM",
    authDomain: "mern-ecommerce-59f8c.firebaseapp.com",
    databaseURL: "https://mern-ecommerce-59f8c.firebaseio.com",
    projectId: "mern-ecommerce-59f8c",
    storageBucket: "mern-ecommerce-59f8c.appspot.com",
    messagingSenderId: "314137418107",
    appId: "1:314137418107:web:2f901461c59050704ac5de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
