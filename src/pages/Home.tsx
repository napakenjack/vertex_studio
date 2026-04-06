import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cuboid, Layers, MonitorPlay, Box, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroScene } from '../components/3d/HeroScene';

const services = [
  {
    icon: <Cuboid className="w-8 h-8 text-brand-400" />,
    title: '3D Characters',
    description: 'Game-ready character models with clean topology, optimized UVs, and PBR texturing for Unreal and Unity.',
  },
  {
    icon: <Box className="w-8 h-8 text-brand-400" />,
    title: 'Game Props',
    description: 'High-fidelity weapons, vehicles, and interactive props designed for next-gen gaming experiences.',
  },
  {
    icon: <Layers className="w-8 h-8 text-brand-400" />,
    title: 'Environment Assets',
    description: 'Modular environment kits and hero pieces to bring your digital worlds to life.',
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-brand-400" />,
    title: 'Product Visualization',
    description: 'Photorealistic 3D renders and animations for marketing, advertising, and e-commerce.',
  },
];

const portfolio = [
  {
    id: 1,
    title: 'Cyberpunk Enforcer',
    category: 'Character Modeling',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Sci-Fi Corridor Kit',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Tactical Drone',
    category: 'Hard-Surface Prop',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: 'Fantasy Tavern',
    category: 'Stylized Environment',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
  },
];

const benefits = [
  'Game-ready topology & clean UVs',
  'PBR-ready texturing pipelines',
  'Stylized or realistic art direction',
  'Optimized for Unreal Engine & Unity',
  'Production-focused delivery',
  'Fast communication & feedback loops',
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800/80 border border-dark-700 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting <span className="text-gradient">Next-Gen</span><br />
              3D Experiences
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium 3D character models, game props, and environment assets for studios that demand cinematic quality and production-ready workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/portfolio">
                <Button size="lg" className="w-full sm:w-auto">
                  View Portfolio
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-500 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Studio Specialization</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We build assets that drop seamlessly into your pipeline, whether you're building an indie darling or a AAA blockbuster.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-dark-800 border border-dark-700 p-8 rounded-2xl hover:border-brand-500/30 transition-colors group"
              >
                <div className="mb-6 p-4 bg-dark-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-dark-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-400 max-w-xl">A selection of our recent 3D production work across gaming, cinematics, and commercial projects.</p>
            </div>
            <Link to="/portfolio">
              <Button variant="ghost" icon={<ArrowRight className="w-4 h-4" />}>
                View All Projects
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/20 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="text-sm text-gray-300 flex items-center gap-2">
                      View Project <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Production-Ready,<br />Zero Friction.</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We understand the technical constraints of modern game engines. Our assets aren't just pretty renders—they are highly optimized, properly UV-mapped, and ready to drop into your project.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link to="/about">
                  <Button variant="outline">Learn About Our Process</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-dark-700 relative">
                <img 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000" 
                  alt="3D Wireframe" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 to-transparent mix-blend-overlay" />
              </div>
              
              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-dark-800 border border-dark-600 p-6 rounded-xl shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-brand-400 fill-brand-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">5.0/5</span>
                </div>
                <p className="text-sm text-gray-300">"Incredible topology and fast turnaround."</p>
                <p className="text-xs text-gray-500 mt-2">— Lead Artist, Indie Studio</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to elevate your visuals?</h2>
          <p className="text-xl text-brand-100/80 mb-10 max-w-2xl mx-auto">
            Let's discuss your next project. We provide custom quotes within 24 hours.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-brand-900 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get a Custom Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
