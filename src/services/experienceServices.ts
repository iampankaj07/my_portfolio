import { db } from "../firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";

interface Experience {
    id:string;
  company: string;
  position: string;
  period: string;
  description: string;
}


// Get all experiences
export const getExperiences = async (): Promise<Experience[]> => {
  const snapshot = await getDocs(collection(db, "experiences"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Experience));
};
