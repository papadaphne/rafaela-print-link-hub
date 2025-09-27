import React, { useState, useEffect } from 'react';
import { LinkButton } from './components/LinkButton';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { socialLinks, serviceItems } from './constants';

const Logo = () => (
  <div className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-slate-300 dark:border-slate-700/50 animate-glow-primary flex items-center justify-center bg-white dark:bg-slate-800 overflow-hidden transition-colors duration-300">
    <img 
      src="https://i.imgur.com/vGFxLto.png"
      alt="Rafaela Print Logo" 
      className="w-full h-full object-cover" 
    />
  </div>
);


const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white flex flex-col items-center justify-center p-4 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent"></div>
      
      <main className="relative w-full max-w-md mx-auto bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 z-10 transition-colors duration-300">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <div className="text-center">
          <Logo />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 text-transparent bg-clip-text">
            Rafaela Print
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm md:text-base px-2 transition-colors duration-300">
            Solusi cetak digital dan offset terpercaya Anda. Kualitas, kecepatan, dan pelayanan terbaik.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {socialLinks.map((link, index) => (
            <LinkButton 
              key={link.id} 
              href={link.url} 
              icon={link.icon}
              primary={link.id === 1}
              className="animate-fade-in-up"
              style={{ animationDelay: `${150 * (index + 1)}ms` }}
            >
              {link.text}
            </LinkButton>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
          <h2 className="text-center text-xl font-semibold text-slate-700 dark:text-slate-200 mb-6 animate-fade-in-up transition-colors duration-300" style={{ animationDelay: '900ms' }}>
            Layanan Kami
          </h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {serviceItems.map((item, index) => (
              <a
                key={item.id}
                href={item.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-center animate-fade-in-up bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-full text-xs md:text-sm text-slate-600 dark:text-slate-300 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${1000 + 50 * index}ms` }}
              >
                <span className="w-3.5 h-3.5 opacity-80">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="absolute bottom-4 text-center z-10 w-full px-4">
        <div className="text-slate-500 dark:text-slate-500 text-xs md:text-sm flex flex-col items-center gap-1 transition-colors duration-300">
            <p>📍 Semarang, Indonesia</p>
            <p>© {new Date().getFullYear()} Rafaela Print. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;