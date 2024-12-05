import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const BlogPost = ({ title, excerpt, date, readTime, image }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}) => (
  <article className="flex flex-col md:flex-row gap-8 items-center">
    <div className="w-full md:w-1/2">
      <img src={image} alt={title} className="rounded-xl w-full h-64 object-cover" />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <div className="flex items-center space-x-4 text-sm text-text-body">
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {date}
        </span>
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {readTime}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-text-heading hover:text-primary transition-colors">
        <a href="#">{title}</a>
      </h3>
      <p className="text-text-body">{excerpt}</p>
      <a
        href="#"
        className="inline-block text-accent font-semibold hover:text-accent/80 transition-colors"
      >
        Read More →
      </a>
    </div>
  </article>
);

const Blog = () => {
  const posts = [
    {
      title: "Understanding CSS Grid: A Complete Guide",
      excerpt: "Learn how to create complex layouts with CSS Grid. This comprehensive guide covers everything from basic concepts to advanced techniques.",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mastering Web Accessibility",
      excerpt: "Discover how to make your websites accessible to everyone. Learn about ARIA labels, semantic HTML, and keyboard navigation.",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background transition-colors duration-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12">Latest Articles</h2>
        <div className="space-y-16">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;