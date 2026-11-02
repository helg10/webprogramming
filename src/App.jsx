import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import CodingEnv from './components/CodingEnv';
import Education from './components/Education';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactModal from './components/ContactModal';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Функція перемикання стану
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="font-mono font-serif bg-[#f7f3ed] dark:bg-gray-950 text-[#2c2c2c] dark:text-gray-100 leading-[1.6] min-h-screen sm:p-5 flex flex-col items-center p-4 transition-colors duration-300">
        <div className="w-full max-w-[800px] flex justify-end mb-3">
          <button 
            onClick={toggleTheme}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[#dcd6cd] dark:border-gray-700 bg-white dark:bg-gray-900 text-[#bc7a4a] dark:text-amber-400 hover:bg-[#fdfbf7] dark:hover:bg-gray-800 transition-colors shadow-sm cursor-pointer"
          >
            {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
          </button>
        </div>

        <div className="w-full max-w-[800px] bg-white dark:bg-gray-900 border-2 border-[#dcd6cd] dark:border-gray-800 rounded-xl p-5 sm:p-[30px] shadow-[0_4px_12px_rgba(40,39,39,1)] flex flex-col gap-[25px] transition-colors duration-300">
          <Header />
          
          <main className="flex flex-col gap-5">
            <Experience />
            <CodingEnv />
            <Education />
            <Reviews />
            <ContactInfo />
            <ContactModal />
          </main>
          
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;