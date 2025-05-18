import React, { useRef, useEffect } from 'react';
import { LOAN_APPLICATION_URL } from '../constants';

const Process: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return;
      
      const steps = stepsRef.current.querySelectorAll('.process-step');
      
      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          step.classList.add('animate-fade-in');
          step.classList.add('animate-delay-' + index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="process" className="py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Proceso Simplificado
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            De la solicitud a la acreditación en pocos pasos
          </p>
        </div>
        
        <div 
          ref={stepsRef}
          className="mt-16 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-indigo-200 dark:bg-indigo-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="process-step opacity-0 relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                      1
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                      Completa la solicitud
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Llena un formulario simple con tus datos personales y bancarios. 
                    El proceso solo toma unos minutos y no requiere información sensible.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-0 left-1/2 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800 border-4 border-indigo-400 dark:border-indigo-500 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-8">
                <div className="md:mt-0 md:ml-6">
                  <img 
                    src="https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Persona completando un formulario en línea" 
                    className="rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] w-full h-48 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="process-step opacity-0 relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 md:order-2">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                      2
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                      Verificación de datos
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nuestro sistema verifica de forma automática tus datos bancarios para aprobar la legitimidad
                    y realiza una evaluación de tu historial crediticio.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-0 left-1/2 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800 border-4 border-indigo-400 dark:border-indigo-500 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-8 md:order-1">
                <div className="md:mt-0 md:mr-6">
                  <img 
                    src="https://images.pexels.com/photos/8353787/pexels-photo-8353787.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Verificación de datos" 
                    className="rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] w-full h-48 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="process-step opacity-0 relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                      3
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                      Aprobación y depósito
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Una vez aprobado, el monto solicitado se deposita en tu cuenta bancaria.
                    El tiempo de acreditación depende de tu banco, generalmente es inmediato.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-0 left-1/2 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800 border-4 border-indigo-400 dark:border-indigo-500 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-8">
                <div className="md:mt-0 md:ml-6">
                  <img 
                    src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Depósito en cuenta bancaria" 
                    className="rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] w-full h-48 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="process-step opacity-0 relative md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 md:order-2">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                      4
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                      Confirmación por email/WhatsApp
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Te contactaremos por email o WhatsApp para confirmar la operación
                    y resolver cualquier duda que puedas tener sobre tu préstamo.
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-0 left-1/2 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-800 border-4 border-indigo-400 dark:border-indigo-500 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-8 md:order-1">
                <div className="md:mt-0 md:mr-6">
                  <img 
                    src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Persona recibiendo confirmación" 
                    className="rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] w-full h-48 md:h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a
              href={LOAN_APPLICATION_URL}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition transform duration-300 hover:scale-105"
            >
              Comenzar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;