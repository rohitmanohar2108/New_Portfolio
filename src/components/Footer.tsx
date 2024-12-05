import React from 'react';
import { Github, Linkedin, Twitter, Youtube, Send, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary dark:bg-secondary/25 text-text-body py-16 transition-colors duration-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Contact Me Section */}
          <div>
            <h3 className="text-2xl font-bold text-text-heading mb-4">Contact Me</h3>
            <p className="mb-6">Looking for opportunities to create impactful solutions and
            contribute to innovative projects.</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-background dark:bg-secondary border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-background dark:bg-secondary border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg bg-background dark:bg-secondary border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary"
              ></textarea>
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Follow Me Section */}
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-text-heading mb-4">Connect</h3>
            <p className="mb-6">Connect with me on my social media channels:</p>
            <div className="flex gap-4 justify-start md:justify-end">
              {[
                { icon: <Mail className="w-6 h-6" />, href: "mailto:manoharrohit372@gmail.com" },
                
                { icon: <Github className="w-6 h-6" />, href: "https://github.com/rohitmanohar2108" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/rohit-manohar-80b949207/" },
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

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p>© {new Date().getFullYear()} DevEducator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
