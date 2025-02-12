import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

// Fetch projects from Firestore
export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(collection(db, "projects"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Project));
};
