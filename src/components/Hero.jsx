import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel-blue/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block"
        >
          <span className="px-3 py-1 rounded-full border border-steel-blue/30 bg-steel-blue/10 text-papaya-whip text-sm font-medium backdrop-blur-sm">
            Available for new opportunities
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-papaya-whip mb-6"
        >
          Hi, I'm Edwin <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-papaya-whip to-steel-blue bg-clip-text text-transparent">
            Creative Developer
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-papaya-whip/70 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I build exceptional and accessible digital experiences for the web. 
          Focusing on highly aesthetic interfaces, performance, and user experience.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-papaya-whip bg-papaya-whip/10 hover:bg-papaya-whip/20 rounded-full transition-all duration-300 overflow-hidden ring-1 ring-white/20">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-papaya-whip/20 to-steel-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="https://drive.google.com/file/d/1O0E4tR8VI7jDLyEsqG8jhvjcavAfcBKk/view?usp=drive_link" className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-papaya-whip/80 hover:text-papaya-whip rounded-full transition-colors">
            Download Resume
            <Download className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
