import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Target, 
  Zap, 
  CheckCircle,
  TrendingUp,
  Globe,
  Heart
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Proyek Selesai', icon: <Target className="w-6 h-6" /> },
    { number: '15+', label: 'Tahun Pengalaman', icon: <Award className="w-6 h-6" /> },
    { number: '1000+', label: 'Klien Puas', icon: <Users className="w-6 h-6" /> },
    { number: '98%', label: 'Tingkat Kepuasan', icon: <Heart className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Kualitas Premium',
      description: 'Kami berkomitmen menggunakan material terbaik dan teknologi terdepan untuk setiap proyek.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Tim Profesional',
      description: 'Didukung tim ahli berpengalaman dengan sertifikasi internasional di bidangnya.'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Inovasi Berkelanjutan',
      description: 'Selalu mengadopsi teknologi dan metode konstruksi terbaru untuk hasil optimal.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Standar Internasional',
      description: 'Semua proyek mengikuti standar FIFA, ITF, FIBA untuk kualitas kelas dunia.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Didirikan SportBuild Pro', description: 'Memulai perjalanan sebagai kontraktor spesialis olahraga' },
    { year: '2012', event: 'Sertifikasi FIFA', description: 'Mendapat sertifikasi resmi untuk konstruksi lapangan sepakbola' },
    { year: '2016', event: '100 Proyek Selesai', description: 'Mencapai milestone 100 proyek konstruksi lapangan olahraga' },
    { year: '2020', event: 'Ekspansi Nasional', description: 'Membuka cabang di 10 kota besar Indonesia' },
    { year: '2023', event: '500+ Proyek', description: 'Berhasil menyelesaikan lebih dari 500 proyek di seluruh Indonesia' }
  ];

  return (
    <section id="tentang" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-blue-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Tentang Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Membangun <span className="gradient-text">Masa Depan</span> Olahraga Indonesia
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sejak 2008, SportBuild Pro telah menjadi pionir dalam konstruksi fasilitas olahraga berkualitas tinggi di Indonesia.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center glass-effect rounded-2xl p-6 hover-lift"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              Visi & Misi <span className="gradient-text">SportBuild Pro</span>
            </h3>
            
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Visi Kami
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Menjadi perusahaan konstruksi lapangan olahraga terdepan di Asia Tenggara yang menghadirkan 
                  fasilitas olahraga berkualitas dunia untuk mendukung prestasi atlet Indonesia.
                </p>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-400 mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Misi Kami
                </h4>
                <div className="space-y-3">
                  {[
                    'Menyediakan konstruksi lapangan olahraga dengan standar internasional',
                    'Menggunakan teknologi dan material terdepan untuk kualitas optimal',
                    'Memberikan layanan profesional dengan komitmen tepat waktu',
                    'Mendukung pengembangan olahraga Indonesia melalui fasilitas berkualitas'
                  ].map((mission, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{mission}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img  
                alt="Tim konstruksi SportBuild Pro sedang bekerja"
                className="w-full h-[500px] object-cover"
               src="" />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 glass-effect rounded-lg p-4"
              >
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="font-bold text-white">15+ Tahun</div>
                    <p className="text-xs text-gray-300">Pengalaman Terpercaya</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Nilai-Nilai <span className="gradient-text">Perusahaan</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap pekerjaan yang kami lakukan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4 glass-effect rounded-2xl p-6 hover-lift"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Perjalanan <span className="gradient-text">Kami</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Milestone penting dalam perjalanan SportBuild Pro menjadi leader konstruksi olahraga.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6">
                      <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{milestone.event}</h4>
                      <p className="text-gray-300 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full pulse-green"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;