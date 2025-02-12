import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Store the contact form data in Firebase Firestore
export const saveToFirebase = async (formData: any) => {
  try {
    await addDoc(collection(db, "contactMessages"), formData);
    console.log("Form data saved to Firebase");
  } catch (error) {
    console.error("Error saving message to Firebase: ", error);
  }
};
