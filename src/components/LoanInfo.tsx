import React, { useState } from 'react';
import { LOAN_APPLICATION_URL } from '../constants';
import { DollarSign, Calendar, ArrowRight } from 'lucide-react';

const LoanInfo: React.FC = () => {
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(24);
  
  const monthlyPayment = () => {
    // Simple calculation, in a real app you'd use a more accurate formula
    const interestRate = 0.045; // 4.5% monthly interest
    const totalAmount = amount * Math.pow(1 + interestRate, months / 12);
    return (totalAmount / months).toFixed(0);
  };

  return (
    <section id="loans" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Préstamos adaptados a tus necesidades</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Financiamiento flexible con las mejores condiciones del mercado
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white dark:bg-gray-900 overflow-hidden shadow rounded-2xl transition-all duration-300 hover:shadow-lg">
              <div className="px-6 py-8 sm:p-10">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Préstamo Personal
                  </h3>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    $2.5M
                    <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                      max
                    </span>
                  </div>
                  <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
                    Ideal para consolidar deudas, renovar tu hogar o cualquier proyecto personal.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href={LOAN_APPLICATION_URL}
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300"
                    >
                      Solicitar <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <h4 className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      Monto desde $50.000 hasta $2.500.000
                    </h4>
                  </div>
                  <div className="mt-3 flex items-center">
                    <Calendar className="h-5 w-5 text-green-500" />
                    <h4 className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                      Plazos desde 3 hasta 60 meses
                    </h4>
                  </div>
                </div>
              </div>
              <div className="px-6 py-8 bg-gray-50 dark:bg-gray-800 sm:p-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    Beneficios
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                        100% online, sin papeleos
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                        Acreditación inmediata en tu cuenta
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                        Cancelación anticipada sin penalidades
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="calculator" className="bg-white dark:bg-gray-900 overflow-hidden shadow rounded-2xl transition-all duration-300 hover:shadow-lg">
              <div className="px-6 py-8 sm:p-10">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Calculadora de préstamos
                  </h3>
                  <div className="mt-6 space-y-6">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Monto: ${amount.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        id="amount"
                        name="amount"
                        min="50000"
                        max="2500000"
                        step="50000"
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                        className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label htmlFor="months" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Plazo: {months} meses
                      </label>
                      <input
                        type="range"
                        id="months"
                        name="months"
                        min="3"
                        max="60"
                        step="1"
                        value={months}
                        onChange={(e) => setMonths(parseInt(e.target.value))}
                        className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Cuota mensual estimada
                      </h4>
                      <div className="mt-2 flex items-baseline">
                        <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                          ${parseInt(monthlyPayment()).toLocaleString()}
                        </span>
                        <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                          /mes
                        </span>
                      </div>
                    </div>
                    <div className="self-end">
                      <a
                        href={LOAN_APPLICATION_URL}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                      >
                        Solicitar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    * Este cálculo es estimativo. La tasa final dependerá de la evaluación crediticia.
                    Las cuotas son fijas en pesos. No incluye gastos administrativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanInfo;