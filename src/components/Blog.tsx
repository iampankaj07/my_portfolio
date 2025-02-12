import React, { useState, useEffect } from "react";
import { FaCalendar, FaClock } from "react-icons/fa";
import { fetchBlogPosts } from "../services/blogService";

// Define types for BlogPost
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const Blog = () => {
  // Use state with type annotation
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);  // Added error state

  useEffect(() => {
    const getPosts = async () => {
      
      try {
        const data = await fetchBlogPosts();

        // Check if data is empty or invalid and set error if needed
        if (!data || data.length === 0) {
          setError("No blog posts available.");
        } else {
          setBlogPosts(data);
          setError(null);  // Reset error if posts are fetched
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("An error occurred while fetching blog posts.");
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <h2 className="text-center">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-red-500">{error}</h2>;  // Display error message
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        {blogPosts.length === 0 ? (
          <p className="text-center text-gray-500">No blog posts available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mr-4">
                      <FaCalendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <FaClock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
