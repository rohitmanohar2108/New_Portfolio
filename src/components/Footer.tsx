import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-secondary/25 text-text-body py-16 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">Stay Updated</h3>
            <p className="mb-6">
              Subscribe to my newsletter for the latest tutorials, articles, and resources.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background dark:bg-secondary border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-text-heading mb-4">Connect</h3>
            <div className="flex gap-4 md:justify-end">
              {[
                { icon: <Youtube className="w-6 h-6" />, href: "#" },
                { icon: <Twitter className="w-6 h-6" />, href: "#" },
                { icon: <Github className="w-6 h-6" />, href: "#" },
                { icon: <Linkedin className="w-6 h-6" />, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-text-body hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p>© {new Date().getFullYear()} DevEducator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;