import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('Semua');

  const handleProjectClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan."
    });
  };

  const filters = ['Semua', 'Padel', 'Futsal', 'Tenis', 'Mini Soccer', 'Gedung'];

  const projects = [
    {
      id: 1,
      title: 'Kompleks Olahraga Senayan',
      category: 'Gedung',
      location: 'Jakarta Pusat',
      year: '2023',
      client: 'Pemerintah DKI Jakarta',
      description: 'Pembangunan gedung serbaguna dengan kapasitas 2000 orang untuk berbagai event olahraga.',
      image: 'Large modern sports complex with multiple courts and spectator seating',
      features: ['Kapasitas 2000 orang', 'AC Central', 'Sound System Premium', 'Parkir 500 mobil'],
      value: 'Rp 15 Miliar'
    },
    {
      id: 2,
      title: 'Padel Club Premium Bintaro',
      category: 'Padel',
      location: 'Tangerang Selatan',
      year: '2023',
      client: 'Bintaro Sports Center',
      description: 'Konstruksi 6 lapangan padel dengan fasilitas premium dan clubhouse mewah.',
      image: 'Premium padel courts with glass walls and professional lighting',
      features: ['6 Lapangan Padel', 'Clubhouse Mewah', 'Cafe & Restaurant', 'Pro Shop'],
      value: 'Rp 8.5 Miliar'
    },
    {
      id: 3,
      title: 'Arena Futsal Kemang',
      category: 'Futsal',
      location: 'Jakarta Selatan',
      year: '2023',
      client: 'Kemang Sports',
      description: 'Pembangunan 4 lapangan futsal indoor dengan sistem ventilasi terbaik.',
      image: 'Indoor futsal courts with professional flooring and ventilation system',
      features: ['4 Lapangan Indoor', 'Sistem Ventilasi', 'Tribun 200 orang', 'Kantin'],
      value: 'Rp 3.2 Miliar'
    },
    {
      id: 4,
      title: 'Tennis Club Pondok Indah',
      category: 'Tenis',
      location: 'Jakarta Selatan',
      year: '2022',
      client: 'PI Tennis Club',
      description: 'Renovasi dan pembangunan 8 lapangan tenis dengan permukaan hard court premium.',
      image: 'Professional tennis courts with hard court surface and net systems',
      features: ['8 Lapangan Tenis', 'Hard Court Premium', 'Pencahayaan LED', 'Clubhouse'],
      value: 'Rp 4.8 Miliar'
    },
    {
      id: 5,
      title: 'Mini Soccer Kelapa Gading',
      category: 'Mini Soccer',
      location: 'Jakarta Utara',
      year: '2022',
      client: 'KG Sports Center',
      description: 'Konstruksi lapangan mini soccer dengan rumput sintetis FIFA Quality Pro.',
      image: 'Mini soccer field with FIFA quality artificial grass and modern facilities',
      features: ['Rumput FIFA Quality Pro', 'Sistem Drainase', 'Tribun 300 orang', 'Parkir Luas'],
      value: 'Rp 2.1 Miliar'
    },
    {
      id: 6,
      title: 'Padel Court Serpong',
      category: 'Padel',
      location: 'Tangerang Selatan',
      year: '2022',
      client: 'Serpong Padel Club',
      description: 'Pembangunan 3 lapangan padel outdoor dengan sistem pencahayaan LED.',
      image: 'Outdoor padel courts with LED lighting system and glass walls',
      features: ['3 Lapangan Outdoor', 'LED Lighting', 'Dinding Kaca 12mm', 'Lounge Area'],
      value: 'Rp 2.8 Miliar'
    }
  ];

  const filteredProjects = activeFilter === 'Semua' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-green-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Portfolio Proyek</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyek <span className="gradient-text">Terbaik</span> Kami
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lihat berbagai proyek konstruksi lapangan olahraga yang telah kami selesaikan dengan standar kualitas terbaik.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400'
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="sport-card rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img  
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button
                      onClick={handleProjectClick}
                      size="sm"
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat Detail
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Value Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.value}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4" />
                    <span>Klien: {project.client}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Fitur Utama:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-gray-400 flex items-center space-x-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleProjectClick}
                  variant="outline"
                  size="sm"
                  className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 group"
                >
                  Lihat Selengkapnya
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Proyek <span className="gradient-text">Impian Anda</span>?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan konstruksi lapangan olahraga Anda dengan tim ahli kami. 
              Dapatkan penawaran terbaik dan solusi yang tepat.
            </p>
            <Button
              onClick={handleProjectClick}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold"
            >
              Konsultasi Gratis Sekarang
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;