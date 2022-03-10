import "./styles.css";
import getFirebase from "./Firebase";
import useInput from "./useInput";
import { useEffect, useState } from "react";

export default function App() {
  const firebase = getFirebase();
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setCurrentUser(authUser.email);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  const signout = async () => {
    try {
      if (firebase) {
        await firebase.auth().signOut();
        alert("signed out");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const email = useInput("");
  const password = useInput("");

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);

      console.log(user);
      alert("welcome");
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);

      console.log(user);
      alert("Welcome back");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (firebase) {
  }

  return (
    <div className="App">
      <h2>Sign in user is : {currentUser}</h2>
      <button onClick={signout}>Logout</button>
      <form onSubmit={signUp}>
        <input type="email" {...email} />
        <input type="password" {...password} />
        <input type="submit" />
      </form>

      <h2>SIGNIN</h2>
      <form onSubmit={signIn}>
        <input type="email" {...email} />
        <input type="password" {...password} />
        <input type="submit" />
      </form>
    </div>
  );
}
