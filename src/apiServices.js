import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

// Add a new document
export const addUser = async (user) => {
  await addDoc(collection(db, "users"), user);
};

// Get all users
export const getUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Delete a user
export const deleteUser = async (id) => {
  await deleteDoc(doc(db, "users", id));
};
