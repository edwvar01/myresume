import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Html,Css,Javascript. Includes user authentication and a robust admin dashboard.',
    tags: ['Html', 'Css', 'Javascript', 'MongoDB'],
    image: 'https://res.cloudinary.com/pfvatafs/image/upload/v1784354679/Screenshot_2026-06-11_151334_dr8p8g.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'World Cup 2026',
    description: 'World Cup 2026 Fan Tracker is an interactive web platform designed for football fans to follow and explore every aspect of the FIFA World Cup 2026.',
    tags: ['Html', 'Css', 'Javascript', 'FireBase'],
    image: 'https://res.cloudinary.com/pfvatafs/image/upload/v1784354760/Screenshot_2026-07-18_113549_jsx2gb.png',
    liveUrl: 'https://worldcup-rho.vercel.app/',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Money Tracker',
    description: 'Interactive financial dashboard providing real-time analytics and visualizations using complex charting libraries and web sockets.',
    tags: ['TypeScript', 'React', 'Recharts', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-deep-space-blue/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-papaya-whip mb-4">Selected Work</h2>
          <p className="text-papaya-whip/70 max-w-2xl text-lg">A collection of projects showcasing my expertise in modern web development, UI design, and problem-solving.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-black/20 border border-steel-blue/20 rounded-2xl overflow-hidden hover:border-steel-blue/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-steel-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-papaya-whip mb-2">{project.title}</h3>
                <p className="text-papaya-whip/70 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-steel-blue/20 text-papaya-whip/90 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={project.liveUrl} className="flex items-center text-sm font-medium text-papaya-whip hover:text-steel-blue transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="flex items-center text-sm font-medium text-papaya-whip/70 hover:text-papaya-whip transition-colors">
                    <Code className="w-4 h-4 mr-1" />
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
