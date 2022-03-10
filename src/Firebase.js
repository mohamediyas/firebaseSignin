import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEID,
  appId: process.env.REACT_APP_APPID
};

console.log(process.env.REACT_APP_KEY);

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;

    instance = firebase.initializeApp(firebaseConfig);

    return instance;
  }

  return null;
}

// Initialize Firebase
