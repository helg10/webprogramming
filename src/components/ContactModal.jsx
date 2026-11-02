import React, { useState, useEffect } from 'react';

export default function ContactModal(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-[#fdfbf7] dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full p-6 relative border border-amber-200 dark:border-gray-800 transition-colors">
        
        {/* Кнопка закриття модального вікна */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-xl font-bold cursor-pointer"
          aria-label="Закрити"
        >
          &times;
        </button>

        <h3 className="text-xl font-bold mb-4 text-amber-900 dark:text-amber-400">
          Зворотний зв'язок
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
          Ви перебуваєте на сайті вже більше хвилини. Заповніть форму, і дані надійдуть безпосередньо на пошту.
        </p>

        <form 
          action="https://formspree.io/f/mjyyankg" 
          method="POST" 
          className="space-y-3"
        >
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Ім'я</label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-3 py-2 border border-amber-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-3 py-2 border border-amber-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Номер телефону</label>
            <input 
              type="tel" 
              name="phone" 
              className="w-full px-3 py-2 border border-amber-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Повідомлення</label>
            <textarea 
              name="message" 
              rows="3" 
              required 
              className="w-full px-3 py-2 border border-amber-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-2.5 bg-amber-800 dark:bg-amber-700 text-white rounded-lg font-medium text-sm hover:bg-amber-900 dark:hover:bg-amber-600 transition-colors shadow-sm cursor-pointer"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}