import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-steel-blue/20 bg-deep-space-blue pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="text-xl font-bold bg-gradient-to-r from-papaya-whip to-steel-blue bg-clip-text text-transparent">
            Portfolio
          </span>
          <p className="text-papaya-whip/50 text-sm mt-2">© {new Date().getFullYear()} Creative Developer. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-papaya-whip/70 hover:text-papaya-whip transition-colors">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-papaya-whip/70 hover:text-papaya-whip transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-papaya-whip/70 hover:text-papaya-whip transition-colors">
            <span className="sr-only">Gmail</span>
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
