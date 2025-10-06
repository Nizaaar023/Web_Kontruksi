import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const Hero = () => {
  const {
    toast
  } = useToast();
  const handleCTAClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan."
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Konstruksi Lapangan Olahraga Terpercaya</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.3
            }} className="text-4xl md:text-6xl font-bold leading-tight">
                Bangun Lapangan
                <span className="gradient-text block">Olahraga Impian</span>
                Anda Bersama Kami
              </motion.h1>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-xl text-gray-300 leading-relaxed max-w-lg">Menerima jasa pembangungan lapangan padel, futsal, mini soccer, tenis, dan gedung serbaguna dengan standar internasional dan teknologi terdepan.</motion.p>
            </div>

            {/* Features List */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="grid grid-cols-2 gap-4">
              {['Standar FIFA/ITF', 'Garansi 5 Tahun', 'Tim Berpengalaman', 'Harga Kompetitif'].map((feature, index) => <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>)}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCTAClick} size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold group">
                Mulai Proyek Anda
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button onClick={() => handleCTAClick('portofolio')}  variant="outline" size="lg" className="border-green-500/50 text-green-400 hover:bg-green-500/10 px-8 py-4 text-lg font-semibold group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Lihat Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              {[{
              number: '500+',
              label: 'Proyek Selesai'
            }, {
              number: '15+',
              label: 'Tahun Pengalaman'
            }, {
              number: '98%',
              label: 'Kepuasan Klien'
            }].map((stat, index) => <div key={index} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>)}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img alt="Lapangan olahraga modern dengan pencahayaan LED" className="w-full h-[600px] object-cover rounded-2xl" src="https://images.unsplash.com/photo-1673266893159-f522a5e9e036" />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                
                {/* Floating Cards */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 1,
                duration: 0.5
              }} className="absolute top-6 right-6 glass-effect rounded-lg p-4 text-center">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-white">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-300">Rating Klien</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 1.2,
                duration: 0.5
              }} className="absolute bottom-6 left-6 glass-effect rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8 text-green-400" />
                    <div>
                      <div className="font-bold text-white">1000+</div>
                      <p className="text-xs text-gray-300">Klien Puas</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        {/* <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-400">Scroll untuk melihat lebih</span>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </div> */}
      </motion.div>
    </section>;
};
export default Hero;