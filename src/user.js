import React from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import "./user.css";
function User({user}) {
    const updateUser = async (id, age) => {

        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };


    return (<div className="userOuter">
        <h1>
            Name: {user.name}
        </h1>
        <h1>
            Age: {user.age}
        </h1>
        <button onClick={() => { updateUser(user.id, user.age) }}>Increase Age</button>
        <button onClick={() => { deleteUser(user.id) }}> Delete User</button>
    </div>)
}
export default User;