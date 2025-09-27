import React from 'react';

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  primary?: boolean;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, icon, children, className, style, primary = false }) => {
  const commonClasses = 'group flex items-center justify-center w-full p-4 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.03]';

  const primaryClasses = 'cyber-button text-white';
  
  const defaultClasses = 'bg-slate-100/80 dark:bg-slate-800/50 border border-slate-300/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white hover:dark:text-white hover:border-transparent hover:shadow-cyan-500/20 shadow-lg';

  const finalClasses = primary ? primaryClasses : defaultClasses;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${commonClasses} ${finalClasses} ${className}`}
      style={style}
    >
      <span className="w-6 h-6 mr-4 transition-colors duration-300">
        {icon}
      </span>
      <span className="font-semibold">{children}</span>
    </a>
  );
};