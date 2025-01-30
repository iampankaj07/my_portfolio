// src/blogService.ts
import { db } from "./firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const snapshot = await getDocs(collection(db, "blog"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as BlogPost));
};
