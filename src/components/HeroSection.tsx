import React, { useEffect, useRef } from 'react';
import { LOAN_APPLICATION_URL } from '../constants';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.setProperty('--moveX', `${moveX}px`);
      heroRef.current.style.setProperty('--moveY', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="home" className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 bg-white dark:bg-gray-900">
      <div 
        ref={heroRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{
          '--moveX': '0px',
          '--moveY': '0px',
        } as React.CSSProperties}
      >
        <div className="text-center">
          <div className="absolute inset-0 opacity-40 dark:opacity-20 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 -right-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              style={{ transform: `translate(calc(var(--moveX) * -0.5), calc(var(--moveY) * -0.5))` }}>
            <span className="block">Préstamos Personales</span>
            <span className="block text-indigo-600 dark:text-indigo-400">Simples y Rápidos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
             style={{ transform: `translate(calc(var(--moveX) * -0.3), calc(var(--moveY) * -0.3))` }}>
            Hasta 2,5 millones de pesos con plazos de hasta 60 meses.
            Proceso 100% online, sin papeleos y con acreditación inmediata.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
               style={{ transform: `translate(calc(var(--moveX) * -0.1), calc(var(--moveY) * -0.1))` }}>
            <div className="rounded-md shadow">
              <a
                href={LOAN_APPLICATION_URL}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                Solicitar Ahora
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#calculator"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 dark:text-indigo-400 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 md:py-4 md:text-lg md:px-10"
              >
                Calculadora
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-20 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 animate-float-slow hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-70 transform rotate-12 filter blur-sm"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-xl border border-white/50 dark:border-white/10 shadow-xl transform -rotate-6"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">💸</div>
      </div>
      
      <div className="absolute top-2/3 right-16 w-20 h-20 animate-float-med hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl opacity-70 transform rotate-12 filter blur-sm"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30 dark:bg-black/30 rounded-xl border border-white/50 dark:border-white/10 shadow-xl transform -rotate-6"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">🔐</div>
      </div>
    </div>
  );
};

export default HeroSection;