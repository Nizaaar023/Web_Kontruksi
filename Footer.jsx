import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Award,
  Shield,
  Clock
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = ({ scrollToSection }) => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀"
    });
  };

  const services = [
    'Lapangan Padel',
    'Lapangan Futsal',
    'Mini Soccer',
    'Lapangan Tenis',
    'Lapangan Basket',
    'Gedung Serbaguna'
  ];

  const quickLinks = [
    { label: 'Tentang Kami', id: 'tentang' },
    { label: 'Portfolio', id: 'portofolio' },
    { label: 'Layanan', id: 'layanan' },
    { label: 'Kontak', id: 'kontak' },
  ];

  const certifications = [
    { icon: <Award className="w-5 h-5" />, text: 'Sertifikasi FIFA' },
    { icon: <Shield className="w-5 h-5" />, text: 'ISO 9001:2015' },
    { icon: <Clock className="w-5 h-5" />, text: 'Garansi 5 Tahun' }
  ];

  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => scrollToSection('beranda')}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <span className="text-2xl font-bold gradient-text">Noire Sport Building</span>
                  <p className="text-sm text-gray-400">Konstruksi Lapangan Olahraga</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Spesialis konstruksi lapangan olahraga dengan standar internasional. 
                Membangun masa depan olahraga Indonesia sejak 2008.
              </p>

              <div className="space-y-3">
                <span className="text-sm font-semibold text-gray-400">Sertifikasi & Jaminan:</span>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="text-green-400">{cert.icon}</div>
                      <span>{cert.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-sm font-semibold text-gray-400">Ikuti Kami:</span>
                <div className="flex space-x-3">
                  {[
                    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook' },
                    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
                    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
                    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      onClick={handleSocialClick}
                      className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-green-500 hover:to-blue-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <span className="text-lg font-bold text-white">Layanan Kami</span>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection('layanan')}
                    className="block text-gray-300 hover:text-green-400 transition-colors text-left"
                  >
                    {service}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-lg font-bold text-white">Tautan Cepat</span>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-300 hover:text-green-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <span className="text-lg font-bold text-white">Kontak</span>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Jl. Sudirman No. 123</p>
                    <p>Jakarta Pusat 10220</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>+62 895-1315-8890</p>
                    <p>+62 895-1315-8890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>nizarabdulfatahalhakim@gmail.com</p>
                    {/* <p>sales@sportbuildpro.com</p> */}
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-lg p-4">
                <span className="text-sm font-semibold text-white block mb-2">Jam Operasional:</span>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Noire Sport Building. Semua hak cipta dilindungi.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {['Kebijakan Privasi', 'Syarat & Ketentuan', 'Sitemap'].map((item, index) => (
                <button
                  key={index}
                  onClick={handleSocialClick}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
              Noire Sport Building adalah perusahaan konstruksi lapangan olahraga terpercaya dengan pengalaman 15+ tahun. 
              Kami berkomitmen memberikan layanan terbaik dengan standar internasional untuk mendukung kemajuan olahraga Indonesia. 
              Semua proyek dilengkapi dengan garansi komprehensif dan dukungan purna jual terbaik.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;