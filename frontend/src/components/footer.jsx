import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-pink-500 text-xl font-semibold">Blog Articles</h2>
          <p className="mt-2 text-sm">Sharing thoughts, one article at a time.</p>
          <div className="flex space-x-3 mt-3">
            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-lg" />
            <FaGithub className="text-gray-400 hover:text-white cursor-pointer text-lg" />
            <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-lg" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-pink-400 font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-pink-400 font-semibold">Categories</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Technology</a></li>
            <li><a href="#" className="hover:text-white">Lifestyle</a></li>
            <li><a href="#" className="hover:text-white">Design</a></li>
            <li><a href="#" className="hover:text-white">Photography</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-pink-400 font-semibold">Newsletter</h3>
          <p className="text-sm mt-2">Subscribe to our newsletter for the latest updates.</p>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            <button className="w-full mt-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2024 Blog Articles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
