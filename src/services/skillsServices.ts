import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getSkills = async () => {
  try {
    const skillsRef = collection(db, "skills"); // "skills" is the collection name
    const querySnapshot = await getDocs(skillsRef);
    const skills: any[] = [];
    querySnapshot.forEach((doc) => {
      skills.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return skills;
  } catch (error) {
    console.error("Error getting skills:", error);
    throw new Error("Error fetching skills");
  }
};
