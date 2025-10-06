import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Building,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Fitur ini belum diimplementasikan."
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: 'Telepon',
      details: ['+62 895-1315-8890'],
      description: 'Hubungi kami kapan saja'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: 'Email',
      details: ['nizarabdulfatahalhakim@gmail.com', 'contoh@sportbuildpro.com'],
      description: 'Kirim pertanyaan Anda'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      title: 'Alamat Kantor',
      details: ['Jl. Sudirman No. 123', 'Jakarta Pusat 10220'],
      description: 'Kunjungi kantor pusat kami'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu: 08:00 - 12:00'],
      description: 'Waktu layanan konsultasi'
    }
  ];

  const offices = [
    { city: 'Jakarta', address: 'Jl. Sudirman No. 123', phone: '+62 895-1315-8890' },
    { city: 'Surabaya', address: 'Jl. Pemuda No. 456', phone: '+62 895-1315-8890' },
    { city: 'Bandung', address: 'Jl. Asia Afrika No. 789', phone: '+62 895-1315-8890' },
    { city: 'Medan', address: 'Jl. Gatot Subroto No. 321', phone: '+62 895-1315-8890' }
  ];

  const services = [
    'Lapangan Padel',
    'Lapangan Futsal', 
    'Mini Soccer',
    'Lapangan Tenis',
    'Lapangan Basket',
    'Gedung Serbaguna',
    'Konsultasi Umum'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            <MessageCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Hubungi Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mari <span className="gradient-text">Diskusikan</span> Proyek Anda
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tim ahli kami siap membantu mewujudkan lapangan olahraga impian Anda. Konsultasi gratis dan tanpa komitmen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Konsultasi Gratis</h3>
              <p className="text-gray-300">Isi form di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Jenis Layanan
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan / Deskripsi Proyek
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                  placeholder="Ceritakan detail proyek yang Anda inginkan..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 text-lg font-semibold group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Kirim Pesan
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{info.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{info.description}</p>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 font-medium">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Building className="w-6 h-6 text-green-400" />
                <h4 className="text-xl font-bold text-white">Kantor Cabang</h4>
              </div>
              
              <div className="grid gap-4">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">{office.city}</div>
                      <div className="text-sm text-gray-400">{office.address}</div>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      {office.phone}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-6 text-center"
            >
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Butuh Respon Cepat?</h4>
              <p className="text-gray-300 mb-6">
                Hubungi hotline kami untuk konsultasi langsung dengan tim ahli.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => toast({ title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀" })}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Telepon Sekarang
                </Button>
                <Button
                  onClick={() => toast({ title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀" })}
                  variant="outline"
                  className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;