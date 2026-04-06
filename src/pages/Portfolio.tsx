import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Characters', 'Props', 'Environments', 'Hard-Surface'];

const portfolioItems = [
  {
    id: 1,
    title: 'Cyberpunk Enforcer',
    category: 'Characters',
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800',
    description: 'Game-ready character with 45k tris and 4K PBR textures.',
  },
  {
    id: 2,
    title: 'Sci-Fi Corridor Kit',
    category: 'Environments',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800',
    description: 'Modular environment kit optimized for Unreal Engine 5.',
  },
  {
    id: 3,
    title: 'Tactical Drone',
    category: 'Hard-Surface',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    description: 'Hero prop with rigged mechanical parts and emissive maps.',
  },
  {
    id: 4,
    title: 'Fantasy Tavern',
    category: 'Environments',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
    description: 'Stylized environment with hand-painted textures.',
  },
  {
    id: 5,
    title: 'Plasma Rifle',
    category: 'Props',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800',
    description: 'First-person weapon model with animated reload states.',
  },
  {
    id: 6,
    title: 'Mech Suit Mk. IV',
    category: 'Hard-Surface',
    image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=800',
    description: 'High-poly concept sculpt for cinematic use.',
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-400">
            Explore our latest 3D production projects across various styles and technical requirements.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-brand-500 text-dark-950'
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-dark-900 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-400 text-xs font-bold tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
