import React from 'react';
// import { Calendar, Clock } from 'lucide-react';
import { FaCalendar, FaClock } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'Building Performant Flutter Apps',
    excerpt: 'Learn the best practices for optimizing Flutter applications for better performance.',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'State Management in Flutter',
    excerpt: 'A comprehensive guide to different state management solutions in Flutter.',
    date: '2024-03-01',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Flutter Testing Strategies',
    excerpt: 'Essential testing strategies to ensure your Flutter app reliability.',
    date: '2024-02-15',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
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
      </div>
    </section>
  );
};

export default Blog;