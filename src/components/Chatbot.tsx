import React, { useState, useRef, useEffect } from 'react';
import { CHATBOT_QUESTIONS } from '../constants';
import { MessageSquare, ArrowRight, X } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    {
      text: '¡Hola! Soy el asistente virtual de CrédiAr. ¿En qué puedo ayudarte hoy?',
      isUser: false
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const selectQuestion = (id: number) => {
    setSelectedQuestion(id);
    const question = CHATBOT_QUESTIONS.find(q => q.id === id);
    
    if (question) {
      setMessages(prev => [...prev, {text: question.question, isUser: true}]);
      setIsTyping(true);
      
      // Simulate typing delay
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {text: question.answer, isUser: false}]);
      }, 1500);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={toggleChatbot}
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 focus:outline-none ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-indigo-600 hover:bg-indigo-700'
        } p-4`}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chatbot container */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        } overflow-hidden flex flex-col`}
        style={{ maxHeight: '70vh' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
          <h3 className="font-bold">Asistente CrédiAr</h3>
          <p className="text-sm text-indigo-100">Respuestas al instante</p>
        </div>

        {/* Messages container */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow rounded-tl-none">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
        </div>

        {/* Question selection */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Selecciona una pregunta:
          </p>
          <div className="max-h-40 overflow-y-auto">
            {CHATBOT_QUESTIONS.map((q) => (
              <button
                key={q.id}
                onClick={() => selectQuestion(q.id)}
                disabled={selectedQuestion === q.id}
                className={`w-full text-left p-2 text-sm mb-1 rounded transition-colors ${
                  selectedQuestion === q.id
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 cursor-default'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                } flex items-center`}
              >
                <span className="mr-2 flex-1">{q.question}</span>
                <ArrowRight className={`h-4 w-4 ${selectedQuestion === q.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400'}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;