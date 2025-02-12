import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface About {
  id: string;
  name: string;
  role: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  profileImage: string;
}

export const getHeroData = async (): Promise<About | null> => {
  const snapshot = await getDocs(collection(db, "about"));
  
  // Check if the collection contains any document
  if (snapshot.empty) {
    console.error("No hero data found.");
    return null;
  }

  // Return the first document as the hero data
  const doc = snapshot.docs[0];  // Since there's only one hero document expected
  return { id: doc.id, ...doc.data() } as About;
};

// Define the structure of each section in About
interface AboutSection {
  id: string;
  title: string;
  description: string;
}

interface AboutContent {
  id: string;
  text: string;
}

export const fetchAboutSections = async (): Promise<AboutSection[]> => {
  const snapshot = await getDocs(collection(db, "aboutSections"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as AboutSection));
};

export const fetchAboutContent = async (): Promise<AboutContent> => {
  const snapshot = await getDocs(collection(db, "aboutContent"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0] as AboutContent;
};
