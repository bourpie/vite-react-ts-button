import React from 'react';

interface ButtonProps {
  /**
   * Choix de variantes. Requis : tailwindcss-ripple
   */
  variant?: 'orange' | 'outline' | 'menuPrincipal' | 'diapo';
  /**
   * Quelle doit être la taille du bouton ?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Contenu du bouton
   */
  label: string;
  /**
   * Class CSS optionnelles
   */
  className?: string;
  /**
   * Est-ce que ce bouton est un lien ?
   */
  href?: string;
  /**
   * Gestionnaire de clic facultatif
   */
  onClick?: () => void;
}

/**
 * Composant Bouton
 */
export const SqButton = ({
  variant = 'orange',
  size = 'medium',
  label,
  href,
  className,
  ...props
}: ButtonProps) => {
  const variants = () => {
    if (variant === 'orange') return "ripple-bg-orange-800 hover:bg-orange-900 text-white font-bold py-[.875rem] text-lg px-6 rounded";
    if (variant === "outline") return "ripple-bg-orange-800 bg-white text-orange-800 hover:bg-orange-900 hover:text-white border-orange-800 border-2 font-bold py-[.875rem] text-lg px-6 rounded";
    if (variant === "menuPrincipal") return "hover:text-orange-900 text-lg transition ease-in duration-300";
    if (variant === "diapo") return "rounded-full bg-slate-300 w-10 h-10";
  }
  const sizes = () => {
    if (size === 'small') return '';
    if (size === 'medium') return '';
    if (size === 'large') return '';
  }
  const classes = () => {
    return className ? className : '';
  }
  return (
    <>
      { href ? (
        <a
          href={href}
          className={[classes,variants(),sizes()].join(' ')}
        >
          {label}
        </a>
      ) : (
        <button
          className={[classes,variants(),sizes()].join(' ')}
          {...props}
        >
          {label}
        </button>
      )}
    </>  
  );
};
