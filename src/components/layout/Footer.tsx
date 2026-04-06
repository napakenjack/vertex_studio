import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-brand-500" />
              <span className="font-display font-bold text-xl tracking-tight">
                VERTEX<span className="text-brand-500">STUDIO</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A premium 3D production studio specializing in high-quality characters, props, and environments for games, cinematics, and digital products.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">3D Character Modeling</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Game-Ready Props</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Environment Assets</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Hard-Surface Modeling</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Product Visualization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">hello@vertexstudio.com</span>
              </li>
              <li className="text-gray-400 text-sm mt-4">
                Ready to start your next project? We're currently accepting new clients for Q3.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vertex Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
