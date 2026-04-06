import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Trophy, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-950">
      <div className="container mx-auto px-6">
        
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Built by Artists,<br />Driven by Technology.</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Vertex Studio was founded with a single mission: to provide game developers and creative agencies with uncompromising 3D assets that perform as beautifully as they look.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 aspect-video rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?auto=format&fit=crop&q=80&w=1200" 
              alt="Studio Workspace" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square md:aspect-auto rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
              alt="3D Artist at work" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-dark-800">
          {[
            { icon: <Trophy />, value: '50+', label: 'Projects Shipped' },
            { icon: <Users />, value: '12', label: 'Senior Artists' },
            { icon: <Globe />, value: '15+', label: 'Countries Served' },
            { icon: <Target />, value: '100%', label: 'Client Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex p-3 rounded-full bg-dark-900 text-brand-500 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="space-y-8">
            {[
              { title: 'Technical Excellence', desc: 'Beautiful art is only half the battle. We ensure every asset is optimized, properly named, and structured for immediate engine integration.' },
              { title: 'Transparent Communication', desc: 'No black boxes. We provide regular work-in-progress updates and actively seek feedback to ensure alignment with your vision.' },
              { title: 'Adaptive Pipelines', desc: 'Whether you need a stylized PBR workflow or a highly realistic photogrammetry pipeline, we adapt our tools to match your project requirements.' }
            ].map((value, i) => (
              <div key={i} className="bg-dark-900 border border-dark-800 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3 text-brand-400">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
