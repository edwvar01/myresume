import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-molten-lava/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-papaya-whip mb-6">Let's build something amazing together.</h2>
            <p className="text-papaya-whip/70 text-lg mb-10 max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black/20 border border-steel-blue/20 rounded-full flex items-center justify-center text-steel-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-papaya-whip font-medium">Email</h4>
                  <p className="text-papaya-whip/70">edwinjijo500@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black/20 border border-steel-blue/20 rounded-full flex items-center justify-center text-steel-blue">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-papaya-whip font-medium">Instagram</h4>
                  <p className="text-papaya-whip/70">@edwiinjijo</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 border border-steel-blue/20 p-8 rounded-3xl backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-papaya-whip/70 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/40 border border-steel-blue/20 rounded-xl px-4 py-3 text-papaya-whip focus:outline-none focus:border-steel-blue focus:ring-1 focus:ring-steel-blue transition-colors"
                  placeholder="Enter your name........"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-papaya-whip/70 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/40 border border-steel-blue/20 rounded-xl px-4 py-3 text-papaya-whip focus:outline-none focus:border-steel-blue focus:ring-1 focus:ring-steel-blue transition-colors"
                  placeholder="Enter your mail id........"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-papaya-whip/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-black/40 border border-steel-blue/20 rounded-xl px-4 py-3 text-papaya-whip focus:outline-none focus:border-steel-blue focus:ring-1 focus:ring-steel-blue transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-steel-blue to-steel-blue/80 hover:from-steel-blue/80 hover:to-steel-blue text-papaya-whip font-medium py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-steel-blue/25"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
