import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const Requirements: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.requirement-item');
      items.forEach((item) => observer.observe(item));
    }
    
    return () => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.requirement-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="requirements" className="py-16 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="hidden lg:block absolute -right-10 -top-10 w-72 h-72 bg-indigo-50 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl"></div>
      <div className="hidden lg:block absolute -left-20 bottom-0 w-72 h-72 bg-purple-50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Requisitos Simples
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Todo lo que necesitas para acceder a tu préstamo
          </p>
        </div>
        
        <div ref={containerRef} className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="requirement-item opacity-0 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Residencia en Argentina
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Debes ser residente en la República Argentina y contar con DNI argentino. 
                  No es necesario que tengas domicilio propio, puedes alquilar o vivir con familiares.
                </p>
              </div>
            </div>
          </div>
          
          <div className="requirement-item opacity-0 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  DNI y Mayor de Edad
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Es necesario que seas mayor de 21 años y tengas DNI argentino vigente. 
                  Tu identidad será verificada digitalmente, sin necesidad de enviar copias físicas.
                </p>
              </div>
            </div>
          </div>
          
          <div className="requirement-item opacity-0 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Cuenta Bancaria
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Debes contar con una cuenta bancaria o virtual a tu nombre donde depositaremos el dinero.
                  Aceptamos cuentas en cualquier banco o billetera virtual con CVU/CBU.
                </p>
              </div>
            </div>
          </div>
          
          <div className="requirement-item opacity-0 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" style={{ animationDelay: '0.6s' }}>
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Proceso 100% Digital
                </h3>
              </div>
              <div className="mt-4">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  Todo el proceso se realiza online, desde la solicitud hasta la acreditación. 
                  No necesitas presentar documentación física ni asistir a sucursales.
                </p>
                <div className="mt-5">
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">Información requerida:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-600 dark:text-gray-400">Datos personales básicos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-600 dark:text-gray-400">Datos de tu cuenta bancaria</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="ml-2 text-gray-600 dark:text-gray-400">Información de contacto</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;