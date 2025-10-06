import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Award, 
  Clock, 
  Users, 
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Services = () => {
  const { toast } = useToast();

  const handleServiceClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan."
    });
  };

  const services = [
    {
      icon: '🏓',
      title: 'Lapangan Padel',
      description: 'Konstruksi lapangan padel dengan standar internasional, dinding kaca tempered, dan sistem drainase optimal.',
      features: ['Dinding Kaca 12mm', 'Rumput Sintetis Premium', 'Sistem Drainase', 'Pencahayaan LED'],
      price: 'Mulai dari Rp 850 juta',
      image: 'Professional padel court with glass walls and artificial turf'
    },
    {
      icon: '⚽',
      title: 'Lapangan Futsal',
      description: 'Lapangan futsal berkualitas FIFA dengan permukaan yang aman dan nyaman untuk bermain.',
      features: ['Standar FIFA', 'Interlock System', 'Goal Post Premium', 'Marking Permanen'],
      price: 'Mulai dari Rp 450 juta',
      image: 'Modern futsal court with professional flooring and goal posts'
    },
    {
      icon: '🏟️',
      title: 'Mini Soccer',
      description: 'Lapangan mini soccer dengan rumput sintetis berkualitas tinggi dan sistem drainase terbaik.',
      features: ['Rumput FIFA Quality', 'Sistem Drainase', 'Pagar Pembatas', 'Tribun Penonton'],
      price: 'Mulai dari Rp 1.2 miliar',
      image: 'Mini soccer field with artificial grass and spectator stands'
    },
    {
      icon: '🎾',
      title: 'Lapangan Tenis',
      description: 'Konstruksi lapangan tenis dengan berbagai jenis permukaan sesuai standar ITF.',
      features: ['Permukaan Acrylic', 'Net System Premium', 'Marking ITF Standard', 'Pencahayaan Malam'],
      price: 'Mulai dari Rp 350 juta',
      image: 'Professional tennis court with acrylic surface and net system'
    },
    {
      icon: '🏢',
      title: 'Gedung Serbaguna',
      description: 'Pembangunan gedung serbaguna untuk berbagai aktivitas olahraga dan acara.',
      features: ['Struktur Baja Ringan', 'Lantai Parket', 'AC Central', 'Sound System'],
      price: 'Mulai dari Rp 2.5 miliar',
      image: 'Multi-purpose sports hall with wooden flooring and modern facilities'
    },
    {
      icon: '🏀',
      title: 'Lapangan Basket',
      description: 'Lapangan basket outdoor dan indoor dengan standar FIBA dan fasilitas lengkap.',
      features: ['Permukaan Acrylic', 'Ring Adjustable', 'Marking FIBA', 'Tribun Portable'],
      price: 'Mulai dari Rp 280 juta',
      image: 'Basketball court with professional hoops and court markings'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: 'Standar Internasional',
      description: 'Semua konstruksi mengikuti standar FIFA, ITF, dan FIBA untuk kualitas terbaik.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Garansi 5 Tahun',
      description: 'Kami memberikan garansi komprehensif untuk semua pekerjaan konstruksi.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: 'Tepat Waktu',
      description: 'Komitmen menyelesaikan proyek sesuai timeline yang telah disepakati.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Tim Berpengalaman',
      description: 'Didukung tim ahli dengan pengalaman 15+ tahun di bidang konstruksi olahraga.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Settings className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Layanan Konstruksi</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Layanan <span className="gradient-text">Konstruksi</span> Terlengkap
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan solusi konstruksi lapangan olahraga yang komprehensif dengan teknologi terdepan dan standar internasional.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="sport-card rounded-2xl p-6 hover-lift group"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img  
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute top-4 left-4 text-4xl">{service.icon}</div>
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-lg font-bold gradient-text mb-4">
                    {service.price}
                  </div>
                  
                  <Button
                    onClick={handleServiceClick}
                    className="w-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 hover:from-green-500/30 hover:to-blue-500/30 text-white group"
                  >
                    Konsultasi Gratis
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih <span className="gradient-text">SportBuild Pro</span>?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan standar kualitas internasional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;