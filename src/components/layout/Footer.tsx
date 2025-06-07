import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Heart,
  Shield,
  Truck,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Pássaros Saudáveis</h3>
              <p className="text-sm text-white/80">
                Todos nossos pássaros são criados com muito amor e cuidado
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Certificado IBAMA</h3>
              <p className="text-sm text-white/80">
                Licença e documentação completa para cada pássaro
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Entrega Segura</h3>
              <p className="text-sm text-white/80">
                Transporte especializado para garantir o bem-estar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Suporte Especializado</h3>
              <p className="text-sm text-white/80">
                Orientação completa para cuidados pós-compra
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">🦜</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl gradient-text">
                    Recanto das Asas
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Há mais de 10 anos trazendo alegria e música para lares brasileiros 
                através de pássaros especiais criados com amor e dedicação.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {[
                  'Início',
                  'Nossos Pássaros',
                  'Categorias',
                  'Sobre Nós',
                  'Blog',
                  'Contato'
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-lg mb-4">Categorias</h4>
              <ul className="space-y-2">
                {[
                  'Canários',
                  'Papagaios',
                  'Calopsitas',
                  'Periquitos',
                  'Pássaros Exóticos',
                  'Acessórios'
                ].map((category) => (
                  <li key={category}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-400">(11) 9 9999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span className="text-gray-400">contato@recantodasasas.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                  <span className="text-gray-400">
                    Rua dos Pássaros, 123<br />
                    Vila Aviária - São Paulo/SP<br />
                    CEP: 01234-567
                  </span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6">
                <h5 className="font-medium mb-2">Horário de Funcionamento</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Segunda à Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 16h</div>
                  <div>Domingo: 9h às 14h</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Recanto das Asas. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Entrega
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Política de Devolução
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 