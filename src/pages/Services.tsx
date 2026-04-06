import React from 'react';
import { motion } from 'motion/react';
import { Cuboid, Box, Layers, MonitorPlay, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Cuboid className="w-10 h-10 text-brand-400" />,
    title: '3D Character Modeling',
    description: 'From concept sculpts to fully rigged, game-ready characters. We specialize in both stylized and realistic aesthetics, ensuring perfect edge flow for animation.',
    features: ['High-poly sculpting', 'Retopology & UV mapping', 'PBR Texturing', 'Rigging & Skinning'],
  },
  {
    icon: <Box className="w-10 h-10 text-brand-400" />,
    title: 'Game Props & Weapons',
    description: 'Highly detailed hero props, weapons, and interactive objects. Optimized for performance without sacrificing visual fidelity.',
    features: ['Hard-surface modeling', 'Weapon mechanics', 'LOD generation', 'Texture atlasing'],
  },
  {
    icon: <Layers className="w-10 h-10 text-brand-400" />,
    title: 'Environment Assets',
    description: 'Modular kits and unique hero pieces to construct immersive worlds. We build assets that snap together perfectly in your engine of choice.',
    features: ['Modular architecture', 'Foliage & organic assets', 'Trim sheets', 'Collision meshes'],
  },
  {
    icon: <MonitorPlay className="w-10 h-10 text-brand-400" />,
    title: 'Product Visualization',
    description: 'Photorealistic renders and interactive 3D models for e-commerce, advertising, and marketing campaigns.',
    features: ['Studio lighting setups', 'Material recreation', '360° turntables', 'WebXR ready assets'],
  },
];

export function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400">
            Comprehensive 3D production services tailored for modern game engines and high-end rendering pipelines.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-2xl bg-dark-900 border border-dark-800 p-8 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-32 h-32 text-dark-700 group-hover:text-brand-500/50 transition-colors duration-500' })}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex p-3 rounded-xl bg-dark-800 border border-dark-700">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-gray-300">
                      <ShieldCheck className="w-5 h-5 text-brand-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mt-32 pt-24 border-t border-dark-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Production Pipeline</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A streamlined, transparent process designed to integrate seamlessly with your team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Brief', desc: 'We align on art direction, technical constraints, and delivery timelines.' },
              { step: '02', title: 'Blockout & Concept', desc: 'Initial 3D sketches to lock in proportions, silhouette, and scale.' },
              { step: '03', title: 'High/Low Poly & UVs', desc: 'Detailed sculpting followed by optimized retopology and efficient UV packing.' },
              { step: '04', title: 'Texturing & Delivery', desc: 'PBR texturing, engine integration testing, and final asset handoff.' },
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-dark-900 border border-dark-800"
              >
                <div className="text-5xl font-display font-bold text-dark-800 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
