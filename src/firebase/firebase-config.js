import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDm1tFY4YEF4CKfrTFnW8w7S4-bkXF4Vi0",
	authDomain: "social-academy-1c439.firebaseapp.com",
	projectId: "social-academy-1c439",
	storageBucket: "social-academy-1c439.appspot.com",
	messagingSenderId: "697054493465",
	appId: "1:697054493465:web:0aa8cb81cdb2b8b5eea388",
	measurementId: "G-KMKM7B7YK0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const storage = firebase.storage();
export {
	firebase,
	db,
	googleAuthProvider,
	githubAuthProvider,
	twitterAuthProvider,
	facebookAuthProvider,
	storage
};
