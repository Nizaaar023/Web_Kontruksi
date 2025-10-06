import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/asset/Profile.jpg';
const Header = ({
  scrollToSection
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    label: 'Beranda',
    id: 'beranda'
  }, {
    label: 'Layanan',
    id: 'layanan'
  }, {
    label: 'Portofolio',
    id: 'portofolio'
  }, {
    label: 'Tentang',
    id: 'tentang'
  }, {
    label: 'Kontak',
    id: 'kontak'
  }];
  const handleNavClick = sectionId => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('beranda')}>
            {/* <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Noire Sport Building</h1>
              <p className="text-xs text-gray-400">Konstruksi Lapangan Olahraga</p>
            </div> */}
            <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('beranda')}>
              <img
                src={logo}
                alt="Profile.jpg"
                className="w-10 h-10 rounded-lg object-cover"
              />

              <div>
                <h1 className="text-xl font-bold gradient-text">Noire Sport Building</h1>
                <p className="text-xs text-gray-400">Konstruksi Lapangan Olahraga</p>
              </div>
            </motion.div>

          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <motion.button key={item.id} whileHover={{
            scale: 1.05
          }} onClick={() => handleNavClick(item.id)} className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                {item.label}
              </motion.button>)}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              {/* <Phone className="w-4 h-4" /> */}
            </div>
            <Button onClick={() => handleNavClick('kontak')} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              Konsultasi Gratis
            </Button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden mt-4 glass-effect rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-gray-300 hover:text-green-400 transition-colors text-left">
                  {item.label}
                </button>)}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+62 812-3456-7890</span>
                </div>
                <Button onClick={() => handleNavClick('kontak')} className="w-full bg-gradient-to-r from-green-500 to-blue-500">
                  Konsultasi Gratis
                </Button>
              </div>
            </nav>
          </motion.div>}
      </div>
    </motion.header>;
};
export default Header;