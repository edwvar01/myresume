import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-steel-blue/20 bg-deep-space-blue/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between py-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-papaya-whip to-steel-blue bg-clip-text text-transparent">
            Edwin Jijo
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="#contact" className="text-papaya-whip bg-steel-blue/20 hover:bg-steel-blue/30 focus:ring-4 focus:outline-none focus:ring-steel-blue/30 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors">
            Let's Talk
          </a>
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-papaya-whip/70 rounded-lg md:hidden hover:bg-steel-blue/30 focus:outline-none focus:ring-2 focus:ring-steel-blue/40" aria-controls="navbar-sticky" aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-steel-blue/20 rounded-lg bg-deep-space-blue/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a href="#home" className="block py-2 px-3 text-papaya-whip rounded hover:bg-steel-blue/30 md:hover:bg-transparent md:hover:text-steel-blue md:p-0 transition-colors">Home</a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-papaya-whip rounded hover:bg-steel-blue/30 md:hover:bg-transparent md:hover:text-steel-blue md:p-0 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-3 text-papaya-whip rounded hover:bg-steel-blue/30 md:hover:bg-transparent md:hover:text-steel-blue md:p-0 transition-colors">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
