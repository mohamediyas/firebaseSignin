import React from "react";
import getFirebase from "./Firebase";
import useInput from "./useInput";

const FireStoreTuts = () => {
  const firebase = getFirebase();
  const name = useInput("");

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (firebase) {
        console.log(1);
        const db = await firebase.firestore();
        console.log(2);

        let docRef = await db.collection("names").doc().set(
          { name: name.value },
          {
            merge: true
          }
        );

        console.log(docRef);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h3>Add your Name</h3>
        <input type="text" {...name} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FireStoreTuts;
