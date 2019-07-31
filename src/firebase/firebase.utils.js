import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyClvbTc-gxu65RE2VVX4UupUEn0hGZ3jGo",
  authDomain: "crwn-db-1344e.firebaseapp.com",
  databaseURL: "https://crwn-db-1344e.firebaseio.com",
  projectId: "crwn-db-1344e",
  storageBucket: "",
  messagingSenderId: "616151214714",
  appId: "1:616151214714:web:d0326e76ce777f7f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
