import React from 'react';
import { CreditCard, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                CrédiAr
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Préstamos personales en pesos argentinos. 
              Soluciones financieras simples, rápidas y 100% online.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#loans" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Préstamos Personales
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Calculadora de Préstamos
                </a>
              </li>
              <li>
                <a href="#requirements" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Requisitos
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Proceso de Solicitud
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Información Financiera
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" />
                <span className="text-gray-400 text-sm">Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400 text-sm">+54 11 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400 text-sm">info@crediar.com.ar</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CrédiAr. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;